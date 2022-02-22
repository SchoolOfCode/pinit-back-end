import db from "../db/connection.js";
// import dummyData from "../dummyData/data.js";

//Getting all media items by its user
export async function getAllUserMedia() {
   const result = await db.query(`SELECT * FROM media;`);
   return result.rows;
}

//Getting a media item by its ID
export async function getMediaById(id) {
   //finds first media item with an id that matches the parameter
   const result = await db.query(`SELECT * FROM media WHERE id = $1;`, [id]);
   return result.rows;
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
   const result = await db.query(`SELECT * FROM media WHERE date = $1;`, [
      date,
   ]);
   return result.rows;
}

export async function addMedia(
   { aws_key, media_title, media_descr, date, location } // FIXME: will be a separate table later on
) {
   const result = await db.query(
      `INSERT INTO media (aws_key, media_title, media_descr, date, location) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [aws_key, media_title, media_descr, date, location]
   );
   return result.rows[result.rows.length - 1];
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
