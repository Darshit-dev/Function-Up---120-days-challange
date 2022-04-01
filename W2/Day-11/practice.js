function sum(a,b){          
    const c=a+b
    console.log("hello")
    
}

const result=sum(5,6)
console.log(result) // will be undefined output

{
    //rest with function 
    function sum(...a){ 
           return a  //  how to sum all number using this rest?
    }
    console.log(sum(4,5,7,98,954))
}

{// what is only one arggument given to ,two parameter function?
    function sum(a,b){    //rest of the perams will be undefined       
        const c=a+b     //js will create emyty box of b
        return c   // any number + undefined = NaN
        
    }
    
    const result=sum(5)
    console.log(result) // what is only one arggument given to ,two parameter function?
                //NaN

}

{ // === ARROW FUNCTION ===
      
    const a = () =>{}


}

{//HIGHER ORDER FUNCTION  -- map function,
    
        let a=[1,2,5,46,8]
        const result=a.map(x=>x*2) // map will create new array
        console.log(result) 
        //always array length will be the same , 
}//is map matthod mutable or immutable? --> immutable ,bcz it does not change input array


// == array.filter ==
{
    let a=[1,2,5,46,8] // it will access from the hidden door     
    const result=a.filter(x=>x%2===0);
    console.log(result) 
//will create new array and add only true value into array
}//is filter matthod mutable or immutable? -immutable


//Push()
//is push a higer order funcion
//what is push ? mutable or immutable?  - mutable bcz it changes input array
//what is the output of push /what is the return value of push.
{
    const arr =[1,2,3,4,5,6,7,8]
    const result=arr.push(20)
    console.log(result) // output is length of the modified array
}

// mutable methods
// pop .push,shifft, unshift,sort

//immutable methods
// map ,filter , reduce

{//chain  
    const result =[2,3,4,5]
    .map(x=>x*2)  //[4,6,8,10]
    .filter(x=>x%2=== 0) 
    .map(x=>x+5)
    .filter(x=>x<10)
    console.log(result) //[9]

}