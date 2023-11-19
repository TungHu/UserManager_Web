const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require("path")
const PORT = process.env.PORT ||  3001
const mongoose = require('mongoose');

// const URI = "mongodb+srv://1111:1234@cluster0.lxqs9wg.mongodb.net/?retryWrites=true&w=majority"
const URI = "mongodb+srv://baotungh:dk3dgBWgwRgQRuOL@cluster0.0pi8yir.mongodb.net/userdata?retryWrites=true&w=majority"
var server = require("http").Server(app)
var io = require("socket.io")(server)
const routers = require('./routers/routers')(io)
mongoose
.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Connect to db")
    server.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb", parameterLimit: 100000}))
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}));
app.use('/', routers)
app.use('/',express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));