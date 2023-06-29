import { WSresponse } from "../libs/WSresponse.js";
import { userService } from "../services/user.service.js";

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    res.json(new WSresponse(response, "user created"));
  } catch (error) {
    res.json(new WSresponse(null, "error creating user", error, 500));
  }
};

const getUsers = async (req, res) => {
  try {
    const response = await userService.getAllUsers();
    res.json(new WSresponse(response, "success"));
  } catch (error) {
    res.json(new WSresponse(null, "Error: Internal server error", error, 500));
  }
};

export default { createUser, getUsers };
