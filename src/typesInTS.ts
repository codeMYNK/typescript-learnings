// ===============================
// TYPES IN TYPESCRIPT
// ===============================



// 1️⃣ PRIMITIVE TYPES
// -------------------

let shopName: string = "ChaiCodeCafe";
let chaiPrice: number = 30;
let isAvailable: boolean = true;
let uniqueId: symbol = Symbol("id");
let bigNumber: bigint = 1234567890123456789n;



// 2️⃣ TYPE INFERENCE
// ------------------
// TypeScript automatically detects type

let city = "Delhi"; // inferred as string
let rating = 4.5;   // inferred as number



// 3️⃣ ARRAYS
// ----------

let flavours: string[] = ["Masala", "Ginger", "Green"];
let prices: Array<number> = [20, 30, 40];



// 4️⃣ TUPLES
// ----------
// Fixed length & fixed type order

let chaiInfo: [string, number] = ["Masala", 30];



// 5️⃣ OBJECT TYPES
// ----------------

let chai: {
    flavour: string;
    price: number;
    isSpecial?: boolean; // optional property
} = {
    flavour: "Masala",
    price: 30
};



// 6️⃣ TYPE ALIASES
// ----------------

type Chai = {
    flavour: string;
    price: number;
};

let gingerChai: Chai = {
    flavour: "Ginger",
    price: 35
};



// 7️⃣ UNION TYPES
// ----------------

let orderId: string | number;

orderId = 101;
orderId = "ORD101";



// 8️⃣ LITERAL TYPES
// ------------------

let size: "small" | "medium" | "large";

size = "medium";
// size = "extra-large" ❌ Not allowed



// 9️⃣ ANY TYPE
// -------------

let randomValue: any = "chai";
randomValue = 50;
randomValue = true;



// 🔟 UNKNOWN TYPE (Safer than any)
// ---------------------------------

let userInput: unknown = "Masala";

// userInput.toUpperCase(); ❌ Error

if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // ✅ Safe
}



// 1️⃣1️⃣ VOID
// ------------
// Used in functions that return nothing

function serveChai(): void {
    console.log("Serving chai...");
}



// 1️⃣2️⃣ NEVER
// -------------
// Function that never returns

function throwError(message: string): never {
    throw new Error(message);
}



// 1️⃣3️⃣ NULL & UNDEFINED
// -----------------------

let data: null = null;
let value: undefined = undefined;



// 1️⃣4️⃣ FUNCTION TYPES
// ----------------------

function add(a: number, b: number): number {
    return a + b;
}

let subtract: (a: number, b: number) => number;

subtract = (a, b) => a - b;



// ===============================
// SAMPLE USAGE
// ===============================

serveChai();

console.log(add(10, 5));

console.log(gingerChai);