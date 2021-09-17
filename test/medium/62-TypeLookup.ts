import type { LookUp } from "medium/62-TypeLookup";
import { Equal, Expect } from "@type-challenges/utils";

it("LookUp", () => {
    interface Cat {
        type: "cat";
        breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
    }

    interface Dog {
        type: "dog";
        breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
        color: "brown" | "white" | "black";
    }

    type Animal = Cat | Dog;

    type cases = [Expect<Equal<LookUp<Animal, "dog">, Dog>>, Expect<Equal<LookUp<Animal, "cat">, Cat>>];
});
