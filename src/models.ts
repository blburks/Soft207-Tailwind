export interface User {
    id: number;
    name: string;
    email: string;
}

export type UserStatus = "active" | "inactive" | "banned";

export type UserResponse = 
    | { status: "success"; user: User }
    | { status: "error"; message: string };

 // I used an interface for User because it makes more sense when defining the shape of an object. 
 // For UserStatus and UserResponse, a type works better since they rely on union types, 
 // and TypeScript handles those through type aliases instead of interfaces.