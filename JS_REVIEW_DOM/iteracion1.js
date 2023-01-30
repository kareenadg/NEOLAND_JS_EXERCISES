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

const countriesOne = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 

const myDiv = document.createElement("div");
document.body.appendChild(myDiv);

const printDiv = (country) => {
    for (const item of country) {
        myDiv.innerHTML += 
        `<div class="box">
        <h4>${item.title}</h4>
        <img src=${item.imgUrl} alt=${item.title}/>
        </div>`
    }
};
printDiv(countriesOne);

//1.5

const myBtn = document.createElement("button");
myBtn.innerHTML = "X";
document.body.appendChild(myBtn);

const myBox = document.querySelectorAll(".box")

myBtn.addEventListener("click", (ev) => {
    countriesOne.splice(countriesOne.lastIndexOf(myBox), 1);
    /* myBox.remove(); */
 console.log(ev.target.innerHTML)}
);


//1.6