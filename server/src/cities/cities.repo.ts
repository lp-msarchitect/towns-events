import { connect } from '../db.config';
import { Cities } from '../models/cities';
import { Repository, Sequelize } from 'sequelize-typescript';

export class CityRepo {
  private db: { sequelize: Sequelize } = {} as { sequelize: Sequelize };
  private cityRepo: Repository<Cities>;

  constructor() {
    this.db = connect();
    this.cityRepo = this.db.sequelize.getRepository(Cities);
  }

  async getAllCities(): Promise<Cities[]> {
    try {
      const cities = this.cityRepo.findAll();
      return cities;
    } catch (error) {
      return [];
    }
  }

  async getCity(id: string): Promise<Cities | null> {
    try {
      const city = this.cityRepo.findByPk(id);
      return city;
    } catch (error) {
      return null;
    }
  }
}
