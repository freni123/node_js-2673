const express = require('express');

const router = express.Router();

//Create Book
router.post(
    "/create-book",
    bookController.createBook
);
module.exports = router;