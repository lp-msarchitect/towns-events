export class CitiesService {
  public async getAllCities(): Promise<any> {
    const response = await fetch(`/api/city`);
    return await response.json();
  }
}
