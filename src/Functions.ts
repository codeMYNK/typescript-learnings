function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("CHai is Ready");
}

//In BOTH case the input parameter type is optional in 2 example it take parameter given or just take default masala
// function orderChai(type?: string){

// }
function orderChai(type: string = "Masala") {}

function createChai(order: {
  type: string;
  sugur: number;
  size: "small" | "large";
}): number {
  return 4;
}
