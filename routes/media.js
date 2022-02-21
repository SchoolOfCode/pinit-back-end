import express from "express";

import {
   getAllUserMedia,
   getMediaById,
   getMediaByLocation,
   getMediaByDate,
   addMedia,
   editMediaByID,
   deleteMediaById,
   deleteMediaByLocation,
   deleteMediaByDate,
} from "../models/media.js";

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
   const data = await getAllUserMedia();
   if (data) {
      return res.json({
         success: true,
         message: "Fetched all media",
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         message: "something went wrong",
      });
   }
});

// GET media by id
router.get("/media/:id", async function (req, res) {
   //can't call the function until created/imported
   const id = Number(req.params.id);
   const data = await getMediaById(id);
   if (data) {
      return res.json({
         success: true,
         message: `Fetched media with the id ${id}`,
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         message: "something went wrong",
      });
   }
});

// GET media by location
router.get("/media/location/:location", async function (req, res) {
   //can't call the function until created/imported
   const location = req.params.location;
   const data = await getMediaByLocation(location);
   if (data) {
      return res.json({
         success: true,
         message: `Media fetched from the location ${location}`,
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         message: "something went wrong",
      });
   }
});

// GET media by date
router.get("/media/date/:date", async function (req, res) {
   //can't call the function until created/imported
   const date = req.params.date;
   const data = await getMediaByDate(date); // FIXME: change date format!!!
   if (data) {
      return res.json({
         success: true,
         message: `Media fetched with the date ${date}`,
         payload: data,
      });
   } else {
      return res.json({
         success: false,
         message: "something went wrong",
      });
   }
});

//POST media
router.post("/media", async function (req, res) {
   const data = req.body;
   console.log("this is the data", data);
   const result = await addMedia(data);
   if (!result) {
      res.json({
         success: false,
         message: "something broke, we couldn't post the media.",
      });
   }
   res.json({
      success: true,
      message: "Image posted to the app",
      payload: result,
   });
});

//DELETE media by id
router.delete("/media/:id", async function (req, res) {
   const id = Number(req.params.id);
   const result = await deleteMediaById(id);
   if (!result) {
      res.json({
         success: false,
         message: `something broke, we couldn't find ${id}`,
      });
   } else {
      res.json({
         success: true,
         message: `Deleted media with the id ${id}`,
         payload: result,
      });
   }
});

//DELETE all media by location
router.delete("/media/location/:location", async function (req, res) {
   const location = req.params.location;
   const result = await deleteMediaByLocation(location);
   if (!result) {
      res.json({
         success: false,
         message: `something went brokey wokey, we couldn't find ${location}`,
      });
   } else {
      res.json({
         success: true,
         message: `Deleted all media at the location ${location}`,
         payload: result,
      });
   }
});
//DELETE all media by date
router.delete("/media/date/:date", async function (req, res) {
   const date = req.params.date;
   const result = await deleteMediaByDate(date);
   if (!result) {
      res.json({
         success: false,
         message: `something broke, we couldn't find ${date}`,
      });
   } else {
      res.json({
         success: true,
         message: `Deleted all media on the date ${date}`,
         payload: result,
      });
   }
});
//PUT media by id
router.put("/media/:id", async function (req, res) {
   const id = Number(req.params.id);
   const update = req.body;
   const result = await editMediaByID(id, update);
   if (!result) {
      res,
         json({
            success: false,
            message: "something went oops, sorry",
         });
   } else {
      res.json({
         success: true,
         message: "image post updated",
         payload: result,
      });
   }
});

export default router;
