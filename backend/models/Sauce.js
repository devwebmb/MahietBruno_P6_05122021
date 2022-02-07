// Import
const mongoose = require("mongoose");

// Modèle, création d'un schéma de données
const sauceSchema = mongoose.Schema({
  userId: { type: String },
  name: {
    type: String,
    required: true,
    maxLength: [50, "Le nom ne doit pas contenir plus de 50 caractères."],
  },
  manufacturer: {
    type: String,
    required: true,
    maxLength: [50, "Le nom ne doit pas contenir plus de 50 caractères."],
  },
  description: { type: String, required: true },
  mainPepper: {
    type: String,
    required: true,
    maxLength: [50, "Le nom ne doit pas contenir plus de 50 caractères."],
  },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

// Export
module.exports = mongoose.model("Sauce", sauceSchema);
