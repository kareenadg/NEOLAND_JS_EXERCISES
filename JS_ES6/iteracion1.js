//1.1

const numSum = (numA = 10, numB = 5) => {
  return numA + numB;
}; 

console.log(numSum());
//1.2

const numSumA = (numA = 10, numB = 5) => {
    return numA + numB;
  };

console.log(numSumA(8));

//1.3

const numSumB = (numA = 10, numB = 5) => {
    return numA + numB;
  };

console.log(numSumB(8, 24)); 