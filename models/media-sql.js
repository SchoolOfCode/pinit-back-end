import db from '../db/connection.js'

//! GET all media
export async function getAllMedia() {
  const result = await db.query(`SELECT * FROM media;`)
  return result.rows
}

//! GET media by ID
export async function getMediaById(media_id) {
  //finds first media item with an id that matches the parameter
  const result = await db.query(`SELECT * FROM media WHERE media_id = $1;`, [
    id
  ])
  return result.rows
}

// //GET a media item by its date
// export async function getMediaByDate(date) {
//   const result = await db.query(`SELECT * FROM media WHERE date = $1;`, [date])
//   return result.rows
// }

//! POST media
export async function addMedia({ loc_id, img_url, title, notes }) {
  const result = await db.query(
    `INSERT INTO media (loc_id, img_url, title, notes) VALUES ($1, $2, $3, $4) RETURNING *`,
    [loc_id, img_url, title, notes]
  )
  //return result.rows[result.rows.length - 1]; //TODO: check if this only returns one row or all
  return result
}

//PATCH a media item
export async function editMediaByID(
  id,
  { aws_key, media_title, media_descr, date, location }
) {
  const result = await db.query(
    `UPDATE media SET aws_key = $2, media_title = $3 , media_descr = $4, date =$5, location = $6 WHERE id = $1 RETURNING *;`,
    [id, aws_key, media_title, media_descr, date, location]
  )
  return result
}

//! DELETE media by media_id
export async function deleteMediaById(media_id) {
  const result = await db.query(
    `DELETE FROM media WHERE media_id = $1 RETURNING *;`,
    [media_id]
  )
  return result.rows
}

// //Deleting a media item by date
// export async function deleteMediaByDate(date) {
//   const result = await db.query(
//     `DELETE FROM media WHERE date = $1 RETURNING *;`,
//     [date]
//   )
//   return result
// }

// Get media by location
//! NOT SURE IF WORKS
export async function getMediaByLocation(id, media_id) {
  const result = await db.query(
    `SELECT * FROM media INNER JOIN location ON media.id = location.media_id RETURNING * WHERE $1 = $2;`,
    [id, media_id]
  )
  return result
}

// //Deleting a media item by location
// export async function deleteMediaByLocation(id, media_id) {
//   const result = await db.query(
//     `DELETE FROM media INNER JOIN location ON media.id = location.media_id WHERE $1 = $2;`,
//     [id, media_id]
//   )
//   return result
// }
