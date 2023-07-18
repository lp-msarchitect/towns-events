import { VenueEntity } from './venue';

export interface EventEntity {
  event_id: number;
  title: string;
  description: string;
  date: Date;
  category: string;
  web_tag_groups: string;
  venue?: VenueEntity;
  age: number;
  image: string;
  max_price: number;
  min_price: number;
}
