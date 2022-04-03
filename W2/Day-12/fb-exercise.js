// @ts-check
const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"], 
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

console.log("\nProblem : 0 --- complete the above function such that when it is called with name and property, then it should return its value")
function profileLookup(name, property) {
    
    for(const item of facebookProfiles){ //for of 
        if(item.firstName === name){
            if(item.hasOwnProperty(property)){
                return (item[property]);
            }else{
                return "no such property"
            }
            
        }
    }
    return "User does not exist"
}
let x= profileLookup("Pritesh", "likess")
console.log(x)


//  {
//     console.log("\n probl 0 : Using higer function")
// function profileLookup(name, property){
//     const result = facebookProfiles.map((check)=>{
//             if(check.name !== name){
//                 return"name is not exist"
//             }else if(check[property] !== property){
//                 return "property is not exist"
//             }
//     })
// }
// console.log(profileLookup("pritesh","number"))
// } 





// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //
console.log("\nProblem 1 : complete the above functin such that it returns the list of full names of all people of gurgaon.")
function getNamesFromGurgaon(location) {
    //write your code here
    let x;
    let total  = []
    for(let i in facebookProfiles){
        if(facebookProfiles[i].address.location===location){
            x=`${facebookProfiles[i].firstName} ${facebookProfiles[i].lastName?facebookProfiles[i].lastName:[]}`
            total.push(x)
            continue;
        }
        
        
        
    }
    return total ;
}
    console.log(getNamesFromGurgaon("gurgaon"))

    // for(const item of facebookProfiles){
    //     if(item.address.location==="gurgaon"){
    //         return item.firstName + item.lastName
    //     }
    // }


//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']





// ==================================2 ====================================== //
console.log('\n2. complete this function, which takes state name as argument and return the name ')
function findResidance(stateName) {
    for(const item of facebookProfiles)
    {
        if(item.address.state === stateName){
            return item.address.location
        }
    }
}
console.log(findResidance("haryana"))
// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents







// ================================== 3 ====================================== //

console.log("\nprobem : 3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. ")
function getDLStatus(addressLocation) {
    const result = [];
    for(const item of facebookProfiles){
        if (item.address.location===addressLocation){
            let fullName = (`${item.firstName} ${item.lastName?item.lastName:""}`)
            let checkDL;
            if(item.hasDrivingLicense){
                checkDL = 'D/L'
            }else{
                checkDL = 'N D/L'
            }
            result.push(fullName +" - " + checkDL)
            continue;
            
        }
    }
    return result
}
console.log(getDLStatus("gurgaon")) 
//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']






// =================================== 4 ===================================== //

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]
console.log("\n 4. write a function which returns full names in an array")
function getFullName() {
    let result=[]
    for(const item of facebookProfiles)
    {
        // let fullname = `${item.firstName}${item.lastName?' '+item.lastName:''}
        let fullname = item.firstName + (item.lastName?' '+item.lastName:'')
        result.push(fullname)
        continue;
    }
    return result;
}
console.log(JSON.stringify(getFullName()))















// ==b=================================== 5 =================================== //
// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']
console.log("\n4th problem")
// console.log("\n5. write a function which returns all likes of all the people in an array")
function getAllLikes() {
    let finalResult = [];
    for(const item of facebookProfiles)
    {   
    let result;
        if(result = item?.likes)
        finalResult.push(...result)      
        continue
    }

  // let  output = finalResult.flat()
    return finalResult
}

console.log(getAllLikes())

{
    console.log("\n4th problem : Using higer order function")
    function getAllLikes() {
        
        let getLike = facebookProfiles.filter((item)=>item.likes).map((item)=>item.likes)
        
        
        return getLike.flat();
    }
    console.log(getAllLikes())
}










// =============4========================= 6 ================================== //



//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"
console.log("\nproblem 6:")
function getNameFromDelhiWithDL(facebookProfiles) {
    const getNames=facebookProfiles.filter(array => array.address.location==="delhi");
    if(getNames.length === 0){
        return "No such Person"
    }else{
        return getNames.map(items => items.firstName + " " + (items.lastName ? items.lastName + " - " : '- ') + (items.hasDrivingLicense ? "D/L" : "No D/L"));
    }
 

}
console.log(getNameFromDelhiWithDL(facebookProfiles));







// ======================================= 7 ================================= //
console.log("\n problem :7")

//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh


function getNameOfDriverWithoutDL() {

    const output = facebookProfiles.filter((people)=> people.likes?.includes("driving")&&(people.hasDrivingLicense===false)).map((fname)=>fname.firstName)  
    
    return console.log(...output)
}
getNameOfDriverWithoutDL()

{
    console.log("/7th problem : with for loop")
    function getNameOfDriver(){
        let result;
    for(const item of facebookProfiles) 
    {
        
        if(item.likes?.includes("driving")&& (item.hasDrivingLicense===false)){
            result = item.firstName
            
        }
        
    }return result;
}
console.log(getNameOfDriver())
}


