const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
       book_title:{
        type:String,
        trim:true,
       },
       author:{
        type:String,
        trim:true,
       },
       publishedYear:{
        type:Number,
        trim:true,
       },
       pageCount:{
        type:Number,
        trim:true,
       },
},
{
    timesstamps:true,
    versionKey:false,
}
);
const book = mongoose.model('book',bookSchema);
module.exports=book;