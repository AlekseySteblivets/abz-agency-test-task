import instance from "./requestService";
import { getUsersCache } from "../cache/usersCache";

export const userService = {
  async getUsers({ page, count }) {
    const query = new URLSearchParams({ page, count }).toString();

    const { data } = await instance.get(`/users?${query}`);
    const currentCache = getUsersCache(page - 1, count);

    return currentCache
      ? { ...data, users: [...currentCache.users, ...data.users] }
      : data;
  },
};
