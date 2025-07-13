export class PaymentService {
    makePayment(userId: string, amount: number): boolean {
        console.log(`Processing payment of ₹${amount} for user: ${userId}`);
        return true; // Assume payment is successful
    }
}
