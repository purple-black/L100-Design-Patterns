import { Handler } from "./Handler";

export class Level1Handler extends Handler {
  handleRequest(level: number): void {
    if (level === 1) {
      console.log("Level 1 Support: Handling basic issue.");
    } else if (this.nextHandler) {
      console.log("Level 1 Support: Escalating to Level 2...");
      this.nextHandler.handleRequest(level);
    } else {
      console.log("Level 1 Support: Cannot handle the issue. No more escalation possible.");
    }
  }
}
