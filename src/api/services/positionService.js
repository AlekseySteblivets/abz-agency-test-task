import instance from "./requestService";

export const positionService = {
  async getPosition() {
    const { data } = await instance.get("positions");
    console.log(data);
    return data.positions;
  },
};
