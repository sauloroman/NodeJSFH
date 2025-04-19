"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero = (0, hero_service_1.findHeroById)(1);
console.log('Id', hero === null || hero === void 0 ? void 0 : hero.id);
console.log('Nombre', hero === null || hero === void 0 ? void 0 : hero.name);
console.log('Propietario', hero === null || hero === void 0 ? void 0 : hero.owner);
