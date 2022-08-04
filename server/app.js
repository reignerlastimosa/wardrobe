
const express = require('express');

const cors = require('cors');
const app = express();
const database = require('./database');

database.connect((err)=>{
    if(!err){
        console.log("successfully connected to wardrobe database");
    }
    else{
        throw err;
    }
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get('/create-contact-table',(req,res)=>{
    let sql = "CREATE TABLE contact (contact_id int AUTO_INCREMENT, fullname varchar(100), email varchar(50), feedback varchar(200), PRIMARY KEY (contact_id))";
    database.query(sql,(err,result)=>{
        if(!err){
            res.send("successfully created contact table");
        }
        else{
            throw err;
        }
    });
});


app.get("/products", (req,res)=>{
    let sql = "SELECT * FROM product";
    database.query(sql,(err,result)=>{
        if(!err){
            res.send(result);
        }
        else{
            throw err;
        }
    });
});

app.get("/product_category",(req,res)=>{
    let sql ="SELECT DISTINCT product_category from product";
    database.query(sql,(err,result)=>{
        if(!err){
            res.send(result);
        }
        else{
            throw err;
        }
    });
});


app.post("/search",async(req,res)=>{

    let {searchKey} = req.body
    database.query("SELECT * FROM product WHERE product_name LIKE ?",['%'+searchKey+'%'],(err,result)=>{
        if(!err){
            res.send(result);
            
        }
        else{
            throw err;
        }
    });

    
})
app.listen(5000, ()=>{
    console.log("Listening on port 5000");
});

