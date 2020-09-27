import ky from "ky";

export default (
  route = " https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
) => ({
  async index() {
    const res = await ky.get(route);
    return res;
  },
});
