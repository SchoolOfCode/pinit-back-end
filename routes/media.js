import express from 'express'

import {
  getAllMedia,
  getMediaById,
  getMediaByLocation,
  addMedia,
  deleteMediaById
} from '../models/media-sql.js'

const router = express.Router()

//! GET all media
router.get('/media', async function (req, res) {
  const data = await getAllMedia()
  if (data) {
    return res.json({
      success: true,
      message: 'Fetched all media',
      payload: data
    })
  } else {
    return res.json({
      success: false,
      message: 'something went wrong'
    })
  }
})

//! GET media by id
router.get('/media/:id', async function (req, res) {
  const media_id = Number(req.params)
  const data = await getMediaById(media_id)
  if (data) {
    return res.json({
      success: true,
      message: `Fetched media with the id ${media_id}`,
      payload: data
    })
  } else {
    return res.json({
      success: false,
      message: 'something went wrong'
    })
  }
})

//! GET media by location
router.get('/media/:place', async function (req, res) {
  const place = req.params.place
  const data = await getMediaByLocation(place)
  if (data) {
    return res.json({
      success: true,
      message: `Media fetched from the location ${location}`,
      payload: data
    })
  } else {
    return res.json({
      success: false,
      message: 'something went wrong'
    })
  }
})

//!POST media
router.post('/media', async function (req, res) {
  const data = req.body
  const result = await addMedia(data)

  if (!result) {
    return res.json({
      success: false,
      message: "something broke, we couldn't post the media."
    })
  } 
  
 return res.json({
    success: true,
    message: 'Image posted to the app',
    payload: result
  })

})

//! DELETE media by id
router.delete('/media/:media_id', async function (req, res) {
  const media_id = Number(req.params.media_id)
  const result = await deleteMediaById(media_id)
  if (result) {
    return res.json({
      success: true,
      message: `Deleted media with the id ${media_id}`,
      payload: result
    })
  } else {
    return res.json({
      success: false,
      message: `something broke, we couldn't find ${media_id}`
    })
  }
})

export default router

// /* GET media listing. */
// router.get("/media", async function (req, res, next) {
//   const media = await getAllMedia();

//   res.json({
//     success: true,
//     payload: media,
//   });
// });

// /* PUT media */
// router.post("/media", async function (req, res) {
//   const { aws_key, media_title, media_desc, date, location } = req.body;
//   const media = await addMedia(aws_key, media_title, media_desc, date, location);
//   res.json({
//     success: true,
//     payload: media,
//   });
// });

// //! DELETE single media
// router.delete('/media/:mediaid', async function (req, res) {
//   const latlon = req.query.params
//   const lat = req.params.lat
//   const lon = req.params.lon
//   const result = await deleteMediaByLocation(id, media_id)
//   if (!result) {
//     return res.json({
//       success: false,
//       message: `something went brokey wokey, we couldn't find ${location}`
//     })
//   } else {
//     return res.json({
//       success: true,
//       message: `Deleted all media at the location ${location}`,
//       payload: result
//     })
//   }
// })

// //! DELETE all media by date
// router.delete('/media/date/:date', async function (req, res) {
//   const date = Number(req.params.date)
//   const result = await deleteMediaByDate(date)
//   if (!result) {
//     return res.json({
//       success: false,
//       message: `something broke, we couldn't find ${date}`
//     })
//   } else {
//     return res.json({
//       success: true,
//       message: `Deleted all media on the date ${date}`,
//       payload: result
//     })
//   }
// })

// //!PUT media by id
// router.put('/media/:id', async function (req, res) {
//   const id = Number(req.params.id)
//   const update = req.body
//   const result = await editMediaByID(id, update)
//   if (!result) {
//     return res.json({
//       success: false,
//       message: 'something went oops, sorry'
//     })
//   } else {
//     return res.json({
//       success: true,
//       message: 'image post updated',
//       payload: result
//     })
//   }
// })
// //! GET media by date
// router.get('/media/date/:date', async function (req, res) {
//   const date = Number(req.params.date)

//   const data = await getMediaByDate(date)
//   if (data) {
//     return res.json({
//       success: true,
//       message: `Media fetched with the date ${date}`,
//       payload: data
//     })
//   } else {
//     return res.json({
//       success: false,
//       message: 'something went wrong'
//     })
//   }
// })
