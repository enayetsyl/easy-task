import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "../Components/TaskCard";
import { Typography } from "@mui/material";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Completed = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);

  const {data:tasks, isLoading, refetch} = useQuery({
    queryKey:['completedTask', { status: 'completed', email: user.email }],
    queryFn: async () => {
      try {
        const result = await axios.get(`http://localhost:5000/all-tasks`, {
          params: {
            status: 'completed',
            email: user.email,
          }
        })
        return result.data
      } catch (error) {
        console.error('Error fetching ongoing tasks:', error);
      }
    }
  })

  
  const [, drop] = useDrop({
    accept: 'Task',
    drop: async (item) => {
      const { id, status } = item;
      try {
        const result = await axios.put(`http://localhost:5000/update-task-status/${id}`, {
          status:'completed'
        });
  
        if(result.data.modifiedCount>0){
          queryClient.invalidateQueries('completedTask');
        }

             } 
       catch (error) {
        console.error('Error updating task status:', error);
      }
    }
  })

  if(isLoading){
    return <p>Loading........</p>
  }
  return (
    <div 
    ref={drop}
    className="border border-[#1976D2] px-2 py-4 rounded-lg space-y-2">
       <Typography variant="h5"
      textAlign={'center'}
      pb={2}
      >Completed Task</Typography>
{
        tasks?.map(task => <TaskCard key={task._id} task={task} refetchData={refetch}/>)
      }     
    </div>
  );
};

export default Completed;