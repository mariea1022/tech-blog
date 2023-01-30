const { User } = require("../models");

const userData =
[
    {
      "username": "Jane",
      // "email": "jane@hotmail.com",
      "password": "password1"
    },
    {
      "username": "Fred",
      // "email": "fred25@gmail.com",
      "password": "password12"
    },
    {
      "username": "Michael",
      // "email": "michael_j@aol.com",
      "password": "password123"
    }
  ]

  const seedUserData = () => User.bulkCreate(userData, {individualHooks: true});

  module.exports = seedUserData;