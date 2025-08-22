import { OrderFacade } from "./facade/OrderFacade";

// client only calls the OderFacade and not the other services.
const orderFacade = new OrderFacade();

orderFacade.placeOrder("user123", "product456", 999);
orderFacade.placeOrder("user456", "product456", 999);
orderFacade.placeOrder("user456", "product456", 999);
orderFacade.placeOrder("user456", "product456", 999);
