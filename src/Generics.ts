// // =====================================
// // GENERICS IN TYPESCRIPT
// // =====================================



// // 1️⃣ Basic Generic Function
// // --------------------------

// function identity<T>(value: T): T {
//   return value;
// }

// const num = identity<number>(100);
// const str = identity<string>("Masala Chai");



// // 2️⃣ Generic with Type Inference
// // --------------------------------
// // TypeScript automatically detects type

// const autoNum = identity(50);          // T = number
// const autoStr = identity("Ginger");    // T = string



// // 3️⃣ Generic Interface
// // ----------------------

// interface Box<T> {
//   value: T;
// }

// const numberBox: Box<number> = {
//   value: 200,
// };

// const stringBox: Box<string> = {
//   value: "Green Tea",
// };



// // 4️⃣ Generic with Multiple Types
// // --------------------------------

// function combine<T, U>(a: T, b: U): [T, U] {
//   return [a, b];
// }

// const combined = combine<string, number>("Chai", 30);



// // 5️⃣ Generic with Constraint (extends)
// // --------------------------------------

// interface Lengthy {
//   length: number;
// }

// function logLength<T extends Lengthy>(item: T): T {
//   console.log("Length:", item.length);
//   return item;
// }

// logLength("Masala");
// logLength([1, 2, 3]);

// // logLength(10); ❌ Error (number has no length)



// // 6️⃣ Generic in Classes
// // -----------------------

// class Storage<T> {
//   private data: T;

//   constructor(value: T) {
//     this.data = value;
//   }

//   getData(): T {
//     return this.data;
//   }
// }

// const numberStorage = new Storage<number>(500);
// const stringStorage = new Storage<string>("Tea");



// // 7️⃣ Default Generic Types
// // --------------------------

// interface ApiResponse<T = string> {
//   data: T;
//   success: boolean;
// }

// const response1: ApiResponse = {
//   data: "Success",
//   success: true,
// };

// const response2: ApiResponse<number> = {
//   data: 200,
//   success: true,
// };



// // 8️⃣ keyof with Generics
// // ------------------------

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// const chai = {
//   flavour: "Masala",
//   price: 30,
// };

// const flavour = getProperty(chai, "flavour");
// // getProperty(chai, "invalid") ❌ Error



// // =====================================
// // QUICK SUMMARY
// // =====================================

// // <T> → Type Placeholder
// // T extends Something → Constraint
// // Multiple Generics → <T, U>
// // Default Generic → <T = DefaultType>
// // keyof + Generics → Safe property access

function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavour: "Ginger"})

function pair<A, B>(a: A, b: B) : [A, B]{
    return [a, b]
}

pair("masala", 20)
pair("masala", {flavour: "Adrak"})


let a:unknown
a=12;
a="mayank"

if(typeof a === "string")
    a.toUpperCase();