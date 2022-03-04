import db from "../../connection.js";

const response = await db.query(
   `INSERT INTO media(loc_id, img_url, title, notes) VALUES ($1, $2, $3, $4);`,
   [
      1,
      'image url',
      'Barry in Germany',
      'Big barry'
   ]
);

console.log(response);

db.end();
