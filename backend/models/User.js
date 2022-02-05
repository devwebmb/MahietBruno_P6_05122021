// Import
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Modèle, création d'un schéma de données
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Vérifier si l'adresse email fournie est déja présente dans la bdd
userSchema.plugin(uniqueValidator);

// Export
module.exports = mongoose.model("User", userSchema);
