import { queryClient } from "../queryClient";

export const USER_CACHE_KEY = "USER_CACHE_KEY";

export const getUsersCache = (page, count) => {
  return queryClient.getQueryData([USER_CACHE_KEY, { page, count }]);
};

// метод queryClient.getQueryDat получает кеш-данные после запроса, в передаваемых параметрах ключ, на основании которого забирается кэш-данные.
// ??? почему не в локал сторадж єто положить? Важно понимать как кэш очищается?
// ??? Почему в доках QueryClient внизу в примере  await queryClient.prefetchQuery('posts', fetchPosts)
