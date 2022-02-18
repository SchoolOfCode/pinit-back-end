import db from "../db/connection.js";
import dummyData from "../dummyData/data.js";

export function getAllUserMedia(userId) {
   const userData = dummyData.filter((item) => {
      if (item.userId === userId) {
         return item;
      }
   });
   console.log(userData);
   return userData;
}

//getAllUserMedia(11);

export function getMediaById(id) {
   const media = dummyData.find((item) => {
      if (item.id === id) {
         return item;
      }
   });
   console.log(media);
   return media;
}

getMediaById(3);

// export async function getAllMedia() {
//    const result = await db.query(`SELECT * FROM media;`);
//    return result.rows;
// }

// export async function addMedia(
//    aws_key,
//    media_title,
//    media_desc,
//    date,
//    location
// ) {
//    const result = await db.query(
//       `INSERT INTO media (aws_key, media_title, media_desc, date, location) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
//       [aws_key, media_title, media_desc, date, location]
//    );
//    return result.rows[0];
// }
