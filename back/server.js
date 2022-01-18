require("dotenv").config();
const express = require("express");

const app = express();
const mainRouter = require("./src/routes");
const { connection } = require("./db-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix all routes with /api
app.use("/api", mainRouter);
app.use("/images", express.static("public/images"));

const server = app.listen(process.env.PORT || 8000, (err) => {
  // eslint-disable-next-line no-console
  if (err) return console.log(err.message);
  // eslint-disable-next-line no-console
  console.log(`La connexion au serveur a réussi: http://localhost:${process.env.PORT || 8000}`);
  // Test connexion to MYSQL DB
  return connection.connect((dbErr) => {
    // eslint-disable-next-line no-console
    if (dbErr) return console.log(dbErr.message);
    // eslint-disable-next-line no-console
    return console.log(`La connexion a la base de donnée a réussi`);
  });
});

module.exports = server;
