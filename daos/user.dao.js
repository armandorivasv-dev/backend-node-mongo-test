import { User } from "../models/user.model.js";

const createUser = async (userToCrearte) => {
  const createdUser = await User.create({ ...userToCrearte, role: "USER" });
  return createdUser;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

export const userDao = { createUser, getAllUsers };
