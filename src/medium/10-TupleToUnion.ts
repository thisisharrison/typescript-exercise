export type TupleToUnion<T extends any[]> = T[number]; // this already work
// export type TupleToUnion<T extends any[]> = T extends [first: infer P, ...rest: infer R] ? P | TupleToUnion<R> : never; // using infer

type MyTupleToUnion<T extends any[]> = T extends [first: infer P, ...rest: infer R] ? (P extends any[] ? MyTupleToUnion<P> : P | MyTupleToUnion<R>) : never;

type Flatten<T> = T extends any[] ? (T extends [f: infer A, ...rest: infer R] ? [...Flatten<A>, ...Flatten<R>] : []) : [T];
type TupleToUnionX<T extends any[]> = Flatten<T>[number];

let x: TupleToUnion<[123, "456", true]>;

// EXTRA: handle nested tuple
let y: MyTupleToUnion<[123, "456", ["apple", ["orange", 10, [true]]]]>;
