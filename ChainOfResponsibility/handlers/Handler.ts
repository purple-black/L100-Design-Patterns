// Abstract Handler class
export abstract class Handler {
  protected nextHandler: Handler | null = null;

  // Set the next handler in the chain
  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler; // returning handler allows chaining easily
  }

  // Handle request (abstract method to be implemented by subclasses)
  abstract handleRequest(level: number): void;
}
