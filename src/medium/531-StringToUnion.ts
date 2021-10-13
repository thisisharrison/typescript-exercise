export type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never;

let sample: StringToUnion<"123">; // "1" | "2" | "3"
let sample2: StringToUnion<"">; // never
