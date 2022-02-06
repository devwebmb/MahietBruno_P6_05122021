const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message:
    "Vous avez atteint le nombre limite d'essai de connections, veuillez réessayer dans 1 minutes.",
});

module.exports = apiLimiter;
