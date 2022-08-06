
const express = require('express');

const cors = require('cors');
const app = express();
const database = require('./database');
const session = require('express-session');

database.connect((err)=>{
    if(!err){
        console.log("successfully connected to wardrobe database");
    }
    else{
        throw err;
    }
});

app.use(session({
    secret: 'reigner',
    resave: true,
    saveUninitialized: true
}));


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

app.get("/products/:product_category",(req,res)=>{
    database.query("SELECT * from product where product_category = ?",[req.params.product_category], (err,result)=>{
        if(!err){
            res.send(result);
        }
        else{
            throw err;
        }
    });
});


app.post("/search",async(req,res)=>{

    let {searchKey} = req.body;
    database.query("SELECT * FROM product WHERE product_name LIKE ?",['%'+searchKey+'%'],(err,result)=>{
        if(!err){
            res.send(result);
            
        }
        else{
            throw err;
        }
    }); 
});

app.post("/create_user", async(req,res)=>{
    let {fullname, username, password, phone, address} = req.body;
    let sql =`INSERT INTO user (fullname, username, password, phone,address) VALUES("${fullname}","${username}","${password}","${phone}","${address}")`;
    database.query(sql,(err,result)=>{
        if(!err){
            console.log("successfully created new user");
        }
        else{
            throw err;
        }
    });
});

app.post("/login", (req,res)=>{
    let {username, password} = req.body;
    let sql = `SELECT * FROM user where username ="${username}" and password = "${password}"`;
    database.query(sql,(err,result)=>{
        if(!err){
            if(result.length>0){
                console.log("successfully logged in");
                console.log(result);
                res.send(result);

                req.session.loggedIn = true;
                req.session.userId = result[0].user_id;
                req.session.fullname = result[0].fullname;
                console.log(result[0].user_id);
            }
            else{
                console.log("no account found");
            }
        }
        else{
            throw err;
        }
    });
});

app.post("/contact",(req,res)=>{
    let {fullname, email, feedback} = req.body;
    let sql =`INSERT INTO contact(fullname, email, feedback) VALUES("${fullname}", "${email}", "${feedback}")`;
    database.query(sql,(err,result)=>{
        if(!err){
            res.send(result);
            console.log("successfully inserted contact");
        }
        else{
            throw err;
        }
    });
});


app.listen(5000, ()=>{
    console.log("Listening on port 5000");
});

