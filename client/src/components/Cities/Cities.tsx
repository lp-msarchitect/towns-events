import React, { useEffect, useState } from 'react';
import { CitiesService } from '../../services/cities.service';

import { Link } from 'react-router-dom';

const citiesService = new CitiesService();

export const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    citiesService.getAllCities().then((data) => {
      setCities(data);
    });
  }, []);

  return (
    <ul className="list">
      {cities.map(({ city_id, title }) => (
        <li key={city_id}>
          <Link to={`/city/${city_id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
