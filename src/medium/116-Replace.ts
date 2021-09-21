export type Replace<S extends string, From extends string, To extends string> = From extends "" ? S : S extends `${infer F}${From}${infer R}` ? `${F}${To}${R}` : S;

let sample1: Replace<"foobar", "bar", "foo">; // foofoo
let sample2: Replace<"foobarbar", "", "foo">; // foobarbar
let sample3: Replace<"foo bar", " ", "*">; // foo*bar
let sample4: Replace<"foobarbar", "bar", "foo">; // foofoobar
