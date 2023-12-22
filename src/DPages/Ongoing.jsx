import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "../Components/TaskCard";
import { Typography } from "@mui/material";
import { useDrop } from "react-dnd";

const Ongoing = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);

  const { data: tasks, isLoading, refetch } = useQuery({
    queryKey: ['ongoingTask'], 
    // Include email and status in the query key , { status: 'ongoing', email: user.email }
    queryFn: async () => {
      try {
        const result = await axios.get(`https://task-management-server-rust.vercel.app/all-tasks`, {
          params: {
            status: 'ongoing',
            email: user.email,
          },
        });
        return result.data;
      } catch (error) {
        console.error('Error fetching ongoing tasks:', error);
      }
    },
  });
console.log(tasks)
  const [, drop] = useDrop({
    accept: 'Task',
    drop: async (item) => {
      const { id} = item;
      try {
        const result = await axios.put(`https://task-management-server-rust.vercel.app/update-task-status/${id}`, {
          status:'ongoing'
        });
  
        if(result.status === 200){
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