import db from "../../connection.js";

const response = await db.query(
   `INSERT INTO location (media_id, country, city, postcode, street, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
   [
      2,
      "UK",
      "Manchester",
      "M16 0RA",
      "Sir Matt Busby Way",
      53.461948111776245,
      -2.2922706796387105
   ]
);

console.log(response);

db.end();