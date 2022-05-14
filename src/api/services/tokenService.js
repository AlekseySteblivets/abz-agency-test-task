import instance from "./requestService";

export const tokenService = {
  async getToken() {
    const { data } = await instance.get("token");
    return data.token;
  },
};
