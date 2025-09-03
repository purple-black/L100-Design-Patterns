// Defines an interface for collections that can return an iterator
import { IIterator } from "../iterator/Iterator";

export interface IAggregate<T> {
    createIterator(): IIterator<T>;
}
