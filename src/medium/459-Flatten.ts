export type Flatten<T extends any[]> = T extends [infer F, ...infer R] ? (F extends any[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>]) : [];

let sample: Flatten<[1, 2, 3]>;
let sample2: Flatten<[1, [2, [3]]]>;
let sample3: Flatten<[]>; // base case
