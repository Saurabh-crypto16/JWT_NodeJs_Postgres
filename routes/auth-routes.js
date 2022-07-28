import express from "express";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    if (users.rows.length === 0)
      return res.status(401).json({ error: "Email is incorrect" });

    //password check
    const validPassword = await bcrypt.compare(
      password,
      users.rows[0].user_password
    );
    if (!validPassword)
      return res.status(401).json({ error: "Incorrect password" });

    //JWT
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default router;
