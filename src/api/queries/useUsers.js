import { useMemo } from "react";
import { useQuery } from "react-query";
import { userService } from "../services/userService";

import { USER_CACHE_KEY } from "../cache/usersCache";

export const useUsers = ({ page, count }) => {
  const { getUsers } = userService;

  const queryKey = useMemo(
    () => [USER_CACHE_KEY, { page, count }],
    [page, count]
  );
  const { isLoading, error, data } = useQuery(
    queryKey,
    () => getUsers({ page, count }),
    { keepPreviousData: true }
  );
  return { isLoading, error, data };
};
