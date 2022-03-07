import db from '../db/connection.js'

//! GET all location data
export async function getAllLocationData() {
  const result = await db.query(`SELECT * FROM place;`)
  return result.rows
}

//! POST location
export async function addLocData({ user_id, place, lat, lng }) {
  const result = await db.query(
    `INSERT INTO place(user_id, lat, lng) VALUES ($1, $2, $3);`,
    [user_id, lat, lng]
  )
  return result.rows
}

//TODO fix the table rename - to places instead of location - then come back and fic this SQL
//! DELETE location and associated media by loc_id
export async function deleteLocByLocID(loc_id) {
  const result = await db.query(
    `DELETE FROM place
     WHERE place.loc_id = $1;`,
    [loc_id]
  )
  return result
}
// // Edit location
// export async function updateLocData(
//   loc_id,
//   { media_id, country, city, postcode, street, latitude, longitude }
// ) {
//   const result = await db.query(
//     `UPDATE location SET media_id = $2, country = $3, city = $4, postcode = $5, street = $6, latitude = $7, longitude = $8 WHERE loc_id = $1 RETURNING *;`,
//     [loc_id, media_id, country, city, postcode, street, latitude, longitude]
//   )
//   return result
// }

// // Delete location by lat lon
// export async function deleteLocByLatLon(latitude, longitude) {
//   const result = await db.query(
//     `DELETE FROM location WHERE latitude = $1 AND longitude = $2 RETURNING *;`,
//     [latitude, longitude]
//   )
//   return result
// }

// // Get location data by loc_id
// export async function getLocationByLocID(loc_id) {
//   const result = await db.query(`SELECT * FROM location WHERE loc_id = $1;`, [
//     loc_id
//   ])
//   return result.rows
// }

// // Get location data by media_id
// export async function getLocationByMedID(media_id) {
//   const result = await db.query(`SELECT * FROM location WHERE media_id = $1;`, [
//     media_id
//   ])
//   return result.rows
// }

// // Get location by lat lon
// export async function getLocationByLatLon(latitude, longitude) {
//   const result = await db.query(
//     `SELECT * FROM location WHERE latitude = $1 AND longitude = $2;`,
//     [latitude, longitude]
//   )
//   return result.rows
// }
