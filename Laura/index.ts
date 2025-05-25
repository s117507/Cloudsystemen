import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

app.get("/", (req, res) => {
    res.render("index", {  })
});

app.get("/about", (req, res) => {
    res.render("about", {  })
});

app.get("/azula", (req, res) => {
    res.render("azula", {  })
});

app.get("/catalog", (req, res) => {
    res.render("catalog", {  })
});

app.get("/choso", (req, res) => {
    res.render("choso", {  })
});

app.get("/cinderella", (req, res) => {
    res.render("cinderella", {  })
});

app.get("/contact", (req, res) => {
    res.render("contact", {  })
});

app.get("/hinata", (req, res) => {
    res.render("hinata", {  })
});

app.get("/inumaki", (req, res) => {
    res.render("inumaki", {  })
});

app.get("/katara", (req, res) => {
    res.render("katara", {  })
});

app.get("/klanten", (req, res) => {
    res.render("klanten", {  })
});

app.get("/lawliet", (req, res) => {
    res.render("lawliet", {  })
});

app.get("/mai", (req, res) => {
    res.render("mai", {  })
});

app.get("/mulan", (req, res) => {
    res.render("mulan", {  })
});

app.get("/suki", (req, res) => {
    res.render("suki", {  })
});

app.get("/tiana", (req, res) => {
    res.render("tiana", {  })
});

app.get("/yue", (req, res) => {
    res.render("yue", {  })
});

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});