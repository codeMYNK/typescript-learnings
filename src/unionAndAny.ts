// ===============================
// UNION TYPES & ANY IN TYPESCRIPT
// ===============================



// 1️⃣ UNION TYPES ( | )
// ---------------------
// Allows a variable to hold multiple possible types

let chaiPrice: string | number;

chaiPrice = 30;
chaiPrice = "Thirty";

// chaiPrice = true ❌ Not allowed



// Function with Union Type

function printId(id: number | string) {
    if (typeof id === "string") {
        console.log("ID (string):", id.toUpperCase());
    } else {
        console.log("ID (number):", id.toFixed(2));
    }
}

printId(101);
printId("chai101");



// 2️⃣ UNION WITH OBJECT TYPES
// ----------------------------

interface MasalaChai {
    type: "masala";
    spiceLevel: number;
}

interface GreenChai {
    type: "green";
    antioxidants: boolean;
}

type Chai = MasalaChai | GreenChai;

function describeChai(chai: Chai) {
    if (chai.type === "masala") {
        console.log("Spice Level:", chai.spiceLevel);
    } else {
        console.log("Antioxidants:", chai.antioxidants);
    }
}

describeChai({ type: "green", antioxidants: true });



// 3️⃣ UNION IN ARRAYS
// --------------------

let mixedData: (string | number)[] = [];

mixedData.push("chai");
mixedData.push(50);

// mixedData.push(true) ❌ Not allowed



// 4️⃣ UNION WITH OPTIONAL VALUES
// -------------------------------

function greetUser(name: string | null) {
    if (name) {
        console.log("Hello", name);
    } else {
        console.log("Guest User");
    }
}

greetUser("Mayank");
greetUser(null);



// ===============================
// ANY TYPE
// ===============================
// 'any' disables TypeScript type checking



// 5️⃣ BASIC ANY

let randomValue: any = 10;

randomValue = "chai";
randomValue = true;
randomValue = { flavour: "Masala" };



// 6️⃣ ANY IN FUNCTION

function logData(data: any) {
    console.log("Data:", data);
}

logData(100);
logData("Tea");
logData({ price: 30 });



// 7️⃣ ANY VS UNKNOWN
// ------------------
// unknown is safer than any

let value: unknown = "Masala Chai";

// console.log(value.toUpperCase()); ❌ Error

if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Safe
}



// ===============================
// WHEN TO AVOID 'any'
// ===============================

// ❌ Bad Practice
let userInput: any = "hello";
userInput.toUpperCase();
userInput.nonExistingMethod(); // No error in TS (dangerous)


// ✅ Better Approach
let safeInput: unknown = "hello";

if (typeof safeInput === "string") {
    console.log(safeInput.toUpperCase());
}



// ===============================
// QUICK SUMMARY
// ===============================

// Union (|) → Allows multiple types safely
// any       → Disables type checking (avoid when possible)
// unknown   → Safer alternative to any