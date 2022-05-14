import instance from "./requestService";
import { getUsersCache } from "../cache/usersCache";

export const userService = {
  async getUsers({ page, count }) {
    const query = new URLSearchParams({ page, count }).toString();
    // URLSearchParams Возвращает строку, содержащую строку запроса, подходящую для использования в URL-адресе.
    // console.log(query);

    const { data } = await instance.get(`/users?${query}`);
    const currentCache = getUsersCache(page - 1, count);
    // console.log(currentCache);
    // console.log(data);

    return currentCache
      ? { ...data, users: [...currentCache.users, ...data.users] }
      : data;
  },
};
