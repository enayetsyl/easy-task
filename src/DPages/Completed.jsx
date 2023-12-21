import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "../Components/TaskCard";
import { Typography } from "@mui/material";

const Completed = () => {
  const {data:tasks, isLoading, refetch} = useQuery({
    queryKey:['completedTask'],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:5000/all-tasks?status=completed`)
      return result.data
    }
  })

  if(isLoading){
    return <p>Loading........</p>
  }
  return (
    <div className="border border-[#1976D2] px-2 py-4 rounded-lg space-y-2">
       <Typography variant="h5"
      textAlign={'center'}
      pb={2}
      >Completed Task</Typography>
{
        tasks.map(task => <TaskCard key={task._id} task={task} refetchData={refetch}/>)
      }     
    </div>
  );
};

export default Completed;