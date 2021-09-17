// Are there space to left or right?
// If yes, Trim<U>
// If no, return S
export type Trim<S extends string> = S extends `${" " | "\t" | "\n"}${infer U}` | `${infer U}${" " | "\t" | "\n"}` ? Trim<U> : S;

let sample1: Trim<"     str     ">;
let sample2: Trim<"     str">;
let sample3: Trim<"str     ">;
let sample4: Trim<"s t r     ">;
