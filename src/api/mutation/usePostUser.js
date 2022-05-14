import { useMutation } from "react-query";
import { registerUserService } from "../services/registerUserService";
import { queryClient } from "../queryClient";

// export const usePostUser = ({ formData }) => {
//   const { data, error, reset } = useMutation(
//     registerService.postUser({ formData }),
//     {
//       onSuccess: () => {
//         // Инвалидация и обновление
//         queryClient.invalidateQueries("postUser", { refetchActive: false });
//       },
//     }
//   );
//   return { data, error, reset };
// };

export const usePostUser = () => {
  const {
    isLoading,
    isSuccess,
    mutate: registerUser,
  } = useMutation(registerUserService.postUser);

  return { isLoading, isSuccess, registerUser };
};
