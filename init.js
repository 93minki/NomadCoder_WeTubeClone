// const express = require('express') // 모듈을 가져온다.
import app from "./app";

const PORT = 4000;

const handleListening = () =>console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT,handleListening);