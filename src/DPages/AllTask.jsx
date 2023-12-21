import { Container, Typography } from "@mui/material";
import Completed from "./Completed";
import Ongoing from "./Ongoing";
import Todo from "./Todo";

const AllTask = () => {
  return (
    <div className="my-10">
<Container maxWidth='xl'>

    <Typography variant="h3"
    textAlign={'center'}
    pb={3}
    >Your Tasks</Typography>
  <div className="flex flex-col md:flex-row justify-center md:items-start gap-5">
    <Todo className='flex-auto' />
    <Ongoing className='flex-auto'/>
    <Completed className='flex-auto'/>
  </div>
</Container>
    </div>
  );
};

export default AllTask;