import db from "../../connection.js";
const response = await db.query(
    `CREATE TABLE IF NOT EXISTS location (loc_id SERIAL PRIMARY KEY, media_id INT, country TEXT, city TEXT, postcode TEXT, street TEXT, latitude DECIMAL, longitude DECIMAL);`
)
console.log(response);
db.end();