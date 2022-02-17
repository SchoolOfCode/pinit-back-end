import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT, first_name TEXT, last_name TEXT, email TEXT);`
);

console.log(response);

// db.end();

const mediaResponse = await db.query(
  `CREATE TABLE IF NOT EXISTS media (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES user(id), aws_key TEXT, media_title TEXT, media_desc TEXT, date INT, location TEXT);`
);

console.log(mediaResponse);

db.end();
