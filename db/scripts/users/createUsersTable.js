import db from "../../connection.js";

const response = await db.query(
    `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT, first_name TEXT, last_name TEXT, email TEXT);`
);

console.log(response);

db.end();
