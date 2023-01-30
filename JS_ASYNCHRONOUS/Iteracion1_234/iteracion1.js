//1.2 - 1.3 - 1.4

const baseUrl = 'https://api.nationalize.io';

const myInput = document.querySelector("input");

const getData = async () => {
    const data = await fetch(`${baseUrl}?name=${myInput.value}`);
    const json = await data.json();
    console.log(json);
    printData(json.country, json.name);
}

const printData = (countries, name) => {
    for (const item of countries) {
        const myDiv = document.createElement("div");
        const myP = document.createElement("p");
        myP.innerHTML = `El nombre ${name} tiene un ${Math.floor(item.probability * 100)}% de ser de ${item.country_id}`;
        document.body.appendChild(myDiv);
        myDiv.appendChild(myP);

        const btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.addEventListener("click", (ev) =>
        myDiv.remove());
        myDiv.appendChild(btn);
    }
}

const myBtn = document.querySelector("button");
myBtn.addEventListener("click", (ev) => {
    getData();
});
