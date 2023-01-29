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

 const findLongestWord = param => {
  let longName = "";
  for (const item of param) {
    if(item.length > longName.length){
      longName = item
    }
  } return longName;
 }
 console.log(findLongestWord(avengers));


//1.3
const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = param => {
  let acc = 0;
  for (const num of param) {
    acc += num}  return acc;
  }
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


//1.8
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
let repeatedItems = [];

const repeatCounter = list => {
  for (const item of list){
if (repeatedItems[item]){
repeatedItems[item]++
  }
else {repeatedItems[item]=1}}
return repeatedItems};
console.log(repeatCounter(counterWords));

