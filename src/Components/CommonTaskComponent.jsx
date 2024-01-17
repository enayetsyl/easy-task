import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCommonTask = (status, queryKey) => {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);

  const { data: tasks, isLoading, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const result = await axios.get("http://localhost:5000/all-tasks", {
          params: {
            status,
            email: user.email,
          },
        });
        return result.data;
      } catch (error) {
        console.error(`Error fetching ${status} tasks:`, error);
      }
    },
  });

  const [, drop] = useDrop({
    accept: "Task",
    drop: async (item) => {
      const { id } = item;
      try {
        const result = await axios.put(`http://localhost:5000/update-task-status/${id}`, {
          status,
        });
        if (result.status === 200) {
          queryClient.invalidateQueries(queryKey);
        }
      } catch (error) {
        console.error(`Error updating task status:`, error);
      }
    },
  });

  return { tasks, isLoading, refetch, drop };
};

export default useCommonTask;
