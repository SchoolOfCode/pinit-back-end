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
router.get("/media", async function (req, res) {
   //can't call the function until created/imported
   const data = await getAllMedia();
   if (data) {
      return res.json({
         success: true,
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         payload: "something went wrong",
      });
   }
});

// GET media by id
router.get("/media/:id", async function (req, res) {
   //can't call the function until created/imported
   const data = await getMediaById(req.params.id);
   if (data) {
      return res.json({
         success: true,
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         payload: "something went wrong",
      });
   }
});

// GET media by location
router.get("/media/location/:location", async function (req, res) {
   //can't call the function until created/imported
   const data = await getMediaByLocation(req.params.location); // TODO: check if :location is correct param
   if (data) {
      return res.json({
         success: true,
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         payload: "something went wrong",
      });
   }
});

// GET media by date
router.get("/media/date/:date", async function (req, res) {
   //can't call the function until created/imported
   const data = await getMediaByDate(req.params.date); // TODO: check if :date is correct param
   if (data) {
      return res.json({
         success: true,
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         payload: "something went wrong",
      });
   }
});

export default router;
