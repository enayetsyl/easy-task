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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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