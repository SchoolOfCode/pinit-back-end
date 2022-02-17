import db from "../../connection.js";

const mediaResponse = await db.query(
  `CREATE TABLE IF NOT EXISTS media (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), aws_key TEXT, media_title TEXT, media_desc TEXT, date INT, location TEXT);`
);

console.log(mediaResponse);

db.end();