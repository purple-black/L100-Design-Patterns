"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VegMealBuilder_1 = require("./builders/VegMealBuilder");
const NonVegMealBuilder_1 = require("./builders/NonVegMealBuilder");
const MealDirector_1 = require("./directors/MealDirector");
const vegBuilder = new VegMealBuilder_1.VegMealBuilder();
const vegDirector = new MealDirector_1.MealDirector(vegBuilder);
const vegMeal = vegDirector.constructFullMeal();
vegMeal.describe();
const nonVegBuilder = new NonVegMealBuilder_1.NonVegMealBuilder();
const nonVegDirector = new MealDirector_1.MealDirector(nonVegBuilder);
const nonVegMeal = nonVegDirector.constructFullMeal();
nonVegMeal.describe();
//# sourceMappingURL=main.js.map