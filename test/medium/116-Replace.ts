import type { Replace } from "medium/116-Replace";
import { Equal, Expect } from "@type-challenges/utils";

it("Replace", () => {
    type cases = [
        Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
        Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
        Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
        Expect<Equal<Replace<"", "", "">, "">>
    ];
});
