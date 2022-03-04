import db from '../db/connection.js'

//GET all users
export async function getAllUsers() {
    const result = await db.query(`SELECT * FROM users;`)
    return result.rows;
}

//Get all data by email
export async function getDataByEmail(email) {
    const result = await db.query(`SELECT users.username
        , users.email
        , location.location
        , location.lat
        , location.lng
        , media.img_url
        , media.title
        , media.notes
    FROM users
    INNER JOIN location
        ON users.user_id = location.user_id
    INNER JOIN media
        ON users.user_id = media.loc_id
    WHERE users.email = $1;`, [email]);
    return result
};
