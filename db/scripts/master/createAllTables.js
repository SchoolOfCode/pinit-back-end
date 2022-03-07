import db from '../../connection.js'

const mediaResponse = await db.query(`CREATE TABLE IF NOT EXISTS users (
    user_id   SERIAL PRIMARY KEY
  , username  TEXT
  , email     TEXT
  );
  
  CREATE TABLE IF NOT EXISTS place (
    loc_id    SERIAL PRIMARY KEY
  , user_id   INT
  , lat       DECIMAL
  , lng       DECIMAL
  );
  
  CREATE TABLE IF NOT EXISTS media (
    media_id  SERIAL PRIMARY KEY
  , loc_id    INT
  , img_url   TEXT
  , title     TEXT
  , place     TEXT      
  , notes     TEXT
  );`)

console.log(mediaResponse)

db.end()
