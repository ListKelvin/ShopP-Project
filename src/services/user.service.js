import authHeader from "./authHeader";
import { get } from "../utils/ApiCaller";
const getUserBoard = () => {
  return get("/account/1", { headers: authHeader() });
};
const userService = {
  // getPublicContent,
  getUserBoard,
  // getModeratorBoard,
  // getAdminBoard,
};

export default userService;
