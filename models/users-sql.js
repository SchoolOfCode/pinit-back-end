import db from '../db/connection.js'

//* GET user_id by email
export async function getUserID(email) {
  console.log('this is the email', email)
  const result = await db.query(`SELECT user_id FROM users WHERE email = $1;`, [
    email
  ])
  //console.log('this is the get userID result', result)
  return result.rows[0]
}

//* POST new user
export async function addUser(username, email) {
  const result = await db.query(
    `INSERT INTO users(username, email)VALUES ($1, $2); RETURNING user_id`,
    [username, email]
  )
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
