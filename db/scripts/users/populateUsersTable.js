import db from "../../connection.js";

const response = await db.query(
    `INSERT INTO users (username, first_name, last_name, email) VALUES ($1, $2, $3, $4);`,
    ["iseecode", "Chris", "Code", "chris@schoolofcode.com"]
);

console.log(response);

db.end();
