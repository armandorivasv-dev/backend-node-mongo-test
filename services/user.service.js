import { userDao } from "../daos/user.dao.js";

const createUser = async ({ username, password, email }) => {
  if (typeof username !== "string") throw "username error type: must be string";
  if (typeof password !== "string") throw "password error type: must be string";
  if (typeof email !== "string") throw "email error type: must be string";

  await userDao.createUser({ username, password, email });

  return { username, email };
};

const getAllUsers = async () => {
  const data = await userDao.getAllUsers();
  return data;
};

export const userService = { createUser, getAllUsers };
