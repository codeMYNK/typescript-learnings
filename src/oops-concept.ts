/*
=====================================================
OOPS (Object-Oriented Programming System)
=====================================================

OOPS is a programming style where we organize code using 
"objects" and "classes".

Real-life example:
Car is a class.
Your specific car (with color, model) is an object.

There are 4 main OOPS concepts:
1. Class
2. Object
3. Encapsulation
4. Abstraction
5. Inheritance
6. Polymorphism
=====================================================
*/


/*
-----------------------------------------------------
1️⃣ CLASS
-----------------------------------------------------
Definition:
A Class is a blueprint (template) used to create objects.

Example:
If "Car" is a class,
then BMW, Audi are objects created from that class.
-----------------------------------------------------
*/

class Person {
    name: string;
    age: number;

    // Constructor is a special method
    // It runs automatically when object is created
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method (Function inside class)
    greet(): void {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


/*
-----------------------------------------------------
2️⃣ OBJECT
-----------------------------------------------------
Definition:
An Object is an instance (real example) of a class.

We create objects using 'new' keyword.
-----------------------------------------------------
*/

const person1 = new Person("Rahul", 22);
person1.greet();



/*
-----------------------------------------------------
3️⃣ ENCAPSULATION
-----------------------------------------------------
Definition:
Encapsulation means hiding data and controlling access to it.

We use "private" keyword to hide variables.
Data can be accessed using public methods.
-----------------------------------------------------
*/

class BankAccount {
    private balance: number; // private = cannot access directly

    constructor(balance: number) {
        this.balance = balance;
    }

    // Public method to access private data
    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log("Balance:", account.getBalance());



/*
-----------------------------------------------------
4️⃣ ABSTRACTION
-----------------------------------------------------
Definition:
Abstraction means hiding complex implementation 
and showing only necessary details.

In TypeScript, we use abstract class.
-----------------------------------------------------
*/

abstract class Animal {
    // Abstract method (no body)
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.makeSound();



/*
-----------------------------------------------------
5️⃣ INHERITANCE
-----------------------------------------------------
Definition:
Inheritance means one class can use properties 
and methods of another class.

We use "extends" keyword.
-----------------------------------------------------
*/

class Vehicle {
    start(): void {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log("Car is driving");
    }
}

const car = new Car();
car.start();  // inherited method
car.drive();



/*
-----------------------------------------------------
6️⃣ POLYMORPHISM
-----------------------------------------------------
Definition:
Polymorphism means "many forms".

Same method name can behave differently 
in different classes.
-----------------------------------------------------
*/

class Shape {
    draw(): void {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw(): void {
        console.log("Drawing a square");
    }
}

const shapes: Shape[] = [new Circle(), new Square()];

shapes.forEach(shape => {
    shape.draw();  // Same method, different output
});


/*
=====================================================
SUMMARY (Very Simple Words)
=====================================================

Class        → Blueprint
Object       → Real thing created from class
Encapsulation→ Hide data
Abstraction  → Hide complexity
Inheritance  → One class uses another class
Polymorphism → Same method, different behavior

=====================================================
*/