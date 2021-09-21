import type { ReplaceAll } from "medium/119-ReplaceAll";
import { Equal, Expect } from "@type-challenges/utils";

it("ReplaceAll", () => {
    type cases = [
        Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
        Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
        Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
        Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
        Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
        Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
        Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
        Expect<Equal<ReplaceAll<"", "", "">, "">>
    ];
});
