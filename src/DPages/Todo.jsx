import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "../Components/TaskCard";
import { Typography } from "@mui/material";

const Todo = () => {
  const {data:tasks, isLoading} = useQuery({
    queryKey:['todoTask'],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:5000/all-tasks?status=ongoing`)
      return result.data
    }
  })

  if(isLoading){
    return <p>Loading........</p>
  }
    console.log(tasks)
  return (
    <div className="border border-[#1976D2] px-2 py-4 rounded-lg space-y-2">
      <Typography variant="h5"
      textAlign={'center'}
      pb={2}
      >Todo Task</Typography>
      {
        tasks.map(task => <TaskCard key={task._id} task={task}/>)
      }
    </div>
  );
};

export default Todo;