/*
=========================================
OOPS IN TYPESCRIPT - 4 PILLARS
1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction
=========================================

OOPS = Object Oriented Programming
Ye ek programming style hai jisme hum real world objects ki tarah code design karte hain.

Example: Car, Animal, User etc.
*/

// ======================================================
// 1️⃣ ENCAPSULATION
// ======================================================

/*
Definition:
Encapsulation ka matlab hai data aur methods ko ek class ke andar
bundle karna aur data ko direct access se protect karna.

Hindi:
Encapsulation ka matlab hai data ko class ke andar safe rakhna
aur direct access se bachana.

Tools used:
private, public, protected
*/

class BankAccount {

  // private -> bahar se direct access nahi hoga
  private balance: number

  constructor(balance: number) {
    this.balance = balance
  }

  // method to add money
  deposit(amount: number) {
    this.balance += amount
  }

  // method to get balance
  getBalance() {
    return this.balance
  }
}

const account = new BankAccount(1000)

account.deposit(500)

// console.log(account.balance) ❌ error because private
console.log("Balance:", account.getBalance())



// ======================================================
// 2️⃣ INHERITANCE
// ======================================================

/*
Definition:
Inheritance ka matlab hai ek class dusri class ki properties
aur methods inherit kar sakti hai.

Hindi:
Ek class dusri class se features le sakti hai.

Keyword:
extends
*/

class Animal {

  name: string

  constructor(name: string) {
    this.name = name
  }

  speak() {
    console.log(this.name + " makes a sound")
  }
}

// Dog class Animal se inherit kar rahi hai
class Dog extends Animal {

  bark() {
    console.log(this.name + " barks")
  }
}

const dog = new Dog("Tommy")

dog.speak() // inherited method
dog.bark()  // own method



// ======================================================
// 3️⃣ POLYMORPHISM
// ======================================================

/*
Definition:
Polymorphism ka matlab hai same method ka different behaviour
different classes me.

Hindi:
Ek hi method alag-alag tarike se kaam kare.

Example: speak() method different animals me different sound
*/

class Cat extends Animal {

  // method overriding
  speak() {
    console.log(this.name + " meows")
  }
}

class Cow extends Animal {

  speak() {
    console.log(this.name + " moos")
  }
}

const cat = new Cat("Kitty")
const cow = new Cow("Ganga")

cat.speak() // meows
cow.speak() // moos



// ======================================================
// 4️⃣ ABSTRACTION
// ======================================================

/*
Definition:
Abstraction ka matlab hai implementation details hide karna
aur sirf important functionality show karna.

Hindi:
User ko sirf zaroori cheeze dikhana aur complex logic chhupana.

Tools:
abstract class
abstract method
*/

abstract class Vehicle {

  // abstract method -> child class ko implement karna padega
  abstract start(): void

  stop() {
    console.log("Vehicle stopped")
  }
}

class Car extends Vehicle {

  start() {
    console.log("Car starts with key")
  }
}

class Bike extends Vehicle {

  start() {
    console.log("Bike starts with self button")
  }
}

const car = new Car()
car.start()
car.stop()

const bike = new Bike()
bike.start()
bike.stop()




///////-------------------------//////////////---------------------------///////////----------------//////////-----
/*
=========================================
SUMMARY
=========================================

Encapsulation:
Data ko protect karna using private/protected.

Inheritance:
Ek class dusri class se properties aur methods le sakti hai.

Polymorphism:
Same method different behaviour.

Abstraction:
Complex implementation hide karna.
*/

/*

Short answer: Almost perfect hai, lekin 2–3 saal experience interview ke liye thoda aur polish karna chahiye. Tumhara code concept samjhane ke liye acha hai, par interview me 2–3 cheeze extra bolna padta hai.

Main bata raha hoon interviewer kya expect karta hai. 👇

🎯 2–3 Year Experience ke liye OOP Answer Ka Perfect Structure

Jab interviewer bole “Explain OOP pillars”, tab aise answer karo:

1️⃣ Encapsulation

Definition (short & strong):

Encapsulation means wrapping data and methods together in a class and restricting direct access to the data using access modifiers like private, protected, public.

Example:

class BankAccount {
  private balance: number = 0

  deposit(amount: number) {
    this.balance += amount
  }

  getBalance() {
    return this.balance
  }
}

Interview line (important):

👉 We use encapsulation to protect internal state and expose controlled access using methods.

2️⃣ Inheritance

Definition

Inheritance allows a class to reuse properties and methods of another class using extends.

Example

class Animal {
  speak() {
    console.log("Animal makes sound")
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks")
  }
}

Interview line

👉 Inheritance helps in code reusability and hierarchical relationships.

3️⃣ Polymorphism

Definition

Polymorphism means same method behaving differently depending on the object.

Types you can mention:

Method Overriding

Method Overloading (TS me limited)

Example

class Animal {
  speak() {
    console.log("Animal sound")
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow")
  }
}

Interview line

👉 Polymorphism improves flexibility and allows the same interface to behave differently.

4️⃣ Abstraction

Definition

Abstraction means hiding implementation details and exposing only essential functionality using abstract classes or interfaces.

Example

abstract class Vehicle {
  abstract start(): void
}

class Car extends Vehicle {
  start() {
    console.log("Car starts")
  }
}

Interview line

👉 Abstraction helps reduce complexity and improves maintainability.

⭐ 2–3 Year Experience Candidate ko Ye Extra Bolna Chahiye

Agar tum ye bolte ho to interviewer impress ho jata hai:

👉 In real projects we usually prefer interfaces for abstraction and composition over inheritance.

Example:

interface Payment {
  pay(amount: number): void
}
❌ Common Mistake (jo fresher karte hai)

Sirf definition bol dete hain.

Interviewer expect karta hai:

1️⃣ Definition
2️⃣ Example
3️⃣ Real use case

🧠 Pro Interview Answer (30 sec)

Tum aise bol sakte ho:

OOP has four main pillars: Encapsulation, Inheritance, Polymorphism and Abstraction.
Encapsulation protects internal state using access modifiers.
Inheritance allows code reuse using extends.
Polymorphism allows the same method to behave differently through overriding.
Abstraction hides implementation details using abstract classes or interfaces.

⭐ Honest Rating tumhare code ka
Category	Rating
Concept understanding	⭐⭐⭐⭐⭐
Interview ready	⭐⭐⭐⭐
Production style	⭐⭐⭐

Meaning:
✔ Learning ke liye perfect
✔ Interview ke liye thoda refine karna padega

*/