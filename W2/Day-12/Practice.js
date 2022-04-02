//Practice while sir teaching 

//variable inside the finction get created at the execution time and then they are destroyed when the function is executed.

//Q.
//can I somehow stop this destruction of variables?
// yes -by the help of the concept of outer function and inner function
        //inner function willh hold the reference of the outer function variables.


        //===clauser===
function outer(a,b){
    return function inner(){
        console.log(a,b);
    }
}
const result = outer(10,20)

//variable should be destroyed after the execution of the inner function.
 //what will the output and why?
//function are first class objects that can be stored in a variable.
//result is a function
const nresult =  outer(50,100)();


console.log(result);
//in result function is stored in a variable.
result();


{//call by value and call by reference
let a =5;
let b= a; //it wil copy the value of a to b and stored in diffrent memory location 
b=b+10;
console.log(b);
//it will not change value of a
}

{//pass  by reference
    let person = {
        name:'Darshit',
        age:20
    }
    let anotherPerson = person;
    anotherPerson.age=30;
    //both object have same reference so it will change both the value
    //it will not create another new object in memory location

    //how do we know if both have same reference?
    console.log(person);
    console.log(anotherPerson);
    //it will change both person and another person values

    console.log(person===anotherPerson); //true
    console.log(person===anotherPerson); //true


//how to create copy of object
    const person1 = {
        name:'Dk',
        residance:{ //residance key has an address of object
            city:'surat',
            state:'gujarat' 
        }
        //all operation/tool in javasctipt => shallow copy(first level pe copy hoga)
    }

    //create using spreead operator
    {
        const personcopy = {...person1};
        console.log(personcopy);
        //it will create a new object and copy all the values of person1
        //it will not create a new object in memory location
        personcopy.name = 'darshit'; 
        //name change nahi hona chahiya tha par kyo ho gya?
        console.log(personcopy);

    }

    {console.log("\ndeep copy\n")
        const shallow = {...person1} //it will create a new object and copy all the values of person1 expacet the address of object
        const deepCopy ={...person1,residence:{...person1.residance}};
        //  it will create a new object and copy all the values of person1 and also the address of object

        //deep copy is used when we want to create a copy of object and also the address of object
        
        //console.log(shallow);
        console.log(deepCopy);
        console.log(deepCopy.residance===person1.residance);
        deepCopy.residance.city = 'mumbai';  
        console.log(deepCopy);
        console.log(deepCopy.residance===person1.residance); 



    }
}

//use of JSON.parse() and JSON.stringify()
//JSON.parse() is used to convert string to object and JSON.stringify() is used to convert object to string .  it is used to convert string to object and object to string.       

//const will not stop you to change object values because it has only referenceof the object.
