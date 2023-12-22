import { Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditForm from "../Components/EditForm";

const EditTask = () => {
  const {id} = useParams()
   
  const {data:task, isLoading} = useQuery({
    queryKey:['edit-task'],
    queryFn: async() => {
      const result = await axios.get(`https://task-management-server-rust.vercel.app/single-task/${id}`)
      return result.data;
    }
  })

  if(isLoading){
    return <p>Loading</p>
  }


  return (
    <div className="px-10 md:px-20 lg:px-30 py-5">
      
      <Paper 
      elevation={8}
      my={5}
      sx={{
        padding:'20px',
      }}
      >
        <Typography variant="h5"
        textAlign={'center'}
        py={1}
        >Edit Task Form</Typography>
      <EditForm task={task}/>
      </Paper>
    </div>
  );
};

export default EditTask;