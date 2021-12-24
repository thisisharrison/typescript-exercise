// If T is a Union then we can use things like Exclude
export type IsUnion1<T, P = T> = (T extends any ? Exclude<P, T> : never) extends never ? false : true;

let a: Exclude<1 | 2, 1 | 2>; // this is what we're testing, a is never

// TODO: review
// prettier-ignore
export type IsUnion<T extends any, O = T> = 
    // IsUnion<string | number> --> T extends O --> (string extends string | number) | (number extends string | number)
    T extends O
        // [T] --> [string] | [number]
        // [O] --> [string | number]
        // [T] does not extend [0] so can be a union
        // If IsUnion<string>, then [O] and [T] are strings, return false as it's not Union
        ? [O] extends [T]
            ? false
        : true
    : never
