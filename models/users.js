//import { database } from "pg/lib/defaults";
import db from "../db/connection.js";

export async function getAllUsers() {
  const result = await db.query(`SELECT * FROM users;`);
  return result.rows;
}

export async function addUser(username, first_name, last_name, email) {
  const result = await db.query(
    `INSERT INTO users (username, first_name, last_name, email) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [username, first_name, last_name, email]
  );
  return result.rows[0];
}
