import { Request } from 'express';
import { CitiesService } from './cities.service';

export class CitiesController {
  private cityService: CitiesService;
  constructor() {
    this.cityService = new CitiesService();
  }

  async getAllCities() {
    return this.cityService.getAllCities();
  }

  async getCity(req: Request) {
    const { city_id } = req.params;
    return await this.cityService.getCity(city_id);
  }
}
