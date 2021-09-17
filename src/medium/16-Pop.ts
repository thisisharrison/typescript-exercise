export type Pop<T extends any[]> = T extends [...first: infer F, last: any] ? F : never; // without last element
export type Shift<T extends any[]> = T extends [first: any, ...last: infer L] ? L : never; // without first element

export type Push<T extends any[], V> = [...T, V]; // add to last element
export type Unshift<T extends any[], V> = [V, ...T]; // add to first element

let test: Pop<[3, 2, 1]>;
let test2: Shift<[3, 2, 1]>;
let test3: Push<[3, 2, 1], 0>;
let test4: Unshift<[3, 2, 1], 4>;
