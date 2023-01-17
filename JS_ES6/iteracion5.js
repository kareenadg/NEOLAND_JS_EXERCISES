//5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const highAges = ages.filter((age) => age > 18);
console.log(highAges);

//5.2

const evenAges = ages.filter((age) => age % 2 === 0);
console.log(evenAges);

//5.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersGame = streamers.filter((user) => user.gameMorePlayed === 'League of Legends');
console.log(streamersGame);


//5.4

const streamersName = streamers.filter((user) => user.name.includes("u"));
console.log(streamersName);

//5.5

const streamersValue = streamers.filter((user) => user.gameMorePlayed.includes("Legends"));
// const olderStreamers = streamersValue.age > 35 == streamersValue.gameMorePlayed.toUpperCase()
console.log(streamersValue);

//5.6

//5.7