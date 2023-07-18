const apiHost = process.env.REACT_APP_API_HOST;

export class CitiesService {
  public async getAllCities(): Promise<any> {
    const response = await fetch(`${apiHost}/api/city`);
    return await response.json();
  }
}
