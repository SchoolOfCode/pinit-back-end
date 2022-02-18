import express from "express";
import { getAllUsers, addUser } from "../models/users.js";

const router = express.Router();

/* GET users listing. */
router.get("/users", async function (req, res, next) {
  const users = await getAllUsers();

  res.json({
    success: true,
    payload: users,
  });
});

/* PUT user */
router.post("/users", async function (req, res) {
  const { username, first_name, last_name, email } = req.body;
  const user = await addUser(username, first_name, last_name, email);
  res.json({
    success: true,
    payload: user,
  });
});

export default router;
