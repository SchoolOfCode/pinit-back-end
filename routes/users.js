import express from 'express'

import { getDataByEmail, getAllUsers } from '../models/users-sql.js'

const router = express.Router()

// GET all users
router.get('/users', async function (req, res) {
  const data = await getAllUsers()
  if (data) {
    return res.json({
      success: true,
      message: 'Fetched all users',
      payload: data
    })
  } else {
    return res.json({
      success: false,
      message: 'something went wrong'
    })
  }
})

/* GET users listing by email, create USER if not there */
router.get('/users/:email', async function (req, res) {
  console.log('in email function')
  const email = req.params
  console.log(email)
  const data = await getDataByEmail(email)
  if (data) {
    res.json({
      success: true,
      payload: data
    })
  } else {
    return res.json({
      success: false,
      message: "Barry isn't here"
    })
  }
})

// /* PUT user */
// router.post("/users", async function (req, res) {
//   const { username, first_name, last_name, email } = req.body;
//   const user = await addUser(username, first_name, last_name, email);
//   res.json({
//     success: true,
//     payload: user,
//   });
// });

// export default router;
