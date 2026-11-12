import {
  registerUserModel,
  getUserByIdModel,
  updateUserModel,
  deleteUserModel,
} from "../models/user.model.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

function sinPassword(user) {
  if (!user) return null;
  const { password, ...resto } = user;
  return resto;
}

// CREATE
export async function registerUserService(body) {
  let { email, name, username, password } = body;
  password = await bcrypt.hash(password, saltRounds);
  const created = await registerUserModel(email, name, username, password);
  return sinPassword(created);
}

// READ
export async function getUserByIdService(id) {
  return sinPassword(await getUserByIdModel(id));
}

// UPDATE
export async function updateUserService(id, body) {
  const { email, name, username, password } = body;
  const data = {};
  if (email !== undefined) data.email = email;
  if (name !== undefined) data.name = name;
  if (username !== undefined) data.username = username;
  if (password !== undefined) data.password = await bcrypt.hash(password, saltRounds);
  return sinPassword(await updateUserModel(id, data));
}

// DELETE
export async function deleteUserService(id) {
  return sinPassword(await deleteUserModel(id));
}