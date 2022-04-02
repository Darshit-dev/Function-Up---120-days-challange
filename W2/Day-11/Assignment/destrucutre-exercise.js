const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax

		
// ============================================================================= //
console.log("\nproblem 1\n")
// remove first element from places array and print the remaining array 
const [first,...lasTthree] = places
let result= lasTthree
console.log(result)
//result = ['gurgaon', 'jaipur', 'pune']



// ============================================================================= //
console.log("\nproblem 2\n")
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
const firstA= first;
Fresult = [firstA, ...morePlaces]
console.log(Fresult)
  


// ============================================================================= //
console.log("\nproblem 3\n")
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
{
const [first, ...lastThree] = morePlaces
const [firstA,secondA,thirdA, ...lastThreeA] = places
const finalResult = [...lastThree, firstA,secondA,thirdA]
console.log(finalResult)
}


const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
console.log("\nProblem 4\n")
// destructure and store pincode into a variable named myPincode
      const { address:{pinCode} } = myData
      const myPincode = pinCode
      console.log(myPincode)


     
// destructure and store second like into a vaiable named myLike
console.log("\nProblem 5\n")
const {likes} = myData
myLike = likes[1]
console.log(myLike)
  