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
exports.VenueRepo = void 0;
const cities_1 = require("../models/cities");
const db_config_1 = require("../db.config");
const venue_1 = require("../models/venue");
class VenueRepo {
    constructor() {
        this.db = {};
        this.db = (0, db_config_1.connect)();
        this.venuesRepo = this.db.sequelize.getRepository(venue_1.Venues);
    }
    getAllVenuesByCityId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const venues = this.venuesRepo.findAll({
                    include: [cities_1.Cities],
                    where: {
                        city_id_fk: id,
                    },
                });
                return venues;
            }
            catch (error) {
                return [];
            }
        });
    }
    getVenue(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const venue = this.venuesRepo.findByPk(id);
                return venue;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.VenueRepo = VenueRepo;
