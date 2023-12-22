import { Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from 'framer-motion';


const TaskCard = ({task, refetchData}) => {
  const shakeAnimation = {
    x: [0, -5, 5, -5, 5, 0], // Define the shake animation sequence
    transition: { duration: 0.6 }, // Set the duration of the shake animation
  };

  const [, drag] = useDrag({
    type:'Task',
    item:{id: task._id, status: task.status},
  })
  const [taskId, setTaskId] = useState('')

  const deleteTask = async() => {
    try {
      const result = await axios.delete(`http://localhost:5000/delete-task/${taskId}`)
      console.log('deleteTask clg', result)
      toast.success('Task deleted successfully!', {
        position: 'top-right',
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return result
    } catch (error) {
      console.log('deleteTask clg', error)
      throw error
    }
  }

  const {data, isPending, mutateAsync} = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      refetchData()
    }
  })

  const handleDelete = async(id) => {
    console.log('clicked', id)
    setTaskId(id)
    try {
      await mutateAsync()
    } catch (error) {
      console.log('handle delete clg error', error)
    }
  }


  return (
    <motion.div whileHover={shakeAnimation} className="flex-auto">
    <div 
    ref={drag}
    className="border border-[#1976D2] rounded-lg p-2">
      <Typography variant="h6">Title: {task.TaskTitle}</Typography>
      <Typography variant="body2">Description: {task.TaskDescription}</Typography>
      <Typography variant="body2">Priority: {task.Priority
}</Typography>
      <Typography variant="body2">Deadline: {task.Deadlines}</Typography>
      <Button 
      onClick={() => handleDelete(task._id)}
      variant="contained"
      size="small"
      color="error"
      >Delete</Button>
      <Link to={`/dashboard/edit-task/${task._id}`}>
      <Button 
      variant="contained"
      size="small"
      color="info"
      sx={{marginLeft:'5px'}}
      >Edit</Button>
      </Link>
      
    </div>
    </motion.div>
  );
};

export default TaskCard;