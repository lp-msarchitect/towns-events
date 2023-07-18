"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRepo = void 0;
const event_1 = require("../models/event");
const db_config_1 = require("../db.config");
const venue_1 = require("../models/venue");
class EventsRepo {
    constructor() {
        this.db = {};
        this.db = (0, db_config_1.connect)();
        this.eventsRepo = this.db.sequelize.getRepository(event_1.Events);
    }
    getAllEventsByCityId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const events = event_1.Events.findAll({
                    include: [venue_1.Venues],
                });
                const filteredEvents = (yield events).filter(({ venue }) => venue.city_id_fk === +id);
                return filteredEvents;
            }
            catch (error) {
                return [];
            }
        });
    }
    getEvent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = this.eventsRepo.findByPk(id, {
                    include: [venue_1.Venues],
                });
                return event;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.EventsRepo = EventsRepo;
