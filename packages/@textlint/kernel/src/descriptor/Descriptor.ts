export interface Descriptor<T> {
    id: string;

    equals(target: this): boolean;

    toKernel(): T;
}
