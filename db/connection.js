import pg from "pg";

import db from "../config.js";

const pool = new pg.Pool({
   host: db.host,
   database: db.database,
   user: db.user,
   port: db.port,
   password: db.password,
   ssl: {
      rejectUnauthorized: false,
   },
});

export default pool;
