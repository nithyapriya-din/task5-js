1.Print odd numbers in an array:
const printOddNumbers = arr => arr.forEach(num => {
    if(num % 2 !== 0) {
        console.log(num);
    }
});

printOddNumbers([1, 2, 3, 4, 5]);
2.Convert all the strings to title caps in a string array:
const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(convertToTitleCaps(["hello", "world", "javascript"]));
3.Sum of all numbers in an array:
const sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
4.Return all the prime numbers in an array:
const getPrimeNumbers = arr => arr.filter(num => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
});

console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));
5.Return all the palindromes in an array:
const getPalindromes = arr => arr.filter(str => str === str.split('').reverse().join(''));

console.log(getPalindromes(["radar", "hello", "level", "world", "deified"]));

