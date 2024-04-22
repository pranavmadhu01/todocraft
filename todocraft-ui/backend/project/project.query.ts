import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateProjectBody } from "./project.schema";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from "./project.api";
import { _showNotification } from "@/utils/notifications";

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProjectBody) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      _showNotification(
        "project-creation",
        "success",
        "Project created successfully",
        "green"
      );
    },
    onError: (error) => {
      _showNotification(
        "project-creation",
        "error",
        "Error Creating Project",
        "red"
      );
    },
  });
};

export const useGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
};

export const useGetProjectById = (project_id: string, opened: boolean) => {
  return useQuery({
    queryKey: ["project", project_id],
    queryFn: () => getProjectById(project_id),
    enabled: opened,
  });
};

export const useUpdateProject = (project_id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProjectBody) => updateProject(project_id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      queryClient.invalidateQueries({
        queryKey: ["project", project_id],
      });
      _showNotification(
        "project-update",
        "success",
        "Project updated successfully",
        "green"
      );
    },
    onError: (error) => {
      _showNotification(
        "project-update",
        "error",
        "Error Updating Project",
        "red"
      );
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (project_id: string) => deleteProject(project_id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      _showNotification(
        "project-deletion",
        "success",
        "Project deleted successfully",
        "green"
      );
    },
    onError: (error) => {
      _showNotification(
        "project-deletion",
        "error",
        "Error Deleting Project",
        "red"
      );
    },
  });
};
