import db from "../../connection.js";

const response = await db.query(
   `INSERT INTO media (aws_key, media_title, media_descr, date, latitude, logitude) VALUES ($1, $2, $3, $4, $5, %6);`,
   [
      "12d96c0c17a8c0a5ee1d669158d6a3f4",
      "SOC Character",
      "I had a great time making this",
      12022021,
      53.461948111776245,
      -2.2922706796387105
   ]
);

console.log(response);

db.end();
