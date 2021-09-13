// If we only had {K: V}, K would not be foo, name, bar. We need [S in K]
// Using Record, we can do the same thing:
//      type Record<K extends keyof any, T> = {
//          [P in K]: T;
//      };
export type Chainable<T = {}> = {
    // option<K extends string, V>(key: K, value: V): Chainable<T & { [S in K]: V }>; // Not using Record
    option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>; // Using Record
    get(): T;
};

declare const config: Chainable;

const result = config.option("foo", 123).option("name", "type-challenges").option("bar", { value: "Hello World" }).get();

// expect the type of result to be:
interface Result {
    foo: number;
    name: string;
    bar: {
        value: string;
    };
}
