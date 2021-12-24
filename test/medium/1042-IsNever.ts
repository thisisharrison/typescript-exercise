import { IsNever } from "medium/1042-IsNever";
import { Equal, Expect } from "@type-challenges/utils";

test("IsNever", () => {
    type cases = [
        Expect<Equal<IsNever<never>, true>>,
        Expect<Equal<IsNever<never | string>, false>>,
        Expect<Equal<IsNever<"">, false>>,
        Expect<Equal<IsNever<undefined>, false>>,
        Expect<Equal<IsNever<null>, false>>,
        Expect<Equal<IsNever<[]>, false>>,
        Expect<Equal<IsNever<{}>, false>>
    ];
});
