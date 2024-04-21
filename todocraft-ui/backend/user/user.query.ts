import { useQuery, useMutation } from "@tanstack/react-query";
import { CreateUserBody, UserLoginBody } from "./user.schema";
import { createUser, getUser, loginUser } from "./user.api";
import { _showNotification } from "@/utils/notifications";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (data: CreateUserBody) => createUser(data),
    onSuccess: () => {
      _showNotification(
        "user-creation",
        "success",
        "user created successfully",
        "green"
      );
    },
    onError: (error: any) => {
      _showNotification(
        "user-creation",
        "error",
        error.response.data.message,
        "red"
      );
    },
  });
};

export const useUserLogin = () => {
  return useMutation({
    mutationFn: (data: UserLoginBody) => loginUser(data),
    onSuccess: () => {
      _showNotification(
        "user-login",
        "success",
        "user logged in successfully",
        "green"
      );
    },
    onError: (error: any) => {
      _showNotification(
        "user-login",
        "error",
        error.response.data.message,
        "red"
      );
    },
  });
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
};
