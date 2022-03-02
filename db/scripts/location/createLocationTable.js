import db from "../../connection,js";
const response = await db.query(
    `CREATE TABLE IF NOT EXISTS location (loc_id SERIAL PRIMARY KEY, media_id, country, city, postcode, street, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
)
console.log(response);
db.end();