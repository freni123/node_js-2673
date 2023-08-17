const { book } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
    return book.create(reqBody);
  };
  module.exports ={
    createBook,
  }