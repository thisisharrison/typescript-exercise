import type { Concat } from "easy/533-concat";
import { Equal, Expect } from "@type-challenges/utils";

it("Concat", () => {
  type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Concat<[1], [2]>, [1, 2]>>,
    Expect<Equal<Concat<["1", 2, "3"], [false, boolean, "4"]>, ["1", 2, "3", false, boolean, "4"]>>
  ];
});
