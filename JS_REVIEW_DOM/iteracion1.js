//1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const newUl = document.createElement("ul");
document.body.appendChild(newUl);

for (const item of countries) {
    const newLi = document.createElement("li");
    newLi.innerHTML = item;
    newUl.appendChild(newLi);
};
console.log(newUl);

//1.2

const delClass = document.querySelector(".fn-remove-me");
delClass.remove();

//1.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const myData = document.querySelector("div[data-function='printHere']");

const myUl = document.createElement("ul");
myData.appendChild(myUl);

for (const car of cars) {
    const myLi = document.createElement("li");
    myLi.innerHTML = car;
    myUl.appendChild(myLi);
};
console.log(myUl);

//1.4

/* Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
 */

const countriesOne = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 

const myUls = document.createElement("ul");

for (const iterator of object) {
const myLis = document.createElement("li");
const myDiv = document.createElement("div");
const myH4 = document.createElement("h4");
const myImg = document.createElement("img");


}
/* for (const item of countriesOne) {
    myDiv.innerHTML = item;
    document.body.appendChild(myDiv);
};
 */

/* myDiv.appendChild(myH4);
myDiv.appendChild(myImg); */

//1.5





//1.6