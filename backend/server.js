const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
var cors = require('cors'); 
const passportSetup = require("./passport")
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT ; 
var bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRouter = require("./routes/authGoogle")


connectDB()

const app = express();
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));
// app.use(express.json())
app.use(bodyParser.json())
// app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/apiRoute'))
app.use('/api/users', require('./routes/userRoute'))
app.get('/test', (req, res)=>{res.send("test")});


// connexion avec facebook et google 
app.use(
    cookieSession({name:'session', keys:["bia"], maxAge:24 * 60 * 60 * 100  })
);

app.use(passport.initialize());
app.use(passport.session())

app.use("/auth", authRouter);

app.use(errorHandler)

app.listen(port, ()=> console.log(`server start on port ${port}`));