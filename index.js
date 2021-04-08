// const express = require('express') // 모듈을 가져온다.
import express from "express";
const app = express()   // app을 만든다.express()를 실행한다.
const port = 3000

// function handleListening(){
//     console.log(`Example app listening at http://localhost:${port}`)
// }

const handleListening = () => 
    console.log(`Listening on: http://localhost:${port}`);

// function handleProfile(req, res){
//     res.send("You are on my profile");
// }

// Javascript arrow Function
const handleProfile = (req, res) => res.send("You are on my profile");


app.get('/',function(req, res){
    res.send('hellow world')
})

app.get("/profile",handleProfile);

app.listen(port, handleListening)
