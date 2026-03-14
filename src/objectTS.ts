let tea:  {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "ginger Tea",
    price: 25,
    isHot: true
}

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const adrakChai : Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea Leaves"]
}

//Duck Typing 
type Cup = {size: string};
let smallCup: Cup = {size:"200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew:Brew = coffee

type User = {
    username: string;
    password: string
}

const u :User = {
    username: "chaicode",
    password: "123"
}

//Data types split-out
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[] ////Sepration inplemented
    address: Address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating Chai with", updates);
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({})

type ChaiOrder = {
    name?:string;
    quantity?:number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({name: "Masala CHai", quantity: 2}) // wheter optional or not Required makes it to give necessary

type Chai2 = {
    name: string;
    price: number;
    isHot: boolean,
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai2, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean,
    secretIngredients: string
}

type PublicChai = Omit<Chai, "secretIngredients">;