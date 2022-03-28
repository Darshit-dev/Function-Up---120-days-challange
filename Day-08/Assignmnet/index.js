/** @format */

// 1. Print all even numbers in first 50 natural numbers
console.log(
  'problem 1 ----- Print all even numbers in first 50 natural numbers'
)
for (let even = 1; even < 51; even++) {
  if (even % 2 === 0) {
    console.log(even)
  }
}

// 2. print all odd numbers in natural numbers from 20 to 50
console.log(
  'problem 2  ---- print all odd numbers in natural numbers from 20 to 50'
)
for (let oddNumbers = 20; oddNumbers < 51; oddNumbers++) {
  if (oddNumbers % 2 !== 0) {
    console.log(oddNumbers)
  }
}

// 3. print all numbers that are divisible by 5
// 	[12, 45, 67, 89, 90, 34, 35, 55]

let divisibleArray = [12, 45, 67, 89, 90, 34, 35, 55]
console.log(
  'Problem 3 ---- print all numbers that are divisible by 5 from given list of [12, 45, 67, 89, 90, 34, 35, 55]'
)
for (let i = 0; i < divisibleArray.length; i++) {
  if (divisibleArray[i] % 5 === 0) {
    console.log(divisibleArray[i])
  }
}

// 4. Print all numbers of this array
// 	 [[1,2], [3,4], [5,6], [7,8]]
console.log('4. Print all numbers of this array [[1,2], [3,4], [5,6], [7,8]]')
let number = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
]
for (let i = 0; i < number.length; i++) {
  console.log(number[i][0])
  console.log(number[i][1])
}

// 5. Print all prime numbers occurring in 1st 50 natural numbers
//prime number function
console.log(
  'Problem 5 ---- Print all prime numbers occurring in 1st 50 natural numbers'
)
function primeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
for (let i = 2; i < 51; i++) {
  if (primeNumber(i)) {
    console.log(i)
  }
}
