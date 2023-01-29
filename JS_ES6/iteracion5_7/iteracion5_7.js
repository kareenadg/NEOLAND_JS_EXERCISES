//5.7

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const myBtn = document.querySelector("button");
const myInput = document.querySelector("input");

myBtn.addEventListener("click", (ev) => {
    const myFunc = streamers.filter((user) => user.name.includes(myInput.value))
    console.log(myFunc);
}
);