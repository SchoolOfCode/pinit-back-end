import db from "../db/connection.js";

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

//Getting a media item by its date
export async function getMediaByDate(date) {
   const result = await db.query(`SELECT * FROM media WHERE date = $1;`, [
      date,
   ]);
   return result.rows;
}

//Adding media
export async function addMedia(
   { aws_key, media_title, media_descr, date, location } // TODO: will be a separate table later on
) {
   const result = await db.query(
      `INSERT INTO media (aws_key, media_title, media_descr, date, location) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [aws_key, media_title, media_descr, date, location]
   );
   //return result.rows[result.rows.length - 1]; //TODO: check if this only returns one row or all
   return result;
}

//Editing a media item
export async function editMediaByID(
   id,
   { aws_key, media_title, media_descr, date, location }
) {
   const result = await db.query(
      `UPDATE media SET aws_key = $2, media_title = $3 , media_descr = $4, date =$5, location = $6 WHERE id = $1 RETURNING *;`,
      [id, aws_key, media_title, media_descr, date, location]
   );
   return result;
}

//Deleting a media item by id
export async function deleteMediaById(id) {
   const result = await db.query(`DELETE FROM media WHERE id = $1 RETURNING *`, [id])
   return result;
}

//Deleting a media item by date
export async function deleteMediaByDate(date) {
   const result = await db.query(`DELETE FROM media WHERE date = $1 RETURNING *`, [date])
   return result;
   
}

/******************** LOCATION SECTION NEEDS FIXING **********************/
//TODO: check location stuff
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


//TODO: check location stuff 
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