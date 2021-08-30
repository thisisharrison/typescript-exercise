import type { Length } from "../../src/easy/18-Length";
import { Equal, Expect } from "@type-challenges/utils";

it("Length", () => {
  const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
  const spaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"] as const;

  type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    // @ts-expect-error
    Length<5>,
    // @ts-expect-error
    Length<"hello world">
  ];
});
