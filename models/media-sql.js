import db from "../db/connection.js";
// import dummyData from "../dummyData/data.js";

//Getting all media items by its user
export async function getAllUserMedia() {
   return dummyData;
}

//Getting a media item by its ID
export async function getMediaById(id) {
   //finds first media item with an id that matches the parameter
   const media = dummyData.find((item) => {
      if (item.id === id) {
         return item;
      }
   });
   return media;
}

//Getting a media item by its location
export async function getMediaByLocation(location) {
   //Find all media with the same location as the parameter
   //Puts the found media into an array and returns
   const userData = dummyData.filter((item) => {
      if (item.location === location) {
         return item;
      }
   });
   return userData;
}

//Getting a media item by its date
export async function getMediaByDate(date) {
   const userData = dummyData.filter((item) => {
      if (item.date === date) {
         return item;
      }
   });
   return userData;
}

// Adding new media item to the data array
export async function addMedia(item) {
   dummyData.push(item);
   console.log(dummyData[dummyData.length - 1]);
   return dummyData[dummyData.length - 1];
}

//Editing a media item
export async function editMediaByID(id, updates) {
   const foundIndex = dummyData.findIndex((item) => {
      return item.id === id;
   });
   dummyData[foundIndex] = updates;
   return dummyData[foundIndex];
}

//Deleting a media item by id
export async function deleteMediaById(id) {
   const foundIndex = dummyData.findIndex((item) => {
      return item.id === id;
   });
   const itemToDelete = dummyData[foundIndex];
   dummyData.splice(foundIndex, 1);
   return itemToDelete;
}

//Deleting a media item by location
export async function deleteMediaByLocation(location) {
   //Map creating an arrayof indexes to delete
   const foundIndex = dummyData
      .map((item, index) => {
         if (item.location !== location) {
            //pass
         } else {
            return index;
         }
      })
      .filter((item) => item);
   //Filter used to remove undefined items from the array (from map function)

   //For loop uses recorded indexes from previous
   //step to delete items from the data array
   const deletedMedia = [];
   for (let i = foundIndex.length - 1; i >= 0; i--) {
      deletedMedia.push(dummyData[i]);
      //deletedMedia array is returned to show the user what has been deleted
      dummyData.splice(foundIndex[i], 1);
   }

   return deletedMedia;
}

//Deleting a media item by date
export async function deleteMediaByDate(date) {
   const foundIndex = dummyData
      .map((item, index) => {
         if (item.date !== date) {
            //pass
         } else {
            return index;
         }
      })
      .filter((item) => item);

   const deletedMedia = [];
   for (let i = foundIndex.length - 1; i >= 0; i--) {
      deletedMedia.push(dummyData[i]);
      dummyData.splice(foundIndex[i], 1);
   }

   return deletedMedia;
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
