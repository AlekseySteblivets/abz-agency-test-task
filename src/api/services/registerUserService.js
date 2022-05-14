import instance from "./requestService";
import { tokenService } from "./tokenService";

export const registerUserService = {
  async postUser(formData) {
    console.log(formData);
    const token = await tokenService.getToken();

    const { data } = await instance.post("users", formData, {
      headers: { Token: token },
    });
    console.log(data);
    return data;
  },
};
