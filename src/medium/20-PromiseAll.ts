declare function PromiseAll<T extends any[]>(
    values: readonly [...T]
): Promise<
    {
        [K in keyof T]: T[K] extends Promise<infer X> ? X : T[K];
    }
>;

const promiseAllNums = PromiseAll([Promise.reject(1), 2, Promise.resolve(3)]);
const promiseAllStr = PromiseAll([Promise.reject("A"), "B", Promise.resolve("C")]);

// we use keyof Tuple above to see if T[K] is a Promise
// If so, we have infer X and we get the X type
// Otherwise, T[K] type
type keyOfTuple<T extends any[]> = { [K in keyof T]: T[K] };
let x: keyOfTuple<[1, 2, 3]>;

// Similar to above, T[K] returns types in Function calls
declare function CheckThisOut<T extends any[]>(arr: [...T]): { [K in keyof T]: T[K] };
const allTypes = CheckThisOut([1, 2, 3]);
