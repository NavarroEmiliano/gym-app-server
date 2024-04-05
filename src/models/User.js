const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    password_hash: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

module.exports = User
