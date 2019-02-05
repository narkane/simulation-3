const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const cont = require("./controller");

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const SESSION_SECRET = process.env.SESSION_SECRET;
const EXPRESS_PORT = process.env.EXPRESS_PORT || 3003;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);

app.post("/register", cont.register);
app.post("/login", cont.login);
app.get("/logout", cont.logout);

app.listen(EXPRESS_PORT, () => {
  console.log(" = LISTENING ON PORT: " + EXPRESS_PORT + " = ");
});
