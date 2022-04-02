//what I learn during completing assignbmnet

//how to use dynamic key objects

//item.[property] is wrong
//item[property] - . nahi ayega jab dynamic value use karete he tabds

const a = [1, 2, 5, 6];
const b = { name: "darshit", age: "21" };
for (item in a) {
  console.log(item); //will print all item
}

console.log("\nfor in");
for (i in a) {
  console.log(i); //will print index of item
}

console.log("\nforEach");
a.forEach((item) => console.log(item));

{
  console.log("\ndoes object include this key or not");
  let x = b.hasOwnProperty("name");
  console.log(x);
}

{
  console.log("\nskipping item in array");
  const a = [10, 20, 72, 52, 16];
  const [first, , , , fifth] = a; //jtini item skip karna ho utne koma add karna he
  console.log(first, fifth);
}

{
  console.log("\nPlay with object");
  const obj = [{ name: "darshit", age: "21", city: "surat" },{ name: "fasdf", age: "asdf", city: "adsfadsf" }];

  function compareKey(property) {
    let grabkey = Object.keys(obj);
    for(item of grabkey){
      if (item === property) {
        return true;
      }
    }
    return false;
  }
  console.log(compareKey("city"))
}


// {
//   const fp =  [ {likes: ["music", "movies"]},{likes: ["nice", "best"]}]
//   console.log(fp[0].likes)
//   console.log(fp[1].likes)
//   const[{fp[0].like}] = fp
//   console.log(...likes)
// }
{
  console.log("\ndest")
  let a,b;
  [a,b]=[34,69]
  console.log(a,b)
}