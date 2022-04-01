// @ts-check
const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

function findCard(value, suit) {
    const result = cardData.filter((compare)=>compare.value === value && compare.suit ===suit)
    if(result.length===0){
        return false;
    }else{
        return true;
    }
}
let x=findCard(5, 'heart')
console.log(x)

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * * example
 * * findCard(5, 'heart') should return false
 * * findCard(10, 'club') should return true * * * */




// 2. write a function which returns the list of available suits in the above data
// ans => ["heart", "club", "diamond"] 
 const list=cardData.map((item)=>item.suit)
 console.log(list)
 const uniqueList= list.filter((item,index)=>list.indexOf(item)===index)
 console.log(uniqueList)


//3. write a function which returns an object with the suits as its key and its total count as its value
 // ans => {  heart:1, *    club:3, *    diamond:2, * } *




{function prob4(){
    let tempObj ={}
    for (const item of cardData) 
    {
        console.log(item) // just for my understanding
        tempObj[item.suit] =tempObj[item.suit]?tempObj[item.suit]+ 1:1
        console.log(tempObj)
    }
}
    console.log(prob4())
}



//  4. write a function which returns an object with the suits as its key and its available values as value
//  ans =>{ *    heart:[7], *    club:[8,2,10], *    diamond:[2,5], * } 




    {
        let outputObj ={}
        console.log("\nProgram -4\n")
        for (const item of cardData) {
            console.log(item)
            let suit=item.suit
            let value=item.value
            outputObj[suit] = outputObj[suit]?[...outputObj[suit],value]:[value]  
        }
        console.log(outputObj)
    }   
