import db from "../../connection.js";

const mediaResponse = await db.query(
   `CREATE TABLE IF NOT EXISTS media (id SERIAL PRIMARY KEY, aws_key TEXT, media_title TEXT, media_descr TEXT, date INT, latitude DECIMAL, longitude DECIMAL);`
);

console.log(mediaResponse);

db.end();

// user_id INTEGER REFERENCES users(id),
