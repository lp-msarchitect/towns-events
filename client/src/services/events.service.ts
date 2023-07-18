import { EventEntity } from '../types';
const apiHost = process.env.REACT_APP_API_HOST;

export class EventsService {
  public async getAllEventInCity(city_id: string = ''): Promise<any> {
    const response = await fetch(`${apiHost}/api/events-in-city/${city_id}`);
    const data = await response.json();
    return data.map((event: EventEntity) => ({
      ...event,
      date: new Date(event.date).toISOString(),
    }));
  }

  public async getEvent(event_id: string): Promise<EventEntity> {
    const response = await fetch(`${apiHost}/api/event/${event_id}`);
    return await response.json();
  }
}
