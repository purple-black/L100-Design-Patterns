import { PaymentContext } from "./context/PaymentContext";
import { CreditCardPayment } from "./strategies/CreditCardPayment";
import { PayPalPayment } from "./strategies/PayPalPayment";
import { UpiPayment } from "./strategies/UpiPayment";

// Client Code
const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.executePayment(1000); // Paid 1000 using Credit Card.

paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(2000); // Paid 2000 using PayPal.

paymentContext.setStrategy(new UpiPayment());
paymentContext.executePayment(500); // Paid 500 using UPI.
