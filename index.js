// const express = require('express') // 모듈을 가져온다.
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express()   // app을 만든다.express()를 실행한다.
const PORT = 4000


const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my Home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

const middleware = (req,res,next)=>{
    res.send('not happening');
}
``
app.get("/",middleware, handleHome);

app.get("/profile",handleProfile);

app.listen(PORT, handleListening)
