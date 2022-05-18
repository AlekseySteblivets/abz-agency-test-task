import { queryClient } from "../queryClient";

export const USER_CACHE_KEY = "USER_CACHE_KEY";

export const getUsersCache = (page, count) => {
  return queryClient.getQueryData([USER_CACHE_KEY, { page, count }]);
};

export const refetchUsersCach = () => {
  return queryClient.refetchQueries([USER_CACHE_KEY]);
};
