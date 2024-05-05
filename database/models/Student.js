/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    },
    defaultValue: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
  },

  gpa: {
    type: Sequelize.DECIMAL(2,1),
    validate: {
      isDecimal: true,
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;