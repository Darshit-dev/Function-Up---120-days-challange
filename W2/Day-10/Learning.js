/** @format */

//       ==== console.log ====
//act as a lens to lookup a value in memory
//const a = 2
//const b = a + 5
//if we not write console.log(), code will also run succesfully.

//ES6 - 6th edition which was introduced in 2016

//Spread syntax- will expand things  - to copy and concate

const arr = ['a', 'b', 'c']
const arr2 = ['d', 'e', 'f']
const arrTwo = [...arr, ...arr2] //
console.log('spread operator' + arrTwo)

{
  //  == Desctructuring == to break the structure of thing
  // unpacke value
  console.log('Desctructuring')
  const arr = ['a', 'b', 'c']

  const a = arr[0]
  const b = arr[1]
  const c = arr[2]
  console.log('old method \n' + a + ' ' + b + ' ' + c)
  // unpacked values as an old style

  //let's do from new method
  const [x, y, z] = arr
  console.log('New method\n ' + a, b, c)
}

{
  // == rest ==
  const x = [1, 2, 3, 4, 5, 6]
  const [a, b, ...c] = x
  //-> rest, means after rest reamaining all element will go to c
  console.log(a, b, c)
}

{
  function sum(...z) {
    console.log(z) // it will print value in array
    console.log(typeof z) //object which includes array
    //how I have all the numbers that a use enterd in an array?
  }
  sum(10, 52, 013, 15)
}

//mutability and immutability
// benefit
//    Time travel,
//     Predictability,
