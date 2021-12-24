import { AnyOf } from "medium/949-AnyOf";
import { Equal, Expect } from "@type-challenges/utils";

it("AnyOf", () => {
    type cases = [
        Expect<Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>>,
        Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
        Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
        Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
        Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
        Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
        Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
        Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>>,
        Expect<Equal<AnyOf<[0, "", false, [], {}]>, false>>,
        Expect<Equal<AnyOf<[]>, false>>
    ];
});

// // prettier-ignore
// type TrueType<T, U = T> =
//     [T] extends [never]
//         ? false
//         : T extends null | undefined | 0 | "" | false | []
//             ? TrueType<Exclude<U, T>>
//             : true

// // prettier-ignore
// export type AnyOf<T extends readonly any[]> =
//     T[number] extends infer P | {}
//         ? TrueType<P>
//         : TrueType<T[number]>
