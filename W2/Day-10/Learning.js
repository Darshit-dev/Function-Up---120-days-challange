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

//how to read array

{
  const arr = [2, { name: 'darshit' }]
  console.log(arr[1].name) //access object from array
}

//object creation
{
  const a = {
    name: 'darshit',
    city: 'surat',
    //how to add array in objects
  }
}

//delete cell from first element - use shift()
//delete cell from last element - use pop()

// ===object===
{
  const person = {
    age: 21,
    name: 'darshit',
  }
  delete person.name //delete key like this element
  console.log(person)
}

// distuctor in object
{
  const person = {
    name: 'darshit',
    place: 'surat',
  }
  // const name = person.name
  // const place = person.place
  //above is old way of doing

  const { name, place } = person
  console.log(person) // new and easy way to dstructure object
}

//how to access object key via [] - used for dynamic key - to be tunderstand
{
  const person = {
    name: 'darshit',
    place: 'surat',
    age: '21',
  }

  const a = 'place' // as per value , output will change
  console.log(person[a]) // square is used for dynamic reading
  //console.log(person.a) // it throws error "undefined", becaue there is no such key "a"
  console.log( Object.keys(person))
  console.log(Object.values(person))
  console.log(Object.entries(person) + '\n')
}

{
  const person = {
    name: 'darshit',
    place: 'surat',
    10: 21, // value are not restricted in any way
  }
  const keys = Object.keys(person)
  console.log(keys) //  output will be in array
  console.log(typeof keys[0]) // can be access key via index
  //number key will convert into string
  person.place = 'banglure'
  console.log(person) // we use const although value can be modified in obejct

  //rules for key
  //   1.can not be numbers
  //   2.can not have spaces , if needed we need to do ""
  //   3.all the key are in string format
}

{
  //key not be duplicated , if yes then last duplicated key will be considered.
  //(value)data can be reapted
}

{
  //how to set object fully immutable?
  //const person = {
  // name: 'darshit',
  //   place: 'surat',
  // }
  //Object.freez(person) // by this way
  // person.place = 'Banglure' // will not change
  // console.log(person)
}
