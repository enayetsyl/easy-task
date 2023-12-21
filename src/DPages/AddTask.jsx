import { Paper, Typography } from "@mui/material";
import Form from "../Components/Form";
const AddTask = () => {

  
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
        >Add Task Form</Typography>
      <Form/>
      </Paper>
    </div>
  );
};

export default AddTask;