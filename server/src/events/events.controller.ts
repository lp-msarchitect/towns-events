import { Request } from 'express';
import { EventsRepo } from './events.repo';

export class EventsController {
  private eventRepo: EventsRepo;
  constructor() {
    this.eventRepo = new EventsRepo();
  }

  async getEvent(req: Request) {
    const { event_id } = req.params;
    return await this.eventRepo.getEvent(event_id);
  }

  async getEventsByCityId(req: Request) {
    const { city_id } = req.params;

    return await this.eventRepo.getAllEventsByCityId(city_id);
  }
}
