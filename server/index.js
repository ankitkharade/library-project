const express= require('express')
const bodyParser=require('body-parser')
const app= express()
const mongoose=require('mongoose')
const User=require('./models/users')
const Books=require('./models/book')
const assert= require('assert')
const MongoClient = require('mongodb')
var cursor=require('mongodb').Cursor

var router=express.Router()


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

//connect to database
mongoose.Promise=Promise
mongoose.connect('mongodb://localhost:27017/angulardb')
.then((err) => console.log('mongoos up'))

 app.use(bodyParser.json())
 



 //register user
 app.post('/register', async function(req,res){
    console.log(req.body)
var user=new User(req.body)
    var result= await user.save()
    .then(item => {res.send(true)
    })
    .catch(err =>{
        res.send(false)
    } )
}) 


//login Validation
app.post('/login', async function(req,res){
    console.log(req.body)
    var {email,password}=req.body
var result = await User.findOne({email,password})
if(result) {
    res.send(true)
}else{
    res.send(false)
}
})

//add book
app.post('/add', async function(req,res){
    console.log(req.body)
    var book= new Books(req.body)
    var result= await book.save()
    .then(item => {res.send(true)
    })
    .catch(err =>{
        res.send(false)
    } )
})

//book list
app.post('/list', async function(req,res){
    
})



//app.use(bodyParser.json())

//reg
/*app.post('http://localhost:1234/test',(req,res)=> {
    console.log(req.bodyParser)
})*/

/*app.get('/',(req,res)=>{
    res.send('blank')
})*/

app.listen(1234,()=> console.log('server listening at 1234'))