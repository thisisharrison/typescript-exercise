import { defineConfig } from "@shad02w/cmz";

export default defineConfig({
    commitTypes: [
        {
            name: "Feature",
            description: "Completed new exercises",
        },
        {
            name: "Refactor",
            description: "Write better code",
        },
        {
            name: "Upgrade",
            description: "Dependencies update and change",
        },
    ],
    scopes: [
        {
            name: "easy",
            description: "🏖",
        },
        {
            name: "medium",
            description: "🏔",
        },
        {
            name: "hard",
            description: "💎",
        },
        {
            name: "extreme",
            description: "🔥",
        },
    ],
    // Final commit message reolve to
    resolve: ({ commitType, scope, message }) => `[${commitType.name.toUpperCase()}]: ${scope.name}: ${message}`,
});
