require("dotenv").config();

module.exports = {
  database: {
    url: process.env.MONGO_URI,
  },
  server: {
    port: process.env.PORT || 3000,
  },
  jwtSecret: process.env.JWT_SECRET
};
