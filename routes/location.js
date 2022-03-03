import express from 'express';

//! ROUTES WITH TWO SETS OF DATA TO PROCESS WILL PROBABLY BE INCORRECT, PLEASE CHECK

import {
    getAllLocationData,
    getLocationByLocID,
    getLocationByMedID,
    getLocationByLatLon,
    addLocData,
    updateLocData,
    deleteLocByLocID,
    deleteLocByLatLon
} from "../models/location-sql.js"

const router = express.Router();

//! GET all location data
router.get("/location", async function (req, res) {
    const data = await getAllLocationData();
    if (data) { 
        return res.json({
        success: true,
        message: "Fetched all location data",
        payload: data,
    });
    } else {
    return res.json({
        success: false,
        message: "something went wrong",
    });
    }
});

//! GET location by loc_id
router.get("/location/:loc_id", async function (req, res) {
    const loc_id = Number(req.params.loc_id)
    const data = await getLocationByLocID(loc_id);
    if (data) { 
        return res.json({
        success: true,
        message: `Fetched location data with the loc_id ${loc_id}`,
        payload: data,
    });
    } else {
    return res.json({
        success: false,
        message: "You did it wrong, idiot.",
    });
    }
});

//! GET location by media_id
router.get("/location/:media_id", async function (req, res) {
    const media_id = Number(req.params.media_id)
    const data = await getLocationByMedID(media_id);
    if (data) { 
        return res.json({
        success: true,
        message: `Fetched location data with the media_id ${media_id}`,
        payload: data,
    });
    } else {
    return res.json({
        success: false,
        message: "What did you think would happen, idiot.",
    });
    }
});

//! GET location by lat lon
router.get("/location/:object", async function (req, res) {
    const lat = Number(req.params.object.lat)
    const lon = Number(req.params.object.lon)

    const data = await getLocationByLatLon(lat, lon);
    if (data) { 
        return res.json({
        success: true,
        message: `Fetched location data with the lat & lon ${lat} ${lon}`,
        payload: data,
    });
    } else {
    return res.json({
        success: false,
        message: "Nice try Nicholas Cage!",
    });
    }
});

//! POST location
router.post("/location", async function (req, res) {
    const data = req.body;
    const result = await addLocData(data);
    if (!result) { 
        return res.json({
        success: false,
        message: 'You went gone messed up.'
    });
    } else {
    return res.json({
        success: true,
        message: "Location has been posted!",
        payload: result,
    });
    }
});

//! UPDATE Location
// router.patch("/location/:loc_id&data", async function (req, res) {
//     const loc_id = Number(req.params.loc_id);
//     const data = req.body
//     const result = await updateLocData(loc_id, data);
//     if (result)
// })