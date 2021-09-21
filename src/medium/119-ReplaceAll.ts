export type ReplaceAll<S extends string, From extends string, To extends string> = From extends "" ? S : S extends `${infer F}${From}${infer R}` ? `${F}${To}${ReplaceAll<R, From, To>}` : S;

let sample5: ReplaceAll<" foo bar ", " ", "*">; // *foo*bar*
let sample6: ReplaceAll<"foobarbar", "bar", "foo">; // foofoofoo
