// use the Array["Length"]
type LengthOfString0<S extends string, A extends any[] = []> = S extends `${infer F}${infer R}` ? LengthOfString0<R, [0, ...A]> : A;

// returns ["y", "r", "r", "a", "h"]
type StringToArray<S extends string, A extends any[] = []> = S extends `${infer F}${infer R}` ? StringToArray<R, [F, ...A]> : A;
export type LengthOfString<S extends string> = StringToArray<S>["length"];

let sample1: StringToArray<"harry">;
let sample2: LengthOfString<"harry">;
