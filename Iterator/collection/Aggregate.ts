// Defines an interface for collections that can return an iterator
import { Iterator } from "../iterator/Iterator";

export interface Aggregate<T> {
    createIterator(): Iterator<T>;
}
