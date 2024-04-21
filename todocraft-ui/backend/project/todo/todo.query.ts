import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "./todo.api";
import { CreateTodoBody } from "./todo.schema";
import { _showNotification } from "@/utils/notifications";

export const useCreateTodo = (project_id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTodoBody) => createTodo(project_id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["project", project_id],
      });
      queryClient.invalidateQueries({ queryKey: ["todos", project_id] });
      _showNotification(
        "create-todo",
        "success",
        "Todo created successfully",
        "green"
      );
    },
    onError: () => {
      _showNotification("create-todo", "error", "Failed to create todo", "red");
    },
  });
};

export const useGetTodos = (project_id: string) => {
  return useQuery({
    queryKey: ["todos", project_id],
    queryFn: () => getTodos(project_id),
  });
};

export const useGetTodoById = (project_id: string, todo_id: string) => {
  return useQuery({
    queryKey: ["todo", project_id, todo_id],
    queryFn: () => getTodoById(project_id, todo_id),
  });
};

export const useUpdateTodo = (project_id: string, todo_id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTodoBody) => updateTodo(project_id, todo_id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos", project_id] });
      queryClient.invalidateQueries({
        queryKey: ["project", project_id],
      });
      _showNotification(
        "update-todo",
        "success",
        "Todo updated successfully",
        "green"
      );
    },
    onError: () => {
      _showNotification("update-todo", "error", "Failed to update todo", "red");
    },
  });
};

export const useDeleteTodo = (project_id: string, todo_id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteTodo(project_id, todo_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos", project_id] });
      queryClient.invalidateQueries({
        queryKey: ["project", project_id],
      });
      _showNotification(
        "delete-todo",
        "success",
        "Todo deleted successfully",
        "green"
      );
    },
    onError: () => {
      _showNotification("delete-todo", "error", "Failed to delete todo", "red");
    },
  });
};
