import express from "express";
import {
  setUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller.js";
import { validateUser } from "../middleware/guard.middleware.js";

const router = express.Router();

router.post("/register", setUserController); // CREATE
router.get("/:id", validateUser, getUserByIdController); // READ
router.put("/:id", validateUser, updateUserController); // UPDATE
router.delete("/:id", validateUser, deleteUserController); // DELETE

export default router;
