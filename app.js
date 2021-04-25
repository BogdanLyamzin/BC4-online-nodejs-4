const express = require("express");
const cors = require("cors");

const {postsApi} = require("./api");

const {pageCtrl} = require("./controllers");
const homeData = require("./data/home");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(cors());

app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/posts", postsApi);

app.get("/home", (req, res, next) => {
    const data = pageCtrl(homeData);
    res.render("home", data);
})

const port = process.env.PORT || 3000;

app.listen(port);