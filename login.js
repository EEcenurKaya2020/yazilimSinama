const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "yazilim_sinama"
});

connection.connect(function(error){
    if (error) throw error
    else console.log("connect success");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",encoder,function(req,res){
    var username = req.body.username;
    var password = req.body.password;

     connection.query("select * from users where user_name = ? and user_pass = ?",[username,password],function(error,results,fields){
        if (results.length > 0) {
            res.redirect("/home");
        }
        else {
            res.redirect("/");
        }
        res.end();
     });
});
app.get("/hesabim",function(req,res){
    res.sendFile(__dirname+"/hesabim.html");
});

app.get("/home",function(req,res) {
    res.sendFile(__dirname + "/home.html"); 
 });
 app.get("/index.html",function(req,res) {
    res.sendFile(__dirname + "/index.html");    
 });
 
app.get("/signup.html",function(req,res){
    res.sendFile(__dirname + "/signup.html");
});
// values ('"+email+"','"+username+"','"+password+"')
app.post("/signup.html",encoder,function(req,res){
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
     connection.query("insert into users (user_email,user_name,user_pass) values (?,?,?)",[email,username,password],function(error,result){
        if (error) {
            res.redirect("/signup.html");
            console.log("Yanlis islem.",error);
        } else {
            console.log("Kullanici eklendi.");
            res.redirect("/signup.html");
       }
    }); 
});
app.listen(3000);