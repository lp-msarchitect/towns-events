"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const event_1 = require("./models/event");
const cities_1 = require("./models/cities");
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_1 = require("./models/venue");
const connect = () => {
    const hostName = process.env.DB_HOST;
    const userName = process.env.DB_USER || '';
    const password = process.env.DB_PASSWORD;
    const database = process.env.DB;
    const port = Number(process.env.PORT);
    const dialect = (process.env.DIALECT || 'mysql');
    const sequelize = new sequelize_typescript_1.Sequelize(database, userName, password, {
        host: hostName,
        // password,
        port,
        dialect,
        // repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
        },
    });
    sequelize.addModels([cities_1.Cities, event_1.Events, venue_1.Venues]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
    db.sequelize.authenticate();
    return db;
};
exports.connect = connect;
