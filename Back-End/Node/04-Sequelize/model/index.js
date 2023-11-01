const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체를 만드는 코드 (11-17줄) 여기는 규칙이라 그냥 외울 것!)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize : sequelize, Sequelize : Sequelize}
// 지금 db안에는 안에 sequelize가 들어있다.

db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
