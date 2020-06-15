import pool from "./pool";

pool.on("connect", () => {
  console.log("Connected to db");
});

/**
 * Create User Table
 */

const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(100) NOT NULL,
    is_admin BOOL DEFAULT (false),
    created_on DATE NOT NULL)`;

  pool
    .query(userCreateQuery)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create Task Table
 *
 *  TODO :unique desctiption
 */

const createFavMoviesSeriesTable = () => {
  const taskCreateQuery = `CREATE TABLE IF NOT EXISTS favMovesSeries
  (id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    movies_info json NOT NULL`;
  pool.query(taskCreateQuery).then(res => {
    console.log(res);
    pool.end();
  });
};

/**
 * Drop User Table
 */

const dropUserTable = () => {
  const userDropQuery = "DROP TABLE IF EXISTS users";

  pool
    .query(userDropQuery)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * Drop Favourite movies and series Table
 */

const dropFavMovieSerTable = () => {
  const favMovSerDropQuery = "DROP TABLE IF EXISTS favMovesSeries";

  pool
    .query(favMovSerDropQuery)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create All Tables
 */

const createAllTables = () => {
  createUserTable();
  createFavMoviesSeriesTable();
};

/**
 * Drop All Tables
 */

const dropAllTables = () => {
  dropUserTable();
  dropFavMovieSerTable();
};

pool.on("remove", () => {
  console.log("Client removed");
  process.exit(0);
});

export { createAllTables, dropAllTables };
