import { Request } from 'express';
import { VenueRepo } from './venues.repo';

export class VenuesController {
  private VenueRepo: VenueRepo;
  constructor() {
    this.VenueRepo = new VenueRepo();
  }

  async getVenue(req: Request) {
    const { venue_id } = req.params;
    return await this.VenueRepo.getVenue(venue_id);
  }
}
