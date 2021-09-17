export type LookUp1<U extends { type: string }, T extends U["type"]> = U extends { type: T } ? U : never;
// extract from Dog | Cat, that is assignable to {type: "dog"}
export type LookUp<U extends { type: string }, T extends U["type"]> = Extract<U, { type: T }>;

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

let dog1: LookUp1<Animal, "dog">; // Dog
