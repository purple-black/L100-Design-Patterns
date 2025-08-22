// Client code
import { NewsAgency } from "./subject/NewsAgency";
import { NewsChannel } from "./observers/NewsChannel";

// Create subject
const agency = new NewsAgency();

// Create observers
const channel1 = new NewsChannel("CNN");
const channel2 = new NewsChannel("BBC");
const channel3 = new NewsChannel("ABC");

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
