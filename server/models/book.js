const mongoose=require('mongoose')

const BookSchema= mongoose.Schema({
book_name:String,
book_price:Number,
copies:Number,
category:String
})
const Books=mongoose.model('Books', BookSchema)

module.exports=Books
