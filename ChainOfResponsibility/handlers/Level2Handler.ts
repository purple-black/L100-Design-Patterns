import { Handler } from "./Handler";

export class Level2Handler extends Handler {
  handleRequest(level: number): void {
    if (level === 2) {
      console.log("Level 2 Support: Handling intermediate issue.");
    } else if (this.nextHandler) {
      console.log("Level 2 Support: Escalating to Level 3...");
      this.nextHandler.handleRequest(level);
    } else {
      console.log("Level 2 Support: Cannot handle the issue. No more escalation possible.");
    }
  }
}
