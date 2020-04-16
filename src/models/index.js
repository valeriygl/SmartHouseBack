const Sequelize = require('sequelize');

const { dbConfig } = require('../config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.house = require('./house')(sequelize, Sequelize);
db.device = require('./device')(sequelize, Sequelize);
db.range = require('./range')(sequelize, Sequelize);
db.mode = require('./mode')(sequelize, Sequelize);
db.modeList = require('./modeList')(sequelize, Sequelize);
db.modeModeList = require('./modeModeList')(sequelize, Sequelize);

db.house.hasMany(db.device, {
  foreignKey: {
    name: 'houseId',
    allowNull: false,
  },
});
db.device.hasMany(db.range, {
  foreignKey: {
    name: 'deviceId',
    allowNull: false,
  },
});
db.device.hasMany(db.mode, {
  foreignKey: {
    name: 'deviceId',
    allowNull: false,
  },
});

// db.mode.hasMany(db.modeModeList);
// db.modeList.hasMany(db.modeModeList);

db.mode.belongsToMany(db.modeList, {
  through: { model: db.modeModeList },
  foreignKey: {
    name: 'modeId',
    allowNull: false,
  },
});
db.modeList.belongsToMany(db.mode, {
  through: { model: db.modeModeList },
  foreignKey: {
    name: 'modeListId',
    allowNull: false,
  },
});

// db.modeList.hasMany(db.mode, { constraints: false });

module.exports = db;
