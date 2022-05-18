import { useMemo, useState } from "react";
import { useQuery } from "react-query";

import { userService } from "../services/userService";
import { USER_CACHE_KEY } from "../cache/usersCache";

const countUsers = 6;

export const useUsers = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { getUsers } = userService;

  const queryKey = useMemo(
    () => [USER_CACHE_KEY, { page: pageNumber, count: countUsers }],
    [pageNumber]
  );

  const { isLoading, error, data, isFetching } = useQuery(
    queryKey,
    () => getUsers({ page: pageNumber, count: countUsers }),
    {
      keepPreviousData: true,
    }
  );

  return {
    isLoading,
    error,
    data,
    isFetching,
    nextPage: () => setPageNumber((prevPage) => prevPage + 1),
  };
};
