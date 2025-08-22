// Subject interface: Defines methods to manage observers
import { Observer } from "../observers/Observer";

export interface Subject {
  attach(observer: Observer): void;   // Subscribe observer
  detach(observer: Observer): void;   // Unsubscribe observer
  notify(): void;                     // Notify all observers
}
