import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";

interface Task {
  Deadlines: string;
  Priority: string;
  TaskDescription: string;
  TaskTitle: string;
  status: string;
  userEmail: string;
  _id: string;
}

const EditForm = ({task}) => {
  const {Deadlines, Priority, TaskDescription, TaskTitle, status, userEmail, _id} = task
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate()  
  const queryClient = useQueryClient();

  useEffect(() => {
    reset(task);
  }, [task, reset]);

  const onSubmit = async (data) => {
    const editedData = {...data, status, userEmail}
    console.log(editedData)
    try {
      const result = await axios.put(`http://localhost:5000/edit-task/${_id}`, editedData);
      if(result.data.modifiedCount>0){
        toast.success('Task Edited successfully!', {
          position: 'top-right',
          autoClose: 3000, // milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // queryClient.invalidateQueries('edit-task');
      }
      navigate('/dashboard')
    } catch (error) {
      console.error('Error editing task:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
    <label >Task Title</label>
    <input type="text" placeholder="Task Title" {...register("TaskTitle", {required: true})} 
    className='border py-1 px-2 rounded-lg border-[#1976D2]'
    defaultValue={TaskTitle}
    />
    <label >Task Description</label>
    <input type="text" placeholder="TaskDescription" {...register("TaskDescription", {required: true})}
    className='border py-1 px-2 rounded-lg border-[#1976D2]'
    defaultValue={TaskDescription}
    />
    <label >Deadline</label>
    <input type="datetime-local" placeholder="Deadlines" {...register("Deadlines", {required: true})} 
    className='border py-1 px-2 rounded-lg border-[#1976D2]'
    defaultValue={Deadlines}
    />
    <label >Priority</label>
    <select {...register("Priority", { required: true })}
    className='border py-1 px-2 rounded-lg border-[#1976D2]'
    defaultValue={Priority}
    >
      <option value="Low">Low</option>
      <option value=" Moderate"> Moderate</option>
      <option value=" High"> High</option>
    </select>

    <input type="submit" value={'Update'} className='border border-solid border-black py-1 rounded-lg bg-[#1976D2] text-white font-bold cursor-pointer' />
  </form>
  );
};

export default EditForm;