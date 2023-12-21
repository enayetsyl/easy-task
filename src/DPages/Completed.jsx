import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Completed = () => {
  const {data:tasks, isLoading} = useQuery({
    queryKey:['ongoingTask'],
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
Completed task page      
    </div>
  );
};

export default Completed;