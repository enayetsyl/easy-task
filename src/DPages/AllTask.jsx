import { Container } from "@mui/material";
import Completed from "./Completed";
import Ongoing from "./Ongoing";
import Todo from "./Todo";

const AllTask = () => {
  return (
    <div className="mt-10">
<Container maxWidth='xl'>
<h1 className="mt-10">
this is all task page 
  </h1>     
  <div className="flex justify-between items-center gap-5">
    <Todo className='flex-auto' />
    <Ongoing className='flex-auto'/>
    <Completed className='flex-auto'/>
  </div>
</Container>
    </div>
  );
};

export default AllTask;