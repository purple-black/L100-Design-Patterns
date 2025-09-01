import { VegMealBuilder } from "./builders/VegMealBuilder";
import { NonVegMealBuilder } from "./builders/NonVegMealBuilder";
import { MealDirector } from "./directors/MealDirector";

const vegBuilder = new VegMealBuilder();
const vegDirector = new MealDirector(vegBuilder);
const vegMeal = vegDirector.constructFullMeal();
vegMeal.describe();

const nonVegBuilder = new NonVegMealBuilder();
const nonVegDirector = new MealDirector(nonVegBuilder);
const nonVegMeal = nonVegDirector.constructFullMeal();
nonVegMeal.describe();
