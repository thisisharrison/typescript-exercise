export type IsNever<T> = [T] extends [never] ? true : false;

// Exclude from T those types that are assignable to never
let x: Exclude<0 | 1 | 2 | "3", string>;
let y: Exclude<[] | never, never>;
let z: Exclude<never, never>; // this is what we're testing for
type IsNever2<T> = Exclude<T, never> extends never ? true : false;
