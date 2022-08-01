const database = require('./database');
const express = require('express');
const postRoutes = require('./routes/posts');
const getRoutes = require('./routes/get');
const app = express();

database.connect((err)=>{
    if(!err){
        console.log("successfully connected to wardrobe database");
    }
    else{
        throw err;
    }
});

app.use(express.json());
app.use(express.urlencoded());

app.use('',getRoutes);
app.use('/post',postRoutes);

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
});