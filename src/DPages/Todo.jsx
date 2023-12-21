import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    <div className="border border-[#1976D2] px-2 py-4 rounded-lg">
Todo page      
    </div>
  );
};

export default Todo;