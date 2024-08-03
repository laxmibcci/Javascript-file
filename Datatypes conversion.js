// let score = 33
// console.log(score);     // 33
// console.log(typeof score);     // number

// let score = "33"
// console.log(score);     // 33
// console.log(typeof score);       // string


// change of datatypes

//** about string */
// let score = "33"    // string
// let valueInNumber = Number(score) // that's change
// console.log(typeof valueInNumber);    // convert to number
  
 
//** about digit with  */
// let score = "33abc"    
// console.log(typeof score); // string
// console.log(score); // 33abc


// let valueInNumber = Number(score) // that's change
// console.log(typeof valueInNumber);    // convert to number
// console.log(valueInNumber);  // Nan => not a number



//** about null */
// let score = null   
// console.log(typeof score); // object 
// console.log(score); //null

// let valueInNumber = Number(score) // that's change
// console.log(typeof valueInNumber);    // convert to number
// console.log(valueInNumber);  // 0





//** about undefined */
// let score = undefined   // 
// console.log(typeof score); // undefined
// console.log(score);

// let valueInNumber = Number(score) // that's change
// console.log(typeof valueInNumber);    // convert to number
// console.log(valueInNumber);  // Nan => not a number





//** about boolean */
// let score = true  // 
// console.log(typeof score); // boolean
// console.log(score); // true

// let valueInNumber = Number(score) // that's change
// console.log(typeof valueInNumber);    // convert to number
// console.log(valueInNumber);  // 1



// let score = false  // 
// console.log(typeof score); // boolean
// console.log(score); // false

// let valueInNumber = Number(score) // that's change
// console.log(typeof valueInNumber);    // convert to number
// console.log(valueInNumber);  // 0




//** about "name" */

// let score = "laxmi"  // 
// console.log(typeof score); // string
// console.log(score); // laxmi

// let valueInNumber = Number(score) // that's change
// console.log(typeof valueInNumber);    // convert to number
// console.log(valueInNumber);  // NaN



//** convert rem. */

// "33" => 33
// "33abc" => Nan
// true => 1, false =>0


//** convert to 1 to true */
// let isLoggedIn = 1
// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

//1 => true, 0 => false
//"" => false,  "laxmi" => true


//** about convert number to string */
// let somenub = 33
//*console.log(somenub);
// console.log(typeof somenub);

// let Stringnumber = String(somenub)
// console.log(Stringnumber);
// console.log(typeof Stringnumber);*//


//*******************************************---  OPERATIONS ---***********************************************


// let value = 3
// let negvalue = -value
// console.log(negvalue) // -3


// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8( 2*2*2)
// console.log(2/3); // 0.6
// console.log(2%3); // 2

// let str1 = "laxmi"
// let str2 = "kumari"

// let str3 = str1 + str2
// console.log(str3); // laxmi kuamri

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); //12
//** string first then treat string */
// console.log("1" + 2 + 3); //123
//** last string then first calculation */
// console.log(1 + 2 + "3"); //33
  
// console.log((2*3) + 4 % 2); // 6
// console.log(2 + 2); // 4
// console.log(+true); // 1
// console.log(-true); // -1
 

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

let gamecounter = 100
gamecounter++; (increamnet)
console.log(gamecounter); // 101


let gamecount = 100
gamecount--; 
console.log(gamecount);



//** postfix increament */
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

//** 2nd */
// let x = 3;
// const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n




//** prefix increament  */
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n


















