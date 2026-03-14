// ===============================
// 1️⃣ CLASS & CONSTRUCTOR
// ===============================

class Chai {
  // Properties (Data Members)
  flavour: string;
  price: number;

  // Constructor runs automatically when object is created
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
    console.log(this); // Shows created object
  }
}

// Creating Object (Instance)
const masalaChai = new Chai("Ginger", 20);

// Updating property
masalaChai.flavour = "masala";

console.log(masalaChai);



// ===============================
// 2️⃣ ACCESS MODIFIERS
// ===============================

class Chai2 {
  // PUBLIC → accessible everywhere (default modifier)
  public flavour: string = "Masala";

  // PRIVATE → accessible only inside the same class
  private secretIngredients = "Cardamom";

  // Method to access private property
  reveal() {
    return this.secretIngredients;
  }
}

const c = new Chai2();
c.reveal(); // ✅ Allowed
// c.secretIngredients ❌ Not allowed (private)



// ===============================
// 3️⃣ PROTECTED (Inheritance use case)
// ===============================

class Shop {
  // PROTECTED → accessible inside class + child classes
  protected shopName = "chai corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; // ✅ Accessible because inherited
  }
}

const b = new Branch();
b.getName();
// b.shopName ❌ Not accessible outside class



// ===============================
// 4️⃣ PRIVATE (#) in JavaScript (ES2022 Feature)
// ===============================

class Wallet {
  // Truly private field (JS private syntax)
  #balance = 1000000;

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
w.getBalance();
// w.#balance ❌ Not accessible



// ===============================
// 5️⃣ READONLY PROPERTY
// ===============================

class Cup {
  // READONLY → value can only be set once (usually in constructor)
  readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

const cup = new Cup(250);
// cup.capacity = 300 ❌ Cannot modify readonly property



// ===============================
// 6️⃣ GETTERS & SETTERS (Encapsulation)
// ===============================

class ModernChai {
  // Private variable (internal use)
  private _sugar = 2;

  // Getter → used like a property
  get sugar() {
    return this._sugar;
  }

  // Setter → add validation before updating value
  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}

const modernChai = new ModernChai();
modernChai.sugar = 3; // Calls setter
console.log(modernChai.sugar); // Calls getter



// ===============================
// 7️⃣ STATIC PROPERTY
// ===============================

class EkChai {
  // STATIC → belongs to class, not object
  static shopName = "Chaicode caffe";

  constructor(public flavour: string) {}
}

// Access static using class name
console.log(EkChai.shopName);

// const e = new EkChai("Masala");
// e.shopName ❌ Not accessible via object



// ===============================
// 8️⃣ ABSTRACTION (Abstract Class)
// ===============================

// Abstract class → cannot create object directly
abstract class Drink {
  abstract make(): void; // Must be implemented by child
}

class MyChai extends Drink {
  make() {
    console.log("Brewing Chai");
  }
}

// const d = new Drink(); ❌ Cannot instantiate abstract class
const chai = new MyChai();
chai.make();



// ===============================
// 9️⃣ DEPENDENCY INJECTION (OOP Principle)
// ===============================

class Heater {
  heat() {
    console.log("Heating water...");
  }
}

class ChaiMaker {
  // Injecting dependency via constructor
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat(); // Using injected dependency
    console.log("Making chai...");
  }
}

const heater = new Heater();
const chaiMaker = new ChaiMaker(heater);
chaiMaker.make();



// ===============================
// 🔟 OOP Concepts Covered
// ===============================

// ✅ Class & Object
// ✅ Constructor
// ✅ Public / Private / Protected
// ✅ Readonly
// ✅ Getters & Setters
// ✅ Static
// ✅ Abstraction
// ✅ Encapsulation
// ✅ Inheritance
// ✅ Dependency Injection
