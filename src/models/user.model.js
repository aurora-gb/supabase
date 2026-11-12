import { db } from "../prisma/db.ts";

// CREATE
export async function registerUserModel(email, name, username, password) {
  const created = await db.orm.public.User.create({ email, name, username, password });
  return created;
}

// READ
export async function getUserByIdModel(id) {
  const user = await db.orm.public.User.where({ id }).first();
  return user;
}

// UPDATE
export async function updateUserModel(id, data) {
  const updated = await db.orm.public.User.where({ id }).update(data);
  return updated;
}

// DELETE
export async function deleteUserModel(id) {
  const deleted = await db.orm.public.User.where({ id }).delete();
  return deleted;
}