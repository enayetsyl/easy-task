import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Ongoing = () => {
  // const {user} = useContext(AuthContext)
  // const userEmail = user.email;
  // console.log(userEmail)

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
Ongoing page      
    </div>
  );
};

export default Ongoing;