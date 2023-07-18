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
exports.Events = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_1 = require("./venue");
let Events = exports.Events = class Events extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Events.prototype, "event_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Events.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Events.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", String)
], Events.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Events.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_1.Venues),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Events.prototype, "venue_id_fk", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => venue_1.Venues),
    __metadata("design:type", venue_1.Venues)
], Events.prototype, "venue", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Events.prototype, "url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Events.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Events.prototype, "age", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Events.prototype, "web_tag_groups", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Events.prototype, "date_type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Events.prototype, "min_price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Events.prototype, "max_price", void 0);
exports.Events = Events = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'events',
        timestamps: false,
    })
], Events);
