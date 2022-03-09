import db from '../db/connection.js'

//* POST new user
export async function addUser(username, email) {
  const result = await db.query(
    `INSERT INTO users(username, email)VALUES ($1, $2); RETURNING user_id`,
    [username, email]
  )
  return result
}

//* GET user_id by email
export async function getUserID(user_email) {
  const result = await db.query(`SELECT user_id FROM users WHERE user_email = $1`, [user_email])
  return result
}

/* ___________________________ UNUSED QUERIES  - REMOVE__________________________________*/
// GET all users TODO: REMOVE - NOT USED
// export async function getAllUsers() {
//   const result = await db.query(`SELECT * FROM users;`)
//   return result.rows
// }

// // GET all user data by email TODO: REMOVE - NOT USED
// export async function getDataByEmail(email) {
//   const result = await db.query(
//     `SELECT *
// FROM users
// INNER JOIN place
//     ON users.user_id = place.user_id
// INNER JOIN media
//     ON users.user_id = media.loc_id
// WHERE users.email = $1;`,
//     [email]
//   )
//   return result.rows
// }


// // DELETE user by user_id
// export async function deleteUser(user_id) {
//   const result = await db.query(`DELETE FROM users WHERE user_id = $1`, [
//     user_id
//   ])
// }
