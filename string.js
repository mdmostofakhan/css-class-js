const fullName = {
    name: "mostofa",
    lastName: "khan",
   sleep: function(){
    // console.log('new Items')
   }
}

// console.log(fullName.lastName)

const s = "hello guys"
// console.log(s.length)

const products = "hello fruits mango banana"
const productsName = products.slice(6, 13)
// console.log(productsName)


const fruits = "hello fruits mango banana"
const fruitString = products.substring(6, 19)
// console.log(fruitString)

// name changes korar niom replace;

let nameChanges = "Mostofa, Tania, Morsalim"
let names = nameChanges.replace("Mostofa", "Omor")
// console.log(names)

// topUppercase use korar niom 

let text = "hello world"
let text2 = text.toUpperCase()
// console.log(text2);


let second = "HELLO WORLD"
let lowercase = text.toLowerCase()
// console.log(lowercase);

// methed use system 

let text1 = "Hello" ;
let text3 = "world"
 let text4 = text3.concat(" ", text1)
//  console.log(text4)

let num = '5'
 const result = num.padStart(-6, 1)
// console.log(result)


let number = "Hello world";
// console.log(typeof number.charAt(500))
// console.log(typeof number[500])

// split holo ekta array 

let spl = "hello mostofa"
let spl2 = spl.split(" 0 ")
// console.log(spl2)


// indexof the  check

const array = "new, tiptop, mostofa, khan, items"
const hello = array.indexOf("mostofa")
// console.log(hello)

const next = "new, tiptop,  tiptop,  mostofa, khan, items"
const nextTo = array.lastIndexOf("items")
// console.log(nextTo)


let text5 = "Please new why locates where 'locate' occurs!";
const text6 = text5.search("where");
// console.log(text6)



let world = "Please new why locates where 'locate' occurs!";
const worldNew = text5.includes("new", 15);
// console.log(worldNew)

// match search string 
let textString = "The rain in spain ataye mainly in the plain"
let textStringRun = textString.match(/spain/g)
// console.log(textStringRun)

let textIncludes = "Hello world, welcome to the universe.";
// let includesText = textIncludes.includes("the",);
let includesText = textIncludes.includes("welcome", 21);
console.log(includesText)


