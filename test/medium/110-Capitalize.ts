import type { Capitalize } from "medium/110-Capitalize";
import { Equal, Expect } from "@type-challenges/utils";

it("Capitalize", () => {
    type cases = [Expect<Equal<Capitalize<"foobar">, "Foobar">>, Expect<Equal<Capitalize<"FOOBAR">, "FOOBAR">>, Expect<Equal<Capitalize<"foo bar">, "Foo bar">>, Expect<Equal<Capitalize<"">, "">>];
});
