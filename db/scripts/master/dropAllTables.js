import db from '../../connection.js'

const response = await db.query(
  `DROP TABLE place;
    DROP TABLE users;
    DROP TABLE media`
)

console.log(response)

db.end()
