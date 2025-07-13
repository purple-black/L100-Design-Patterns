"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderFacade_1 = require("./facade/OrderFacade");
var orderFacade = new OrderFacade_1.OrderFacade();
orderFacade.placeOrder("user123", "product456", 999);
orderFacade.placeOrder("user456", "product456", 999);
