/* eslint-disable no-unused-vars */

// ? Below is a demo function to practice running the automated tests.
// ? add the statement 'return []' to the function, save the file.
// ? Run the tests with the command inside your terminal 'npm run test'
// ? You should now see this demo test passing in the ouput report
function demo(array) {
  return []
}

// ? using `filter` write a function which returns all the string elements in an array
// ? eg: stringsOnly([10, 'Mike', '23', NaN, 'elephant']) => ['Mike', '23', 'elephant']

function stringsOnly(array) {
    return array.filter(element => typeof(element) === 'string')
}
// const array = ['James', `Whiskers`, 123, `trampoline`, 22] - test array
// console.log(stringsOnly(array))

// ? using `map` write a function that converts an array of farenheit values to celcius
// ? eg: convertTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertTemps(array) {
    return array.map(temp => (temp - 32) / 1.8 )
}

// const array = [20, 30, 40, 150, 190] - test array
// console.log(convertTemps(array))

// ? using `map` write a function that returns the total number of characters of each character in an array of words
// ? eg: characterCount(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]

function characterCount(array) {
    return array.map(word => word.length)
}

// ? using `filter` write a function that returns an array only containing falsey value
// ? eg: containsFalsey([100, {}, [], 'Mike']) => false, containsFalsey([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

function containsFalsey(array) {
    return array.filter(value => !value)
}

// const array = [100, {}, [], 'Mike',-1]
// console.log(containsFalsey(array))

// ? using any array method, write a function that returns the string 
// elements of an array that have a given number of characters or larger
// ? eg: wordsOfLength(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function wordsOfLength(array, minLength) {
    return array.filter(word => word.length >= minLength)
}

// ? using any array method, write a function that converts an array of measurements as strings, into an array of numbers
// ? eg: measurementToNumber(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function measurementToNumber(array) {
    return array.map(measurement => parseFloat(measurement))
}

// ? using `split` and `filter` write a function that counts the number of vowels in a sentence
// ? eg: numberOfVowels('Stay classy San Diego') => 6

function numberOfVowels(string) {
   return string.match(/[aeiou]/gi).length
}
// I couldn't work out how to do it with split and filter!

// ? using, `split`, `map` and `join`, write a function that capitalises the first letter of each word in a sentance
// ? eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'

function titleCase(string) {
    const arr = string.split(' ')
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    const newString = arr.join(' ')
    return newString
}

//return string.split('').map(letter => letter.toUpperCase())


// ! please do not alter below ✋

module.exports = {
  demo,
  stringsOnly,
  convertTemps,
  characterCount,
  containsFalsey,
  wordsOfLength,
  measurementToNumber,
  numberOfVowels,
  titleCase
}
