//4.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(user => user.name);
console.log(names);

//4.2

const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users1.map((user1) => {
    if (user1.name[0] === "A") {
        return "Anacleto"
    } else {
        return user1.name
    }});
console.log(usersName);

//4.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCities = cities.map((city) => {
    if (city.isVisited === true) {
        return city.name + "(Visited)"
    } else {
        return city.name
    }}
);
console.log(visitedCities);