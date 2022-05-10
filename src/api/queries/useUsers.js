import { useMemo } from "react";
import { useQuery } from "react-query";
import { userService } from "../services/userService";

import { USER_CACHE_KEY } from "../cache/usersCache";

// let someService = {
//   getSomeData() {
//     return "getSomeData";
//   },

//   getSomeData2() {
//     return "getSomeData2";
//   },
// };

// let exec1 = () => someService.getSomeData();
// let exec2 = () => someService.getSomeData2;

// console.log("trying to execute 1 - ", exec1());
// console.log("trying to execute 2 - ", exec2());

export const useUsers = ({ page, count }) => {
  const getUsers = useMemo(() => userService.getUsers, []);

  const queryKey = useMemo(
    () => [USER_CACHE_KEY, { page, count }],
    [page, count]
  );
  const { isLoading, error, data } = useQuery(queryKey, () =>
    getUsers({ page, count })
  );
  return { isLoading, error, data };
};
