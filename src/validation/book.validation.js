const Joi = require("joi");

/** create book */
const createBook = {
  body: Joi.object().keys({
    book_title: Joi.string().required().trim(),
    author: Joi.string().required().trim(),
    publishedYear: Joi.string().required().trim(),
    pageCount: Joi.string().required().trim(),
  }),
};
module.exports = createBook;