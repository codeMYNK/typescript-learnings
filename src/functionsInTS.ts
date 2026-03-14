/*
=====================================================
 TypeScript Functions – Detailed Notes (Hinglish)
 Topics Covered:
 1. Functions
 2. Function Types
 3. Optional & Default Parameters
 4. Rest Parameters
 5. Function Overloads
=====================================================
*/

/*
1️⃣ FUNCTIONS
-----------------------------------------------------
Definition:
Function ek reusable block of code hota hai jisme hum
parameter types aur return type explicitly define kar
sakte hain. TypeScript me function ka main benefit hai
compile-time type safety.

Syntax Structure:
function functionName(param: Type): ReturnType {}
*/

function add(a: number, b: number): number {
  return a + b;
}

/*
Explanation:
- a: number → parameter type defined
- b: number → parameter type defined
- : number → return type defined
- Agar return type mismatch hoga to compile-time error milega
*/


/*
2️⃣ FUNCTION TYPES
-----------------------------------------------------
Definition:
Function types ka use tab hota hai jab hum kisi variable
ko function assign karte hain ya function ko argument
ke roop me pass karte hain.

Yeh batata hai ki function ka structure kya hoga.
*/

let multiply: (x: number, y: number) => number;

multiply = (x, y) => {
  return x * y;
};

/*
Explanation:
(x: number, y: number) => number
- x aur y number honge
- return type number hoga

Use Case:
Callbacks
Higher-order functions
Dependency injection
*/


/*
3️⃣ OPTIONAL PARAMETERS
-----------------------------------------------------
Definition:
Optional parameter wo hota hai jo function call me
pass karna zaroori nahi hota.

Syntax: paramName?: Type
*/

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, Age: ${age}`;
  }
  return `Hello ${name}`;
}

/*
Important Rules:
- Optional parameter hamesha last me hona chahiye.
- Undefined value automatically assign hoti hai agar
  argument pass nahi kiya.
*/


/*
4️⃣ DEFAULT PARAMETERS
-----------------------------------------------------
Definition:
Default parameter ka matlab hai agar user value pass
nahi kare to ek predefined value assign ho jaye.
*/

function welcome(name: string = "Guest"): string {
  return `Welcome ${name}`;
}

/*
Difference (Optional vs Default):
- Optional → value undefined hoti hai
- Default → predefined value assign hoti hai
*/


/*
5️⃣ REST PARAMETERS
-----------------------------------------------------
Definition:
Rest parameter ka use tab hota hai jab hume multiple
arguments ko ek array ke form me receive karna ho.

Syntax: ...paramName: Type[]
*/

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

/*
Explanation:
- ...numbers → rest operator
- numbers: number[] → array of numbers
- Multiple arguments automatically array me convert ho jate hain

Use Case:
Dynamic arguments
Utility/helper functions
*/


/*
6️⃣ FUNCTION OVERLOADS
-----------------------------------------------------
Definition:
Function overload ka matlab hai ek hi function ke
multiple signatures define karna, lekin implementation
sirf ek hi hoti hai.

Yeh compile-time feature hai.
*/

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

/*
Explanation:
- Pehle do lines overload signatures hain
- Last function actual implementation hai
- TypeScript compile-time pe decide karta hai
  kaunsa overload apply hoga

Important:
Implementation signature generic ya broad hona chahiye
(e.g., any ya union type).

Use Case:
Library design
Complex API contracts
Better developer experience
*/


/*
=====================================================
INTERVIEW NOTES SUMMARY
=====================================================

1. Why define return types explicitly?
   → Better readability + safer refactoring.

2. Difference between optional and default parameter?
   → Optional gives undefined.
   → Default assigns predefined value.

3. Why use function types?
   → For callbacks & higher-order functions.

4. When to use overloads?
   → When behavior depends on different parameter types.

5. What happens if overload implementation is wrong?
   → Compile-time error if it doesn't satisfy all signatures.

=====================================================
END OF FILE
=====================================================
*/
