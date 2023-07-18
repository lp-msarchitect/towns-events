import { Cities } from '../models/cities';
import { connect } from '../db.config';
import { Venues } from '../models/venue';
import { Repository, Sequelize } from 'sequelize-typescript';

export class VenueRepo {
  private db: { sequelize: Sequelize } = {} as { sequelize: Sequelize };
  private venuesRepo: Repository<Venues>;

  constructor() {
    this.db = connect();
    this.venuesRepo = this.db.sequelize.getRepository(Venues);
  }

  async getAllVenuesByCityId(id: string): Promise<Venues[]> {
    try {
      const venues = this.venuesRepo.findAll({
        include: [Cities],
        where: {
          city_id_fk: id,
        },
      });
      return venues;
    } catch (error) {
      return [];
    }
  }

  async getVenue(id: string): Promise<Venues | null> {
    try {
      const venue = this.venuesRepo.findByPk(id);
      return venue;
    } catch (error) {
      return null;
    }
  }
}
