import express from 'express'

import {
  // getDataByEmail,
  // getAllUsers,
  addUser,
  // deleteUser,
  getUserID
} from '../models/users-sql.js'

const router = express.Router()

//* GET USER_ID BY EMAIL
router.get('/users/:user_email', async function (req, res) {
  const user_email = req.params.user_email
  const user_id = await getUserID(user_email)
  // will return an object with {user_id: value}

  if (!user_id) {
    return res.json({
      success: false,
      message: "Barry isn't here"
    })
  }
  console.log(user_id)
  return res.json({
    success: true,
    message: 'Barry is here',
    payload: user_id
  })
})

//* POST NEW USER
router.post('/users', async function (req, res) {
  const { username, email } = req.body
  const user_id = await addUser(username, email)

  console.log(user_id)

  if (!user_id) {
    return res.json({
      success: false,
      message: `Something broke, we couldn't post the new user ${username}`
    })
  }

  return res.json({
    success: true,
    payload: user_id
  })
})

export default router

/* ___________________________ UNUSED ROUTES  - REMOVE__________________________________*/
// //! GET all users
// router.get('/users', async function (req, res) {
//   const data = await getAllUsers()
//   if (data) {
//     return res.json({
//       success: true,
//       message: 'Fetched all users',
//       payload: data
//     })
//   } else {
//     return res.json({
//       success: false,
//       message: 'something went wrong'
//     })
//   }
// })

// //! GET users data by email
// router.get('/users/:email', async function (req, res) {
//   const email = req.params.email
//   const result = await getDataByEmail(email)
//   if (result) {
//     res.json({
//       success: true,
//       message: 'Barry is here',
//       payload: result
//     })
//   } else {
//     return res.json({
//       success: false,
//       message: "Barry isn't here"
//     })
//   }
// })

// //! DELETE user by user_id
// router.delete('/users/:user_id', async function (req, res) {
//   const user_id = req.params.user_id
//   const result = await deleteUser(user_id)
//   if (result) {
//     res.json({
//       success: true,
//       message: `User ${user_id}`,
//       payload: result
//     })
//   } else {
//     return res.json({
//       success: false,
//       message: `Something broke, we couldn't delete user ${user_id}`
//     })
//   }
// })
