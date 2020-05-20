import dbQuery from "../db/dev/dbQuery";

import { empty } from "../helpers/validations";

import { errorMessage, successMessage, status } from "../helpers/status";

/**
  Add a favourate movie/series
* @param {object} req
* @param {object} res
* @returns {object}
*/

const addFavourate = async (req, res) => {
  const { user_id } = req.user;
  const { movser } = req.body;

  if (empty(movser)) {
    errorMessage.error = "Movies/Series information needed";
    return res.status(status.bad).send(errorMessage);
  }
  const addFavMovieQuery = `INSERT INTO
    favMovesSeries(user_id, movies_info)
          VALUES($1, $2)
          returning *`;
  const values = [user_id, movser];

  try {
    const { rows } = await dbQuery.query(addFavMovieQuery, values);
    const dbResponse = rows[0];

    return res.status(status.created).send(dbResponse);
  } catch (error) {
    return res.status(status.error).send("Unable to add movies");
  }
};

/**
 * Get All Movies/Series
 * @param {object} req
 * @param {object} res
 * @returns {object} movies array
 */

const getAllFavourates = async (req, res) => {
  const { user_id } = req.user;
  const getAllFavMovSerQuery =
    "SELECT * FROM favMovesSeries WHERE user_id = $1 ORDER BY id DESC";
  try {
    const { rows } = await dbQuery.query(getAllFavMovSerQuery, [user_id]);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      return res.status(status.success).send([]);
    }
    return res.status(status.success).send(dbResponse);
  } catch (error) {
    errorMessage.error = "An error Occured";
    return res.status(status.error).send(errorMessage);
  }
};

/**
 * Delete a Movies/Series
 * @param {object} req
 * @param {object} res
 * @returns {void} return response task deleted successfully
 */
const deleteFavourate = async (req, res) => {
  const { user_id } = req.user;
  const { id } = req.params;

  const deleteFavMovSerQuery =
    "DELETE FROM favMovesSeries WHERE id = $1 AND user_id = $2 returning *";
  try {
    const { rows } = await dbQuery.query(deleteFavMovSerQuery, [id, user_id]);
    const dbResponse = rows[0];

    if (!dbResponse) {
      successMessage.message = "No record found";
      return res.status(status.success).send(successMessage);
    }
    successMessage.message = "Movie/Series deleted successfully";
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = "Operation was not successful";
    return res.status(status.error).send(errorMessage);
  }
};

export { addFavourate, getAllFavourates, deleteFavourate };
