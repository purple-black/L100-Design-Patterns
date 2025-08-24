// Defines the generic Iterator interface
export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
}
