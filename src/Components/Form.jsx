import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <label >Task Title</label>
      <input type="text" placeholder="Task Title" {...register("Task Title", {required: true})} 
      className='border py-1 px-2 rounded-lg border-[#1976D2]'
      />
      <label >Task Description</label>
      <input type="text" placeholder="Task Description" {...register("Task Description", {required: true})}
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