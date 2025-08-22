import { Handler } from "./Handler";

export class Level3Handler extends Handler {
  handleRequest(level: number): void {
    if (level === 3) {
      console.log("Level 3 Support: Handling critical issue.");
    } else {
      console.log("Level 3 Support: Cannot handle the issue. No more escalation possible.");
    }
  }
}
