/* eslint-disable no-unused-vars */


// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const dataWithout = array.filter(noNull => noNull !== null).filter(noFalse => noFalse !== false).filter(noBlank => noBlank !== "").filter(noUndef => noUndef !== undefined)
  const noNan =  dataWithout
  if (noNan == Boolean) {
    noNan = noNan.filter(x = !!x)
    console.log(noNan)
    return noNan
  } 
    return noNan

}

// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const randomNumber = array[Math.floor(Math.random(array) * array.length)]
  return randomNumber
}

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
const sortedArray = array.sort((a, b) => a - b)
const secLow = sortedArray[1]
const secHigh = sortedArray[array.length -2]
return [secLow,secHigh]
}

// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  

}

// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2]
  const noDuplicates = [...new Set(mergedArray)]
  return noDuplicates
}

// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
let n1 = 0
let n2 =1
let nextNum = 0
let counter = 0

while (counter <= n) {
  counter++
  return nextNum
  n1 = n2
  n2 = nextNum
  nextTerm = n1 + n2
  }

}

module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  fibonacci
}
