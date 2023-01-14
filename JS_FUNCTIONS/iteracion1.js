//1.1
function sum(numberOne = 5, numberTwo = 8) {
  if (numberOne > numberTwo) {
    console.log("NumberOne");
  } else {
    console.log("NumberTwo");
  }return
  };
sum();

//1.2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  let name = "";
  for (const avenger of param) {
    if (avenger.length > name.length){
      name = avenger;
    } 
  }
  return name
};
console.log(findLongestWord(avengers));

//1.3
const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = sum => {
  let acc = 0;
  for (const num of numbers){
    acc += num } return acc
};
console.log(sumAll(numbers));

//1.4
const numbers1 = [12, 21, 38, 5, 45, 37, 6];

const average = param => {
  let acc = 0
  for (const num1 of param){
    acc += num1 }
    return acc / param.length
  };
  console.log(average(numbers1));

//1.5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const averageWord = sum => {
  let word = 0;

  for (const key of sum) {
    if (typeof key == "number") {
      word += key;
    } else {
      word += key.length;
    }
  }return word
}
console.log(averageWord(mixedElements));

//1.6 
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
];

const listNoDup = []

const removeDuplicates = (duplicates, i = -1) => {
  for (const food of duplicates.sort()) {i++;
    if(food !== duplicates[i + 1]){
      listNoDup.push(food);
    }
  } console.log(listNoDup);
};
removeDuplicates(duplicates);

//1.7
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

const finderName = (list, element) => {
  for (const item of list){
    if (list.includes(element)){
  return [true, list.indexOf(element)]
  }} return false;
};
console.log(finderName(nameFinder, "Peggy"));
