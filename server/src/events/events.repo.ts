import { Events } from '../models/event';
import { connect } from '../db.config';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Venues } from '../models/venue';
import { Cities } from '../models/cities';

export class EventsRepo {
  private db: { sequelize: Sequelize } = {} as { sequelize: Sequelize };
  private eventsRepo: Repository<Events>;

  constructor() {
    this.db = connect();
    this.eventsRepo = this.db.sequelize.getRepository(Events);
  }

  async getAllEventsByCityId(id: string): Promise<Events[]> {
    try {
      const events = Events.findAll({
        include: [Venues],
      });
      const filteredEvents = (await events).filter(
        ({ venue }) => venue.city_id_fk === +id
      );

      return filteredEvents;
    } catch (error) {
      return [];
    }
  }

  async getEvent(id: string): Promise<Events | null> {
    try {
      const event = this.eventsRepo.findByPk(id, {
        include: [Venues],
      });
      return event;
    } catch (error) {
      return null;
    }
  }
}
