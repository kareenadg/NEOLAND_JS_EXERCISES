//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2
avengers.shift();
avengers.unshift("IRONMAN");
console.log(avengers);

//1.3
console.log(avengers.length);

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty",  "Summer");
console.log(rickAndMortyCharacters);

//1.5
const rickAndMortyCharactersOne = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersOne.pop();
console.log(rickAndMortyCharactersOne[0], rickAndMortyCharactersOne.pop());

//1.6
const rickAndMortyCharactersTwo = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersTwo.splice(1, 1);
console.log(rickAndMortyCharactersTwo);