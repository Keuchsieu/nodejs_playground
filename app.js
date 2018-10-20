const express = require('express');
const app = express();
const PORT = 8000;

var server = app.listen(8000, ()=>{
    console.log("on port " + PORT);
});
