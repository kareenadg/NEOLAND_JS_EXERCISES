//2.1

const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020};

const {title, gender, year} = game

console.log(game);

//2.2

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits

console.log(fruits);

//2.3

/* const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction

console.log(animalFunction);  */

//2.4

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car
console.log(car);

const {year1, year2, year3} = car 
console.log(car);