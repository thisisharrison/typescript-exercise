import { Equal, Expect } from "@type-challenges/utils";
import type { If } from "easy/268-If";

it("If", () => {
  type cases = [Expect<Equal<If<true, "a", "b">, "a">>, Expect<Equal<If<false, "a", 2>, 2>>];

  // @ts-expect-error
  type error = If<null, "a", "b">;
});
