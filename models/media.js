import db from "../db/connection.js";

export async function getAllMedia() {
  const result = await db.query(`SELECT * FROM media;`);
  return result.rows;
}

export async function addMedia(aws_key, media_title, media_desc, date, location) {
  const result = await db.query(
    `INSERT INTO media (aws_key, media_title, media_desc, date, location) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [aws_key, media_title, media_desc, date, location]
  );
  return result.rows[0];
}


