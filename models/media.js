//import db from "../db/connection.js";
import dummyData from "../dummyData/data.js";

//Getting all media items by its user
export async function getAllUserMedia() {
   return dummyData;
}

//getAllUserMedia(11);
//Getting a media item by its ID
export async function getMediaById(id) {
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
export async function getMediaByLocation(location) {
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
export async function getMediaByDate(date) {
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
export async function addMedia(item) {
   dummyData.push(item);
   console.log(dummyData[dummyData.length - 1]);
   return dummyData[dummyData.length - 1];
}

// id = dummyData.length +1 {id, ...item}

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
export async function editMediaByID(id, updates) {
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
export async function deleteMediaById(id) {
   const foundIndex = dummyData.findIndex((item) => {
      return item.id === id;
   });
   const itemToDelete = dummyData[foundIndex];
   dummyData.splice(foundIndex, 1);
   console.log(dummyData);
   return itemToDelete;
}

//Deleting a media item by location
export async function deleteMediaByLocation(location) {
   const foundIndex = dummyData
      .map((item, index) => {
         if (item.location !== location) {
         } else {
            return index;
         }
      })
      .filter((item) => item);

   console.log("i have found", foundIndex);

   const deletedMedia = [];
   for (let i = foundIndex.length - 1; i >= 0; i--) {
      deletedMedia.push(dummyData[i]);
      dummyData.splice(foundIndex[i], 1);
   }

   // const deletedMedia = dummyData.filter((item, index) => {
   //    if (item.location === location) {
   //       //deletedMedia.push(item);
   //       dummyData.splice(index, 1);
   //    }
   // });

   return deletedMedia;

   // go through array and check all items if location is XXX
   // save indexes of all items with location of XXX
   // delete all recorded indexes from array
}

//Deleting a media item by date
export async function deleteMediaByDate(date) {
   const foundIndex = dummyData.findIndex((item) => {
      return item.date === date;
   });
   const itemToDelete = dummyData[foundIndex];
   dummyData.splice(foundIndex, 1);
   return itemToDelete;
}

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
