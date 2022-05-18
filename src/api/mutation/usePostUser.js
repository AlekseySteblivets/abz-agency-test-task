import { useMutation } from "react-query";
import { registerUserService } from "../services/registerUserService";

export const usePostUser = () => {
  const {
    isLoading,
    isSuccess,
    mutate: registerUser,
  } = useMutation(registerUserService.postUser);

  return { isLoading, isSuccess, registerUser };
};
