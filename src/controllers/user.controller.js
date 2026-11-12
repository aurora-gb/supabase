import {
  registerUserService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services/user.service.js";

// CREATE
export async function setUserController(req, res) {
  res.status(201).send(await registerUserService(req.body));
}

// READ
export async function getUserByIdController(req, res) {
  const id = Number(req.params.id);
  const user = await getUserByIdService(id);
  if (!user) return res.status(404).send("usuario no encontrado");
  res.status(200).send(user);
}

// UPDATE
export async function updateUserController(req, res) {
  const id = Number(req.params.id);
  const user = await updateUserService(id, req.body);
  if (!user) return res.status(404).send("usuario no encontrado");
  res.status(200).send(user);
}

// DELETE
export async function deleteUserController(req, res) {
  const id = Number(req.params.id);
  const user = await deleteUserService(id);
  if (!user) return res.status(404).send("usuario no encontrado");
  res.status(200).send(user);
}