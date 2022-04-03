//use of map funciton -- to tranfrom array and return a new array
const arr = [1,2,3,4]
function double(x) {
    return x*2
}
const output = arr.map(double) //we need to give function as a argu to map 
//internally map do - it will run over each and every value in the array
//arr.map(logic of mapping)
console.log(output)



//filter function - to filter out array and create new array of it - it can not take transromation operation like map
console.log("\nfilter function") 
{
    const arr = [1,2,3, 4,7,89,7,2,]
function isodd(x) {
    return x%2;
}

//filer all the odd values
const output = arr.filter(isodd) //we can write arrow function inside argu. directly
console.log(output)
}


//reduce function --- u nedd to take all the element off array and comeup with single value
console.log("\nreduce function")
{
    const arr= [5,7,9,2,4,5]
    function findMax(arr){
        let sum = 0;
        for(let i=0; i<arr.length; i++)
        {
            sum += arr[i]
        }
        return sum;
    }
    console.log(findMax(arr))

    //how to use reduce from avbove example ---

    const output = arr.reduce(function (acc,curr){
        acc =acc+curr;
        return acc;
        
    },0); // initial value of this
    console.log(output)

    {//findout max from array
        console.log("\nmax arry using reduce")
{//normal funciton
    const arr= [5,7,9,2,4,5]
    function findMax(arr){
        let max = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        return max;
    }
    console.log(findMax(arr))

    //how to use reduce from avbove example ---
//yt url -https://youtu.be/zdp0zrpKzIE?t=1340
    const output = arr.reduce(function (max,curr){
       if(curr>max)
        max=curr;
        return max;
    },0); // initial value of this
    console.log(output)
}
    }
}


//tricky use of map function
console.log("\ntricky use of map function")
//create a variable to array of objects
{
const arr = [
    {
        name: "sachin",
        age: 30
    },
    {
        name: "saurav",
        age: 25
    },
    {
        name: "darshit",
        age: 28
    }]

    const output = arr.map(x=>x.name +" "+ x.age)
    console.log(output)
}