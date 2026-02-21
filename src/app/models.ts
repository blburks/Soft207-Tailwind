export interface User {
    id: number;
    name: string;
    email: string;
}

export type UserStatus = "active" | "inactive" | "banned";

export type UserResponse =
| { status: "success"; user: User }
| { status: "error"; message: string };


// I used an interface for User because it describes the structure of an object, and that’s the cleanest
// way to define something with specific properties. A type made more sense for UserStatus and UserResponse
// because they rely on union types, and TypeScript handles those better with type aliases.