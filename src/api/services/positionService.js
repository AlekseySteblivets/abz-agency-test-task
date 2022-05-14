import instance from "./requestService";

export const positionService = {
  async getPosition() {
    const { data } = await instance.get("positions");
    return data.positions;
  },
};
