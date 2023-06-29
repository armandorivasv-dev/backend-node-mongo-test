import { userDao } from "../daos/user.dao.js";
import { WSresponse } from "../libs/WSresponse.js";

const checkIfUserIsAdmin = async (req, res, next) => {
  const userId = req.header("userId");
  const userInDao = userDao.getUserById(userId);

  if (userInDao.role !== "ADMIN") {
    res
      .status(401)
      .json(new WSresponse(null, "You dont permission to this recourse", 401));
  } else {
    next();
  }
};

export default { checkIfUserIsAdmin };
