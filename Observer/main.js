"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client code
var NewsAgency_1 = require("./subject/NewsAgency");
var NewsChannel_1 = require("./observers/NewsChannel");
// Create subject
var agency = new NewsAgency_1.NewsAgency();
// Create observers
var channel1 = new NewsChannel_1.NewsChannel("CNN");
var channel2 = new NewsChannel_1.NewsChannel("BBC");
var channel3 = new NewsChannel_1.NewsChannel("ABC");
// Attach observers
agency.attach(channel1);
agency.attach(channel2);
agency.attach(channel3);
// Publish news
agency.setNews("Breaking: Observer Design Pattern Explained!");
// Detach one observer
agency.detach(channel2);
// Publish more news
agency.setNews("Update: Observer pattern makes systems scalable!");
