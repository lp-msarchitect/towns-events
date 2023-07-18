"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cities_controller_1 = require("./cities/cities.controller");
const events_controller_1 = require("./events/events.controller");
const venues_controller_1 = require("./venues/venues.controller");
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.citiesController = new cities_controller_1.CitiesController();
        this.eventsController = new events_controller_1.EventsController();
        this.venuesController = new venues_controller_1.VenuesController();
        this.middleware();
        this.routes();
    }
    routes() {
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
    middleware() {
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
        this.express.use((0, cors_1.default)({ origin: '*' }));
    }
}
exports.default = new App().express;
