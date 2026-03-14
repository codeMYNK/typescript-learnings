// ===============================
// TYPE NARROWING IN TYPESCRIPT
// ===============================



// 1️⃣ typeof Narrowing (Primitive Types)

function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    } else {
        console.log("Number:", value.toFixed(2));
    }
}



// 2️⃣ Truthy / Falsy Narrowing

function greet(name: string | null) {
    if (name) {
        console.log("Hello " + name);
    } else {
        console.log("Name not provided");
    }
}



// 3️⃣ instanceof Narrowing (Classes)

class Tea {
    brew() {
        console.log("Brewing tea...");
    }
}

class Coffee {
    grind() {
        console.log("Grinding coffee...");
    }
}

function prepareDrink(drink: Tea | Coffee) {
    if (drink instanceof Tea) {
        drink.brew();
    } else {
        drink.grind();
    }
}



// 4️⃣ in Operator Narrowing (Object Property Check)

interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}



// 5️⃣ Discriminated Union (Best Practice)

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



// 6️⃣ Custom Type Guard (User Defined)

interface Admin {
    name: string;
    role: "admin";
}

interface Customer {
    name: string;
    role: "customer";
}

type User = Admin | Customer;

function isAdmin(user: User): user is Admin {
    return user.role === "admin";
}

function checkUser(user: User) {
    if (isAdmin(user)) {
        console.log("Admin Access Granted");
    } else {
        console.log("Customer Access Granted");
    }
}



// 7️⃣ Equality Narrowing

function compare(a: string | number, b: string) {
    if (a === b) {
        // Here 'a' is treated as string
        console.log(a.toUpperCase());
    }
}



// 8️⃣ Exhaustive Checking with never

type Payment =
    | { method: "card"; cardNumber: string }
    | { method: "upi"; upiId: string }
    | { method: "cash" };

function processPayment(payment: Payment) {
    switch (payment.method) {
        case "card":
            console.log("Card:", payment.cardNumber);
            break;

        case "upi":
            console.log("UPI:", payment.upiId);
            break;

        case "cash":
            console.log("Cash Payment");
            break;

        default:
            const _exhaustiveCheck: never = payment;
            return _exhaustiveCheck;
    }
}



// ===============================
// SAMPLE USAGE (Optional Testing)
// ===============================

printValue("chai");
printValue(50);

greet("Mayank");
greet(null);

const tea = new Tea();
const coffee = new Coffee();

prepareDrink(tea);
prepareDrink(coffee);

move({
    swim() {
        console.log("Fish swimming");
    }
});

describeChai({ type: "masala", spiceLevel: 5 });

checkUser({ name: "Mayank", role: "admin" });

processPayment({ method: "upi", upiId: "mayank@upi" });