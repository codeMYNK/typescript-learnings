// interface Chai {
//   flavour: string;
//   price: number;
//   milk?: boolean;
// }

// const masala: Chai = {
//   flavour: "Masala",
//   price: 30,
// };

// interface Shop {
//   readonly id: number;
//   name: string;
// }

// const s: Shop = { id: 1, name: "ChaicodeCafe" };
// // s.id = 2 //Not Allowed

// interface DiscountCalculator {
//   (price: number): number;
// }

// const apply50: DiscountCalculator = (p) => p * 0.5;


// interface TeaMachine{
//     start(): void;
//     stop(): void;
// }

// const machine: TeaMachine = {
//     start(){},

//     stop(){}
// }
// //Index Signature Define
// interface ChaiRatings{
//     [flavour: string] : number
// }

// const ratings: ChaiRatings = {
//     masala: 4.0,
//     ginger: 5.0
// }


// interface User{
//     name: string
// }

// interface User{
//     age: number
// }


// // both 2 diffrent interfaces getting merge and causeing issue in u defined below
// const u : User = {
//     name: "Mayank",
//     age: 25
// }


// //Two interface combined to one
// interface A {a: string}
// interface B {b: string}

// interface C extends A, B {}


// //GENERICS




// =====================================
// INTERFACES IN TYPESCRIPT
// =====================================



// 1️⃣ Basic Interface
// --------------------

interface Chai {
  flavour: string;
  price: number;
  milk?: boolean; // optional property
}

const masala: Chai = {
  flavour: "Masala",
  price: 30,
};



// 2️⃣ Readonly Property
// ----------------------

interface Shop {
  readonly id: number;
  name: string;
}

const shop: Shop = {
  id: 1,
  name: "ChaiCodeCafe",
};

// shop.id = 2 ❌ Error (readonly)



// 3️⃣ Function Interface
// -----------------------

interface DiscountCalculator {
  (price: number): number;
}

const applyDiscount: DiscountCalculator = (price) => price * 0.5;



// 4️⃣ Interface with Methods
// ---------------------------

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Machine Started");
  },
  stop() {
    console.log("Machine Stopped");
  },
};



// 5️⃣ Index Signature
// --------------------

interface ChaiRatings {
  [flavour: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 5.0,
};



// 6️⃣ Declaration Merging
// ------------------------
// Same interface name merges automatically

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Mayank",
  age: 25,
};



// 7️⃣ Interface Extension
// ------------------------

interface A {
  a: string;
}

interface B {
  b: string;
}

interface C extends A, B {}

const obj: C = {
  a: "Hello",
  b: "World",
};



// 8️⃣ Interface vs Type (Quick Example)
// --------------------------------------

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "Green Tea",
  price: 40,
};



// =====================================
// QUICK SUMMARY
// =====================================

// interface → Used for object shapes
// readonly  → Cannot be modified
// ?         → Optional property
// [key: type] → Index signature
// extends   → Combine interfaces
// Same name interface → Declaration merging