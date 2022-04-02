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


/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * * example
 * * findCard(5, 'heart') should return false
 * * findCard(10, 'club') should return true * * * */
console.log("---------- Problem 1 ----------")


 function findCard(value, suit) { //takes 2 parameters value and suit
    if(typeof value !== "number" && typeof suit !== "string"){ //check if value and suit are of type number and string
        console.log("Given input is wrong.");
        return;
    }
    else{
        for (let i = 0; i < cardData.length; i++){ //loop through cardData array
            if(value === (cardData[i].value) && suit === (cardData[i].suit)){ //check if value and suit matches with cardData array
                return "True";
            }else {
                return "False"
            }
        }
    }
    
    
}

console.log(findCard(6, 'heart')); //True


console.log("\n")
/** * 2. write a function which returns the list of available suits in the above data
 * * ans => ["heart", "club", "diamond"] */
 console.log("---------- Problem 2 ----------")

 
let allSuits = [];
function allSuit(){
    for(let i = 0; i < cardData.length; i++){ //loop through cardData array
        let temp = cardData[i].suit; //get the suit of each card
        allSuits.push(temp) //push the suit into allSuits array
    }
    return;
}
allSuit();
let removedDuplicate = allSuits.filter((item, index) => allSuits.indexOf(item) === index); //remove duplicates
console.log(removedDuplicate);


console.log("\n")
 /* * 3. write a function which returns an object with the suits as its key and its total count as its value
 * * ans => *
 * {  heart:1, *    club:3, *    diamond:2, * } */
 console.log("---------- Problem 3 ----------")


function suitCount(){
    let getSuit = cardData.map(object => object.suit); //get the suit of each card
    let removeDuplicate = getSuit.filter((item, index) => getSuit.indexOf(item) === index); //remove duplicates

    let countHeart = 0;
    let countClub = 0;
    let countDiamond = 0;
    let myObjectKeyVal = new Object();

    for(let i = 0; i < cardData.length; i++){
        if(cardData[i].suit === "heart"){ //check if the suit is heart
            countHeart++ //increment countHeart
            myObjectKeyVal[cardData[i].suit] = countHeart; //add the countHeart to the object
        }else if(cardData[i].suit === "club"){
            countClub++
            myObjectKeyVal[cardData[i].suit] = countClub;
        }else if(cardData[i].suit === "diamond"){
            countDiamond++;
            myObjectKeyVal[cardData[i].suit] = countDiamond;
        }
    }
    return myObjectKeyVal; //return the object
}
 console.log(suitCount());


 console.log("\n")
 /* * 4. write a function which returns an object with the suits as its key and its available values as value
 * * ans =>
 * * { *    heart:[7], *    club:[8,2,10], *    diamond:[2,5], * } *  */
 console.log("---------- Problem 4 ----------")


function getObjectValues(){
    let getSuits = cardData.map(object => object.suit); //get the suit of each card
    let removeDuplicates = getSuits.filter((item, index) => getSuits.indexOf(item) === index); //remove duplicates

    let heartData = cardData.filter(item => item.suit === "heart").map(items => items.value); //get the value of each card if the suit is heart
    let clubData = cardData.filter(item => item.suit === "club").map(items => items.value); //get the value of each card if the suit is club
    let diamondData = cardData.filter(item => item.suit === "diamond").map(items => items.value); //get the value of each card if the suit is diamond

    let newObject = new Object();
    for(let i = 0; i < removeDuplicates.length; i++){ //loop through removeDuplicates array
        if(removeDuplicates[i] === "heart"){ //check if the suit is heart
            newObject[removeDuplicates[i]] = heartData; //add the value of heart to the object
        }
        else if(removeDuplicates[i] === "club"){
            newObject[removeDuplicates[i]] = clubData;
        }
        else if(removeDuplicates[i] === "diamond"){
            newObject[removeDuplicates[i]] = diamondData;
        }
    }
    return newObject;
}
;
console.log(getObjectValues());
