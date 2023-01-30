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


const printDiv = (country) => {
    for (const item of country) {
        const myDiv = document.createElement("div");
        myDiv.classList.add("box");
        myDiv.innerHTML += 
        `<h4>${item.title}</h4>
        <img src=${item.imgUrl} alt=${item.title}/>`;
        document.body.appendChild(myDiv);

  /*    const myH4 = document.createElement("h4");
        myH4.textContent = item.title;
        const myImg = document.createElement("img");
        myImg.src = item.imgUrl;
        myImg.alt = item.title;
        myDiv.appendChild(myH4);
        myDiv.appendChild(myImg);
        document.body.appendChild(myDiv); */
    }
};
printDiv(countriesOne); 

//1.5

const myBtn = document.createElement("button");
myBtn.innerHTML = "Delete";
document.body.appendChild(myBtn);


myBtn.addEventListener("click", (ev) => {
const myBox = document.querySelectorAll(".box");
 /* if (myBox.length <= 1) {
    myBtn.innerHTML = "No hay más divs que eliminar";
    myBtn.disabled = true;
  }  */
myBox[myBox.length - 1].remove();
}
);

//1.6

/* 
for (const item of countriesOne) {
    const myDiv = document.createElement("div");
    myDiv.classList.add("box");
     
    const myH4 = document.createElement("h4");
    myH4.textContent = item.title;
    const myImg = document.createElement("img");
    myImg.src = item.imgUrl;
    myImg.alt = item.title;

    const btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.addEventListener("click", () => {
        myDiv.remove();
    })

    myDiv.appendChild(myH4);
    myDiv.appendChild(myImg);
    myDiv.appendChild(btn);
    document.body.appendChild(myDiv);
}; */