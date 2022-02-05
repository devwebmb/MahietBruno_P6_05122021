// Import
const mongoose = require("mongoose");

// Modèle, création d'un schéma de données
const sauceSchema = mongoose.Schema({
  userId: { type: String },
  name: { type: String },
  manufacturer: { type: String },
  description: { type: String },
  mainPepper: { type: String },
  imageUrl: { type: String },
  heat: { type: Number },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

// Export
module.exports = mongoose.model("Sauce", sauceSchema);
