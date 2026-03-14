/*
====================================================
REAL WORLD OOP EXAMPLE (TypeScript)
Example: Payment System
====================================================

Concepts used:
1. Interface
2. Abstraction
3. Encapsulation
4. Polymorphism
5. Dependency Injection
*/


// ==================================================
// 1️⃣ INTERFACE (ABSTRACTION)
// ==================================================

/*
Interface abstraction provide karta hai.

Hindi:
Interface ek contract hota hai jo batata hai
class ko kaunse methods implement karne honge.
*/

interface PaymentMethod {
  pay(amount: number): void
}



// ==================================================
// 2️⃣ IMPLEMENTATIONS (POLYMORPHISM)
// ==================================================

/*
Different payment methods same interface
implement kar rahe hain.

Same method "pay()" ka different behavior.
*/

class CreditCardPayment implements PaymentMethod {

  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`)
  }

}

class UpiPayment implements PaymentMethod {

  pay(amount: number): void {
    console.log(`Paid ${amount} using UPI`)
  }

}

class PaypalPayment implements PaymentMethod {

  pay(amount: number): void {
    console.log(`Paid ${amount} using Paypal`)
  }

}



// ==================================================
// 3️⃣ SERVICE CLASS
// ==================================================

/*
Encapsulation + Dependency Injection

Hindi:
PaymentService ko nahi pata kaunsa payment method
use hoga. Wo sirf interface par depend karta hai.
*/

class PaymentService {

  // encapsulated property
  private paymentMethod: PaymentMethod

  /*
  Dependency Injection

  Hindi:
  Payment method bahar se inject kiya ja raha hai.
  */
  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod
  }

  processPayment(amount: number) {
    this.paymentMethod.pay(amount)
  }

}



// ==================================================
// 4️⃣ USING THE SYSTEM
// ==================================================

/*
Yaha hum different payment methods use kar sakte hain
without changing PaymentService.
*/

// Credit card payment
const creditCard = new CreditCardPayment()
const payment1 = new PaymentService(creditCard)

payment1.processPayment(500)


// UPI payment
const upi = new UpiPayment()
const payment2 = new PaymentService(upi)

payment2.processPayment(200)


// Paypal payment
const paypal = new PaypalPayment()
const payment3 = new PaymentService(paypal)

payment3.processPayment(1000)