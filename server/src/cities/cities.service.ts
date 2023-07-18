import { Cities } from '../models/cities';
import { CityRepo } from './cities.repo';

export class CitiesService {
  private citiesRepo: CityRepo;
  constructor() {
    this.citiesRepo = new CityRepo();
  }

  async getAllCities(): Promise<Cities[]> {
    return await this.citiesRepo.getAllCities();
  }

  async getCity(id: string): Promise<Cities | null> {
    return await this.citiesRepo.getCity(id);
  }
}
