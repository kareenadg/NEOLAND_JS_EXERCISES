//3.1

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsCopy = [...pointsList];
console.log(pointsCopy);

//3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log(toyCopy);

//3.3

const pointsLis1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const pointsCopy1 = [...pointsLis1, ...pointsLis2];
console.log(pointsCopy1);

//3.4

// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const toyCopy1 = {... toy, ...toyUpdate};
console.log(toyCopy1);

//3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors];
const colorsUpdate = colorsCopy.splice(2,1)
console.log(colorsCopy);