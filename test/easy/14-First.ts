import type { First } from "easy/14-First";
import { Equal, Expect } from "@type-challenges/utils";

it("First", () => {
  type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>
  ];
});
