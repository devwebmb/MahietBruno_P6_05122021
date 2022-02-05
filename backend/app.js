// imports
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");
const path = require("path");
const helmet = require("helmet");

const app = express();

//Sécurisation des entêtes http
app.use(helmet());

// Connection base de données

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Paramétrage des en-têtes

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

// Export
module.exports = app;
