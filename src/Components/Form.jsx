import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';


export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate() 
  const {user} = useContext(AuthContext)
  const [task, setTask] = useState(null)

  const userEmail = user?.email;
  const status = 'todo'

  const addTask = async() => {
    try{
      const result = await axios.post(`http://localhost:5000/add-task`, task)
      toast.success('Task added successfully!', {
        position: 'top-right',
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/dashboard')
      return result;

    }catch(error){
      toast.error('Task cannot added. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      throw error;
    }
    }

    const {mutateAsync } = useMutation({
     mutationFn: addTask,
    })

  const onSubmit = async (data) => {
    const task = {...data, userEmail, status}
    setTask(task)
    try {
      await mutateAsync()
    } catch (error) {
      console.log('from on submit', error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <label >Task Title</label>
      <input type="text" placeholder="Task Title" {...register("TaskTitle", {required: true})} 
      className='border py-1 px-2 rounded-lg border-[#1976D2]'
      />
      <label >Task Description</label>
      <input type="text" placeholder="TaskDescription" {...register("TaskDescription", {required: true})}
      className='border py-1 px-2 rounded-lg border-[#1976D2]'
      />
      <label >Deadline</label>
      <input type="datetime-local" placeholder="Deadlines" {...register("Deadlines", {required: true})} 
      className='border py-1 px-2 rounded-lg border-[#1976D2]'
      />
      <label >Priority</label>
      <select {...register("Priority", { required: true })}
      className='border py-1 px-2 rounded-lg border-[#1976D2]'
      >
        <option value="Low">Low</option>
        <option value=" Moderate"> Moderate</option>
        <option value=" High"> High</option>
      </select>

      <input type="submit" className='border border-solid border-black py-1 rounded-lg bg-[#1976D2] text-white font-bold' />
    </form>
  );
}