const express = require('express');
const {bookCotroller} = require('../../controllers')

const router = express.Router();

//Create Book
router.post(
    "/create-book",
    // validate(bookValidation.createBook),
    bookCotroller.createBook
);
module.exports = router;