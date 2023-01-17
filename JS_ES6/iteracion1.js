//1.1

const numSum = (numA = 10, numB =5) => {
  return numA + numB;
}; 
numSum();

console.log(numSum);
//1.2

const numSumA = (numA = 10, numB =5) => {
    return numA + numB;
  };
numSumA(8);

console.log(numSumA);

//1.3

const numSumB = (numA = 10, numB =5) => {
    return numA + numB;
  };
numSumB(8, 24);

console.log(numSumB); 