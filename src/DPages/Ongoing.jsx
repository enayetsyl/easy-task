import TaskCard from "../Components/TaskCard";
import { Typography } from "@mui/material";
import useCommonTask from "../Components/CommonTaskComponent";

const Ongoing = () => {
  const { tasks, isLoading, refetch, drop } = useCommonTask("ongoing", ["ongoingTask"]);

  if(isLoading){
    return <p>Loading........</p>
  }
  
  return (
    <div 
    ref={drop}
    className="border border-[#1976D2] px-2 py-4 rounded-lg space-y-2">
       <Typography variant="h5"
      textAlign={'center'}
      pb={2}
      >Ongoing Task</Typography>
      {
        tasks?.map(task => <TaskCard key={task._id} task={task} refetchData={refetch}/>)
      }
    </div>
  );
};

export default Ongoing;