/** @format */

//can not change value of const
let z
console.log(z)

//can not declare emty box using const

//understanding the scope of the variables using the room structure

//room (floor)

//scope of variables
{
  //Act as a room(block) - block scope
  let a = 2 //room 1
}
//room (floor)
//room (floor) members don't know about room 2's members
