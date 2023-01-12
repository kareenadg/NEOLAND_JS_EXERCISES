//1.1
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
for (const item of products) {
  if (item.includes("Camiseta")) console.log(item);
}

//1.2
const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {
  if (
    (alumns[i].T1 == true && alumns[i].T2 == true) ||
    (alumns[i].T1 == true && alumns[i].T3 == true) ||
    (alumns[i].T2 == true && alumns[i].T3 == true)
  ) {
    alumns[i].isApproved = true;
  } else {
    alumns[i].isApproved = false;
  }
}
console.log(alumns);

//1.3
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];
for (const cities of placesToTravel) {
  console.log(cities);
}

//1.4
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};
for (const key in alien) {
  console.log(`${key}: ${alien[key]}`);
}

//1.5
const placesToTravel1 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
/* for (let i = 0; i < placesToTravel1.length; i++) {
  if (placesToTravel1[i].id != 11 && placesToTravel1[i].id != 40) {
    console.log(placesToTravel1[i]);
  }
}  */
for (let i = 0; i < placesToTravel1.length; i++) {
  if (placesToTravel1[i].id == 11 || placesToTravel1[i].id == 40)
  placesToTravel1.splice(i, 1)
}
console.log(placesToTravel1);

//1.6
const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
let listNoCats = [];
for (const toy of toys) {
  if (toy.name.includes("gato") == false) {
    listNoCats.push(toy.name);
    console.log(toy.name);
  }
}
/*
 let listNoCats = []
for (const toy of toys) {
    if (!toy.name.includes('gato')) {
      listNoCats.push(toy.name);
      console.log(toy.name)
    }
} */

//1.7
const popularToys = [];
const toys1 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];
for (const item of toys1) {
  if (item.sellCount > 15) {
    popularToys.push(item);
  }
}
console.log(popularToys);
