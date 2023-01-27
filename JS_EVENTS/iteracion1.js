//1.1

const myBtn = document.querySelector("#btnToClick");

myBtn.addEventListener("click", (event) => {
    console.log(`Has clickado en un botón con el texto -> ${event.target.innerHTML}`);
})

//1.2

const myFocus = document.querySelector(".focus");

myFocus.addEventListener("focus", (ev) => console.log(ev.target.value));

//1.3

const myInput = document.querySelector(".value");

myInput.addEventListener("input", (ev) => console.log(ev.target.value));


