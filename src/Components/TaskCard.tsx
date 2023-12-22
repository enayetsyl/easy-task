import { Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from 'framer-motion';

interface Task {
  Deadlines: string;
  Priority: string;
  TaskDescription: string;
  TaskTitle: string;
  status: string;
  userEmail: string;
  _id: string;
}

const TaskCard: React.FC<{ task: Task; refetchData: () => void }> = ({ task, refetchData }) => {
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
      const result = await axios.delete(`https://task-management-server-rust.vercel.app/delete-task/${taskId}`)
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

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  
  

  const calculateDaysRemaining = (deadline: string): number => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const timeDifference = deadlineDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  const daysRemaining = calculateDaysRemaining(task.Deadlines);
  const daysRemainingStyle = {
    color: daysRemaining <= 2 ? '#FF0000' : 'inherit',
    fontWeight: daysRemaining <= 2 ? 'bold' : 'normal',
  };

  const daysRemainingText = daysRemaining <= 0 ? 'Deadline passed' : daysRemaining;

  return (
    <motion.div whileHover={shakeAnimation} className="flex-auto">
    <div 
    ref={drag}
    className="border border-[#1976D2] rounded-lg p-2 space-y-1 min-w-64 text-center">
      <Typography variant="h6">Title: {task.TaskTitle}</Typography>

      <Typography variant="body2"
      textAlign={'left'}
      >Description: {task.TaskDescription}</Typography>

      <Typography 
       textAlign={'left'}
      variant="body2">Priority: {task.Priority
}</Typography>
      
      <Typography 
       textAlign={'left'}
      variant="body2">Deadline: {formatDate(task.Deadlines)}</Typography>
      
      <Typography variant="body2"
      textAlign={'left'}
      style={daysRemainingStyle}
      >Days Remaining: {daysRemainingText}</Typography>


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
      sx={{marginLeft:'5px', marginTop: '5px' }}
      >Edit</Button>
      </Link>
      
    </div>
    </motion.div>
  );
};

export default TaskCard;