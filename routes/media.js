import express from "express";
import { getAllMedia, addMedia } from "../models/media.js";

const router = express.Router();

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

// GET all media
router.get("/media", async function(req, res) {
//can't call the function until
})

// GET media by id 

// GET media by location

// GET media by date


export default router;
