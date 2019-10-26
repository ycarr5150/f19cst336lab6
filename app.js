const express = require("express"); 
const app = express(); 
app.engine('html', require('ejs').renderFile); 

// routes
app.get("/", function(req, res) {
    //res.send("it works!"); 
    res.render("index.html"); 
});

app.get("/mercury", function(req, res) {
    res.send("This will be Mercury web page!"); 
});

app.get("/venus", function(req, res) {
    res.send("This will be Venus web page!"); 
});

// server listener 
app.listen("8081", "127.0.0.1", function(){
    console.log("Express Server is Running ..."); 
}); 