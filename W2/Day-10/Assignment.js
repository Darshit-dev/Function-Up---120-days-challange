// problem 1

// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// using nested if else
// using logical operators

/**
 * use the number variable as user input.
 * 
 * change this number yourself to other values and see if
 * you are getting the right answer
 * example: const number = 12
 */ 
const number =16;


// method 1 using if else only. Hint: use nested if-else
{
    if(number%2 === 0 )
    {
        if(number <15)
        {
            console.log("a")
        }
        else{
            console.log("b")
        }
    }else{
        if(number<10){
            console.log("c")
        }
        else{
            console.log("d")
        }
        
        
    }
}

// method 2 using if else and logical operators
{
    const number = 10;
    if(number%2 === 0 && number < 15){
        console.log("a")
    }
    else if(number%2 === 0 && number > 15 ){
        console.log("b")
    }
    else if(number%2 !== 0 && number<10){
        console.log("c")
    }
    else if(number%2 !== 0 && number<10){
        console.log("d")
    }
}


{
// problem 2
console.log("problem 2\n\n")
const letters = ["Hi", "my", "name", "is", "Akash"];
let a="";
for(i=0;i<letters.length;i++){
    a = letters[i]=='Hi'?a + letters[i]+ "," + " ":a + letters[i] + " ";

  
}


console.log(`"${a}"`)
}

/**
 * concat the strings in the aboeve array to get the following result
 * "Hi, my name is Akash."
 * Caution: string has a comma and a full stop
 */

// Hint: solve this using for loop

// problem 3

console.log("problem 3")
/**
 * what will be the result of the consoles and why?
 * 
 */

let age = 20;
age = 100;
const place = "Delhi";
{
    let age = 30;
    age = 40;
    console.log("this is age one ===>", age); //40 -- bcz, age is in local scope ,so , if age will find in local scope ,js engine will not try to go out of scope to find value of age ,,,  and we use "let" hare , it means that overridde can possible in this scenario.
    console.log("this is place ====>", place);
    //Delhi -- bcz , first of all js engine try to find value of place in local scope, if it can't able to find in local scope. it will move to the global scope to find value.
}

age = 60;
console.log("this is age two ===>", age);
//60 - bcz it can not acces to local scope , inside to outside scope chain possible, but not possible outside to inside,, now age variable declared with let keyword means we can override value, and will consider lates value of variable in this scenario.
console.log("please read comment for the answer\n");







// problem 5
console.log("\nproblem 5\n")
// Find sum and multiplication of  all natural numbers from 10 to 20
{
    let sum = 0;
    let mul = 1;
    for(let i = 10; i < 21; i++)
    {
        sum +=  i;
        mul *=i;
    }
    console.log("sum of 10 to 20 is ----> " + sum)
    console.log("multiplication of 10 to 20 is ----> " + mul)
}


// problem 6

// print "yes" if a given year is a leap year else "no"

/**
 *
 * Hint:
 * every year that is exactly divisible by four is a leap year,
 * except for years that are exactly divisible by 100,
 * but these centurial years are leap years if they are exactly divisible by 400
 *
 */

/**
 * use the year variable as user input.
 * 
 * change this number to other values yourself and see if
 * you are getting the right answer
 * example: const year = 1000
 */
 console.log("\n  problem 6 \n")
const year = 2010;

// method 1 using if else

if(year%4 ===0 )
{
    console.log("yes, it is a leap year")
}
else if(year%100 ===0)
{
    console.log("No, it is not  a leap year")
}
else if(year%400 ===0)
{
    
    console.log("yes, it a leap year")
}
else{
    console.log("No ,it is not a leap year")
}


console.log("\nmethod 2\n")
const yesLeap =()=> console.log("yes, it is a leap year");

const notLeap =()=> console.log("No, it is not a leap year");
// method 2 using ternary operator
 (year%4 ===0 ? yesLeap() : (year%100 ===0? notLeap():(year%400 ===0?yesLeap():notLeap())))


 // problem 7
console.log("\nproblem 7\n")
// find the area of a triangle.  Lengths of its sides are 5, 6, 7

const a=5;
const b=6;
const c=7;
s=(a+b+c)/2
area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log(`Area of triangle is ${area}`)


// =================================================================================================== //


// =================================================================================================== //

// problem 9

console.log("\nproblem 9\n")
// write program to check whether num variable is between 100 and 200 or 400 and 500
// print true if it is, else print false
// handle edge cases. Hint: what if number is a string or null?


const num = 450;
/**
 * use the num variable as user input.
 * 
 * change this number to other values yourself and see if
 * you are getting the right answer
 * example: const num = 250
 */
if((num>100 && num<200) || (num>400 && num<500))
{
    console.log("true")
}else
{
    console.log("false")
}




// =================================================================================================== //

// problem 10
console.log("\nProblem 10\n")
// you have 3 numbers.
// write a program which can find the largest number
 const numOne= 250;
 const numTwo = 4;
const numThree = 5;

/**
 * use the numOne, numTwo and numThree variable as user input.
 * 
 * change them to other values yourself and see if
 * you are getting the right answer
 * example: const numOne = 250, numTwo = 4, numThree = 5
 */
if(numOne>numTwo && numOne>numThree)
{
    console.log(`largest number is ${numOne}`)
}
else if(numTwo>numOne && numTwo>numThree)
{
    console.log(`largest number is ${numTwo}`)
}
else if(numThree>numOne && numThree>numTwo){
    console.log(`largest number is ${numThree}`)
}

// =================================================================================================== //

// problem 11


// write a code which prints true if one of them is 8 or their sum or difference is 8. 
// Otherwise it should print false
console.log("\nproblem 11\n")
{
 const a = 7;
 const b = 8;
/**
 * use the a and b variable as user input.
 * 
 * change them to other values yourself and see if
 * you are getting the right answer
 * example: const a = 8, b = 5
 */
if((a ===8 || b === 8) || (a-b===8) || (a+b===8)){
    console.log("true")
}else{
    console.log("false")
}
}


