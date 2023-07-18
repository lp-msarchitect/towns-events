import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { CitiesController } from './cities/cities.controller';
import { EventsController } from './events/events.controller';
import { VenuesController } from './venues/venues.controller';

class App {
  public express: Express;
  public citiesController: CitiesController;
  public eventsController: EventsController;
  public venuesController: VenuesController;

  constructor() {
    this.express = express();
    this.citiesController = new CitiesController();
    this.eventsController = new EventsController();
    this.venuesController = new VenuesController();

    this.middleware();
    this.routes();
  }

  private routes(): void {
    this.express.get('/api/city', (req, res, next) => {
      this.citiesController.getAllCities().then((data) => {
        return res.json(data);
      });
    });

    this.express.get('/api/city/:city_id', (req, res, next) => {
      this.citiesController.getCity(req).then((data) => {
        return res.json(data);
      });
    });

    this.express.get('/api/events-in-city/:city_id', (req, res, next) => {
      this.eventsController.getEventsByCityId(req).then((data) => {
        return res.json(data);
      });
    });

    this.express.get('/api/event/:event_id', (req, res, next) => {
      this.eventsController.getEvent(req).then((data) => {
        return res.json(data);
      });
    });

    this.express.use('/', (req, res, next) => {
      res.send('BOOOMANNNN!!!');
      next();
    });

    this.express.use('*', (req, res, next) => {
      res.send('Make sure url is correct!!!');
      next();
    });
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors({ origin: '*' }));
  }
}

export default new App().express;
