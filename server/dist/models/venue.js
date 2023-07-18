"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venues = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const cities_1 = require("./cities");
const event_1 = require("./event");
let Venues = exports.Venues = class Venues extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Venues.prototype, "venue_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Venues.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cities_1.Cities),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Venues.prototype, "city_id_fk", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cities_1.Cities),
    __metadata("design:type", cities_1.Cities)
], Venues.prototype, "city", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Venues.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Venues.prototype, "google_address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Venues.prototype, "alias", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => event_1.Events),
    __metadata("design:type", Array)
], Venues.prototype, "events", void 0);
exports.Venues = Venues = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'venues',
        timestamps: false,
    })
], Venues);
