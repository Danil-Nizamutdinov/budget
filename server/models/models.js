const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Expenses = sequelize.define("expenses", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
});

const Income = sequelize.define("inocome", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
});


const Purpose = sequelize.define("purpose", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
});

const PurposeItem = sequelize.define("purpose_items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
});

User.hasOne(Expenses);
Expenses.belongsTo(User);

User.hasOne(Income);
Income.belongsTo(User);

User.hasOne(Purpose);
Purpose.belongsTo(User);

Purpose.hasMany(PurposeItem, { onDelete: "cascade" });
PurposeItem.belongsTo(Purpose);

module.exports = {
  User,
  Purpose,
  PurposeItem,
  Expenses,
  Income
};
