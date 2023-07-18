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
exports.EventsController = void 0;
const events_repo_1 = require("./events.repo");
class EventsController {
    constructor() {
        this.eventRepo = new events_repo_1.EventsRepo();
    }
    getEvent(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { event_id } = req.params;
            return yield this.eventRepo.getEvent(event_id);
        });
    }
    getEventsByCityId(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { city_id } = req.params;
            return yield this.eventRepo.getAllEventsByCityId(city_id);
        });
    }
}
exports.EventsController = EventsController;
