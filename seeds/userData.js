const { User } = require("../models");

const userData =
[
    {
      "user_name": "Jane",
      "email": "jane@hotmail.com",
      "password": "password1"
    },
    {
      "user_name": "Fred",
      "email": "fred25@gmail.com",
      "password": "password12"
    },
    {
      "user_name": "Michael",
      "email": "michael_j@aol.com",
      "password": "password123"
    }
  ]

  const seedUserData = () => User.bulkCreate(userData);

  module.exports = seedUserData;