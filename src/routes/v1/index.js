const express = require('express');
const userRoute = require('./user.route');
const categoryRoute = require('./category.route');
const bookRoute = require('./book.routes');


const router = express.Router();

router.use("/user",userRoute);
router.use("/category",categoryRoute);
router.use("/book",bookRoute);


module.exports = router;