import type { Last } from "medium/15-LastOfArray";
import { Equal, Expect } from "@type-challenges/utils";

it("Last", () => {
    type cases = [Expect<Equal<Last<[3, 2, 1]>, 1>>, Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>];
});
