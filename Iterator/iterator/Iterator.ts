// Defines the generic Iterator interface
export interface IIterator<T> {
    hasNext(): boolean;
    next(): T;
}
