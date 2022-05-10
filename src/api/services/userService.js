import instance from "./requestService";

export const userService = {
  async getUsers({ page, count }) {
    const query = new URLSearchParams({ page, count }).toString();
    // URLSearchParams Возвращает строку, содержащую строку запроса, подходящую для использования в URL-адресе.
    console.log(query);

    const { data } = await instance.get(`/users?${query}`);
    console.log(data);
    return data;
  },
};
