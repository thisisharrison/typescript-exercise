// TODO: review
// Ref: https://github.com/type-challenges/type-challenges/issues/614
export type Permutation<T, R = T> = [T] extends [never] ? [] : R extends R ? [R, ...Permutation<Exclude<T, R>>] : never;

let x: Permutation<"A">; // ["A"]
let y: Permutation<"A" | "B" | "C">; // ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]

// looping over unions
type LoopUnion<U extends string, I extends string = U> = I extends I ? `loop ${I}` : never;
let sample: LoopUnion<"A" | "B" | "C">;
// "loop A" | "loop B" | "loop C";

// check if type is never
type IsNever<T> = [T] extends [never] ? true : false;

// permute an item
// start with looping unions
type CleanPermutation<U, I = U> = I extends I ? PermuteItem<U, I> : never;
// rest is excluding Item from Union
// when everything is excluded, R is never, return I
type PermuteItem<U, I, R = Exclude<U, I>> = IsNever<R> extends true ? [I] : [I, ...CleanPermutation<R>];
let z: CleanPermutation<"A" | "B" | "C">; // ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]
