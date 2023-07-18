import { Events } from './models/event';
import { Cities } from './models/cities';
import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Venues } from './models/venue';

export const connect = () => {
  const hostName = process.env.DB_HOST;
  const userName = process.env.DB_USER || '';
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB;
  const port = Number(process.env.PORT);
  const dialect = (process.env.DIALECT || 'mysql') as Dialect;

  const sequelize = new Sequelize(database, userName, password, {
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

  sequelize.addModels([Cities, Events, Venues]);

  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.sequelize.authenticate();

  return db;
};
