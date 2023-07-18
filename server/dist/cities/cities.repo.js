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
exports.CityRepo = void 0;
const db_config_1 = require("../db.config");
const cities_1 = require("../models/cities");
class CityRepo {
    constructor() {
        this.db = {};
        this.db = (0, db_config_1.connect)();
        this.cityRepo = this.db.sequelize.getRepository(cities_1.Cities);
    }
    getAllCities() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cities = this.cityRepo.findAll();
                return cities;
            }
            catch (error) {
                return [];
            }
        });
    }
    getCity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const city = this.cityRepo.findByPk(id);
                return city;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CityRepo = CityRepo;
