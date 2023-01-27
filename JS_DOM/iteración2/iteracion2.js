//2.1

const newDiv = document.createElement("div");
console.log(newDiv);

//2.2

/* const newP = document.createElement("p");
newDiv.appendChild(newP);
console.log(newDiv); */

//2.3

for (let i = 0; i < 6; i++) {
    const sixP = document.createElement("p");
    newDiv.appendChild(sixP);
}
console.log(newDiv);

//2.4

const myP = document.createElement("p");
myP.innerHTML = "Soy dinámico!";
document.body.appendChild(myP);

//2.5

const myH2 = document.querySelector("h2.fn-insert-here");
myH2.innerHTML = "Wubba Lubba dub dub";
/* myH2.textContent = "Wubba Lubba dub dub"; */
console.log(myH2);

//2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const myApps = document.createElement("ul");
document.body.appendChild(myApps);

for (let i = 0; i < apps.length; i++) {
    const myLi = apps[i];
    const newLi = document.createElement("li");
    newLi.innerHTML = myLi
    myApps.appendChild(newLi); 
}
console.log(myApps);

//2.7

const delItems = document.querySelectorAll(".fn-remove-me");
for (const items of delItems) {
    items.remove();
};

//2.8

const myMiddle = document.querySelector("div");
myMiddle.insertAdjacentHTML("afterend", `<p>Voy en medio!</p>`);

//2.9

const myChild = document.querySelectorAll("div.fn-insert-here");
for (const tag of myChild) {
    tag.insertAdjacentHTML("afterbegin", `<p>Voy dentro!</p>`);
};
