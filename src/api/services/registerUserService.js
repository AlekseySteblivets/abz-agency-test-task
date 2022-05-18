import instance from "./requestService";
import { tokenService } from "./tokenService";
import { refetchUsersCach } from "../cache/usersCache";

export const registerUserService = {
  async postUser(formData) {
    const token = await tokenService.getToken();

    const { data } = await instance.post("users", formData, {
      headers: { Token: token },
    });

    if (data.success === true) {
      refetchUsersCach();
    }

    return data;
  },
};
