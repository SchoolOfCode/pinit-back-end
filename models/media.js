import db from "../db/connection.js";
import dummyData from "../dummyData/data.js";
//Getting all media items by its user
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
//Getting a media item by its ID
export function getMediaById(id) {
   const media = dummyData.find((item) => {
      if (item.id === id) {
         return item;
      }
   });
   console.log(media);
   return media;
}

// getMediaById(3);
//Getting a media item by its location
export function getMediaByLocation(location) {
   const userData = dummyData.filter((item) => {
      if (item.location === location) {
         return item;
      }
   });
   console.log(userData);
   return userData;
}

//getMediaByLocation("Venice");

//Getting a media item by its date
export function getMediaByDate(date) {
   const userData = dummyData.filter((item) => {
      if (item.date === date) {
         return item;
      }
   });
   console.log(userData);
   return userData;
}

//getMediaByDate("23/09/17");

// Adding new media item to the data array
export function addMedia(item) {
   dummyData.push(item);
   console.log(dummyData[dummyData.length - 1]);
   return dummyData[dummyData.length - 1];
}

// addMedia({
//    id: 22,
//    userId: 11,
//    aws_key:
//       "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
//    media_title: "Second stop in Italy",
//    location: "XXX",
//    date: "23/09/17",
//    media_descr: "Nice",
// });

//Editing a media item
export function editMediaByID(id, updates) {
   const foundIndex = dummyData.findIndex((item) => {
      return item.id === id;
   });
   dummyData[foundIndex] = updates;
   console.log(dummyData);
   return dummyData[index];
}

// editMediaByID(1, {
//    id: 1,
//    userId: 11,
//    aws_key:
//       "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
//    media_title: "Second stop in Italy",
//    location: "XXX",
//    date: "23/09/17",
//    media_descr: "Nice",
// });

//Deleting a media item by id
export function deleteMediaById(id) {
   const foundIndex = dummyData.findIndex((item) => {
      return item.id === id;
   });
   const itemToDelete = dummyData[foundIndex];
   dummyData.splice(foundIndex, 1);
   console.log(dummyData);
   return itemToDelete;
}

deleteMediaById(1);

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
