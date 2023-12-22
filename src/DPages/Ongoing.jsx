import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "../Components/TaskCard";
import { Typography } from "@mui/material";
import { useDrop } from "react-dnd";

const Ongoing = () => {
  const queryClient = useQueryClient();
  const {data:tasks, isLoading, refetch} = useQuery({
    queryKey:['ongoingTask'],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:5000/all-tasks?status=ongoing`)
      return result.data
    }
  })

  const [, drop] = useDrop({
    accept: 'Task',
    drop: async (item) => {
      const { id, status } = item;
      try {
        const result = await axios.put(`http://localhost:5000/update-task-status/${id}`, {
          status:'ongoing'
        });
  
        if(result.data.modifiedCount>0){
          queryClient.invalidateQueries('ongoingTask');
        }
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  })

  if(isLoading){
    return <p>Loading........</p>
  }
  console.log(tasks)
  
  return (
    <div 
    ref={drop}
    className="border border-[#1976D2] px-2 py-4 rounded-lg space-y-2">
       <Typography variant="h5"
      textAlign={'center'}
      pb={2}
      >Ongoing Task</Typography>
      {
        tasks.map(task => <TaskCard key={task._id} task={task} refetchData={refetch}/>)
      }
    </div>
  );
};

export default Ongoing;