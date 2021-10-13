import type { StringToUnion } from "medium/531-StringToUnion";
import { Equal, Expect } from "@type-challenges/utils";

it("StringToUnion", () => {
    type cases = [
        Expect<Equal<StringToUnion<"">, never>>,
        Expect<Equal<StringToUnion<"t">, "t">>,
        Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
        Expect<Equal<StringToUnion<"coronavirus">, "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s">>
    ];
});
