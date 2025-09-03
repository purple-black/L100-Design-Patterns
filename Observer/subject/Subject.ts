// Subject interface: Defines methods to manage observers
import { IObserver } from "../observers/Observer";

export interface ISubject {
  attach(observer: IObserver): void;   // Subscribe observer
  detach(observer: IObserver): void;   // Unsubscribe observer
  notify(): void;                     // Notify all observers
}
