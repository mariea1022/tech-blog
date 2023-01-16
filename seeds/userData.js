const { User } = require("../models");

const userData =
[
    {
      "name": "Jane",
      "email": "jane@hotmail.com",
      "password": "password1"
    },
    {
      "name": "Fred",
      "email": "fred25@gmail.com",
      "password": "password12"
    },
    {
      "name": "Michael",
      "email": "michael_j@aol.com",
      "password": "password123"
    }
  ]

  const seedUserData = () => User.bulkCreate(userData);

  module.exports = seedUserData;