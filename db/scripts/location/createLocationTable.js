import db from "../../connection.js";

//! WILL NEED TO BE CHANGED TO ACCOMODATE FOREIGN KEY 

const response = await db.query(
    `CREATE TABLE IF NOT EXISTS location (loc_id SERIAL PRIMARY KEY, media_id FOREIGN KEY (from media table), country TEXT, city TEXT, postcode TEXT, street TEXT, latitude DECIMAL, longitude DECIMAL);`
)
console.log(response);
db.end();