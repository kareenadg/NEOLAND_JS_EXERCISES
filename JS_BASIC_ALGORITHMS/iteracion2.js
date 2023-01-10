//1.1
const character = {
    name: "Jack Sparrow",
    age: 25,
};

//1.2
const firstName = "Jon";
const lastName = "Snow";
const age = 24;
console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.");

//1.3
const toy1 = {
    name: 'Buss myYear',
    price: 19,
};
const toy2 = {
    name: 'Rallo mcKing',
    price: 29,
};
console.log(toy1.price + toy2.price);

//1.4
let globalBasePrice = 10000;
globalBasePrice = 25000;

const car1 = {
    name: 'BMW m&m',
    basePrice: 50000,
    finalPrice: 60000,
};
car1.finalPrice = car1.basePrice + globalBasePrice;
console.log(car1.finalPrice);

const car2 = {
    name: 'Chevrolet Corbina',
    basePrice: 70000,
    finalPrice: 80000,
};
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2.finalPrice);