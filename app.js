//node init to get the package json
//control c to stop terminal
//node app to run it again on local host 3000

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

//configuration line - overriding default
app.set("view engine", "ejs");

const inventory = [
    { name: "sirloin", type: "beef", amount: 25 }, 
    { name: "ribs", type: "pork", amount: 0 },
    { name: "wings", type: "chicken", amount: 10 },
    { name: "breast", type: "chicken", amount: 5 },
    { name: "cod", type: "fish", amount: 22 },
    { name: "haddock", type: "fish", amount: 2 },
    { name: "chops", type: "pork", amount: 0 },
];

//loads of code in here
app.get("/" , (req, res)=> {
   // res.send(`hello qub`);
   let username = "Katy";
   res.render("landing", {data : username, stock : inventory});

});
app.get("/playlist", (res, req)=>{
    res.send("my playlist");
});

app.get("/playlist:playId", (res, req)=>{
    let id = req.params.playId;
    res.send(`SELECT * FROM playlists where ID = ${id}`);
});

app.get("/products", (req, res) => {
    let queryp = req.query.q;
    res.send(`SELECT * FROM products WHERE name LIKE (${queryp})`);
});

app.listen(3000, (err)=>{
    if (err) throw err;
    console.log(`listening port 3000`);
});