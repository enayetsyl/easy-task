import { Typography } from "@mui/material";

const TaskCard = ({task}) => {
  return (
    <div className="border border-[#1976D2] rounded-lg p-2">
      <Typography variant="h6">Title: {task.TaskTitle}</Typography>
      <Typography variant="body2">Description: {task.TaskDescription}</Typography>
      <Typography variant="body2">Priority: {task.Priority
}</Typography>
      <Typography variant="body2">Deadline: {task.Deadlines
}</Typography>
      
    </div>
  );
};

export default TaskCard;