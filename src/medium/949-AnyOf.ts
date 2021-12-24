// prettier-ignore
type TrueType<T, U = T> =
    // if this element is a never, false
    [T] extends [never]
        ? false
        : // if this element is a falsy type
        T extends 0 | "" | null | undefined | false | []
        // TODO: review
        ? TrueType<Exclude<U, T>>
        : true;

let f: TrueType<false>; // false
let t: TrueType<"false">; // true

// prettier-ignore
export type AnyOf<T extends readonly any[]> = 
    // index element 
    T[number] extends infer P | {}
        ? TrueType<P>
        : TrueType<T[number]>

let a: AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>;

let b: TrueType<{ name: "test" }>;
