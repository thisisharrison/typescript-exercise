// Exclude P with T, U and with U, T to get true diff
// Then check if P is from T or U and get the type
export type Diff<T, U> = { [P in Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never };

type OmitDiff<T, U> = Omit<T & U, keyof T & keyof U>;

// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
// Construct a type with the properties of T except for those in type K.

// Bad Diff
// P in Exclude!
type BadDiff<T extends object, U extends object> = { [P in Exclude<keyof U, keyof T>]: U[P] };

type Foo = {
    name: string;
    age: string;
};
type Bar = {
    name: string;
    age: string;
    gender: number;
};

type a = Diff<Foo, Bar>; // { gender: number }
type b = BadDiff<Bar, Foo>; // {} -> Error!
type c = OmitDiff<Foo, Bar>; // { gender: number }
