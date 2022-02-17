// import { database, host, port } from "pg/lib/defaults.js";



// this environment variable gets handed to us by heroku if we use the postgres add-on
// export const connectionString = process.env.DATABASE_URL;

const db = {
   host:process.env.DB_HOST,
   database:process.env.DB_DATABASE,
   user:process.env.DB_USER,
   port:process.env.DB_PORT,
   password:process.env.DB_PASSWORD,
};

export default db;