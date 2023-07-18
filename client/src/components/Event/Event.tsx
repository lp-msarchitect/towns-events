import React, { FC, useEffect, useState } from 'react';
import { EventsService } from '../../services/events.service';
import { useParams } from 'react-router-dom';
import { EventEntity } from '../../types';
import { formatDate } from '../../utils';

const eventsService = new EventsService();

export const Event: FC<{}> = () => {
  const [event, setEvent] = useState<EventEntity>();
  const { event_id } = useParams();

  useEffect(() => {
    if (!!event_id) {
      eventsService.getEvent(event_id).then((data) => {
        setEvent(data);
      });
    }
  }, [event_id]);

  const { title, description, date, age, venue, image, max_price, min_price } =
    event || {};
  const { address, google_address, title: venueTitle } = venue || {};

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      {date && <p>{`Когда: ${formatDate(date)}`}</p>}
      <p>{`Возраст: ${age}`}</p>
      <p>{`Где: ${venueTitle}`}</p>
      <p>{`Адрес: ${address || ''}`}</p>
      <p>{`Google: ${google_address || ''}`}</p>
      <p>{`Цена: от ${min_price} до ${max_price}`}</p>
    </>
  );
};
