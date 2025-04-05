const express = require("express");
const app = express();
const mongoose = require('mongoose');
const chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require('method-override')





app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


main()
    .then((res) => {
        console.log("connection sucessful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}






app.get("/chats", async (req, res) => {
    const chats = await chat.find();
    res.render("index.ejs", { chats });
})



app.get("/add", (req, res) => {
    res.render("addchat.ejs");
})

app.post("/addchat", (req, res) => {
    const { from, to, msg } = req.body;
    let newchat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    })
    newchat.save().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/chats");
})









app.get("/edit/:id", async (req, res) => {
    let { id } = req.params;
    let chats = await chat.findById(id);
    res.render("edit.ejs", { chats });
})

app.put("/chat/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newmsg } = req.body;
    let updatedchat = await chat.findByIdAndUpdate(id, { msg: newmsg }, {
        runValidators
            : true, new: true
    });
    console.log(updatedchat);
    res.redirect("/chats");
})




app.delete("/delete/:id", async (req, res) => {
    let { id } = req.params;
    let deletedchat = await chat.findByIdAndDelete(id);
    console.log("deleted sucessfully");
    res.redirect("/chats");
})






const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})