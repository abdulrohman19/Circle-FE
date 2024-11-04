// 1. Primitive Types
// const age: number = 25;
// const fullName: string = "Naruto";
// const isStudent: boolean = true;

//2. Type Any dan Unknown
// const vAny: any = 10;
// const vUnknown: unknown = 10;

// const data1: string = vAny;
// const data2: number = vUnknown as number;
// const data3: string = vUnknown as string;

// vAny.asta()
// vUnknown.asta()

//3. Union dan Intersection Types

//union
// let numberOrString: string | number | boolean = "asdasd";
// numberOrString = true;

// intersection
// type A = {
//   username: string;
//   age?: number;
// };

// type B = {
//   fullName: string;
// };

// type C = A & B;

// const user: A = {
//   age: 25,
//   username: "Asta",
// };

// const user2: B = {
//   fullName: "Black Clover",
// };

// const user3: C = {
//   username: "asta2",
//   fullName: "black clover2",
// };

// 4. Literal Types
// type Direction = "left" | "right";

// const ditection1: Direction = "left";
// const direction2: Direction = "right";
