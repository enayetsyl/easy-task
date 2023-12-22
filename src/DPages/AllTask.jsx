import { Container, Typography } from "@mui/material";
import Completed from "./Completed";
import Ongoing from "./Ongoing";
import Todo from "./Todo";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


const AllTask = () => {
  
  return (
    <div className="my-10">
<Container maxWidth='xl'>

    <Typography variant="h3"
    textAlign={'center'}
    pb={3}
    >Your Tasks</Typography>
    <DndProvider backend={HTML5Backend}>
  <div className="flex flex-col md:flex-row justify-center md:items-start gap-5">
    <Todo className='flex-auto' />
    <Ongoing className='flex-auto'/>

    <Completed className='flex-auto'/>
  </div>
  </DndProvider>
</Container>
    </div>
  );
};

export default AllTask;