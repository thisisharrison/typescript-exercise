export type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

// K extends keyof T => "title" | "completed"
