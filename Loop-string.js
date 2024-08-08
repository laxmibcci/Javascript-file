
//** for loop start **/


//** use for counting & Increament **/

// for (i=1 ; i<=5 ; i++)
// {
//     console.log(i)
// }

// for(let i=1 ; i<=10 ; i++)
// {
//     console.log(i)
// }

// for(let i=5 ; i<=50 ; i=i+5)
// {
//     console.log(i)
// }

// for(i=23 ; i<=23*14 ; i=i+23 )
// {
//     console.log(i);
// }



//** use of break  **/

// for ( i=1 ; i<=6 ; i++){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }


// for(let i=2 ; i<=8; i++){
//     if(i==6){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }



//** use of Reverse counting & Decrement **/

// for (i=5 ; i>=0; i--)
//     console.log(i)


//** use for name repeat */

// for (i=1 ; i<=10 ; i++)
//     console.log("laxmi");




//** use of continue **/

// for (let i=1; i<=4; i++ ){
//     if(i==3)
//         continue;
//     else
//     console.log(i);
// }


//** without using those three confitions( initialization, condition, updation ) inside the loop body **/

// let i=1
// for( ; ; )
// {
//     console.log(i);
//     i++;
//     if(i>10)
//         break;
// }



//** while loop **/

//** counting **/

// let  i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//** Reverse Counting **/

// let  i = 5;
// while(i>0) {
//     console.log(i);
//     i--;
// }

//** Repeat of name */

// let i = 1;
// while(i<=10) {
//     console.log("laxmi");
//     i++;
// }

//** ..... **/

// let i = 1;
// while(i<10) {
//     console.log(i);
//     i++;
// }

// let i = 10;
// while(i>=1) {
//     console.log(i);
//     i--;
// }

// let i = 1;
// while(i<=5){
//     console.log("Laxmi");
//     i++
// }



//** Break **/

// let i = 1;
// while (i <= 5) {
//     if (i == 4)
        
//     break;
//     else
//     console.log(i)
//     i++;

// }


//** continue **/

//** 1st rule **/
// let i = 1;
// while(i<=5)
// {
//   if(i == 4)
//     continue;
// else
// console.log("hello") 
// i++
// }


//** 2nd rule **/
// let i = 1;
// while(i<5) {
//     console.log("inside the loop");
//     if(i==3) {
//         i++;
//         continue;
//     }
//      else
//     console.log(i);
//      i++;
//    }


//** use of do-while **/

//** counting **/
// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while(i<10);


//** Reverse counting **/
// let i = 5;
// do{
//     console.log(i);
//     i--;
// } while(i>=0);


//** repeat of name **/
// let i = 1;
// do{
//     console.log("Laxmi");
//     i++;

// }while(i<=10);







//** three types of Strings  **/

//** use of Double-Quotes("") */
let firststring = "Laxmi";
// console.log(typeof(firststring));
// console.log(firststring);



//** use of  Single-Quotes **/

// let secondstring = 'Laxmi'
// console.log(typeof(secondstring));
// console.log(secondstring);

//** use of Template literals or backticks(``)  **/
// let thirdstring = `Laxmi 
// kumari
// gupta
// l.c.h 
// putki
// dhanbad`
// console.log(typeof(thirdstring));
// console.log(thirdstring);



//** string in the form of object */
// let firstname = new String("laxmi kumari");
// console.log(firstname);

  


//** concatenating Strings  */
let op1 = 'English ';
let op2 = 'Hindi ';


//** using '+' operator */
// let ans = op1 + op2;
// console.log(ans);


//** using template literals */
// let finalans = `${op1}${op2}`;
// console.log(finalans)

//** comma ko letter se dur karne se letter dur dur likhata hai **/

// let finalans = op1 + "and " + op2 + "!" ;
// console.log(finalans);



//** Length method on strings **/

// let message = "hello coders";

// let messageLength = message.length;
// console.log( type of (messageLength));


// let of1 = 'english';
// let of2 = 'hindi';
// console.log(of2.length);



//** uppercase and lowercase method on strings */
// let of1 = 'english';
// let of2 = 'HINDI';
// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());




//** Substring method on strings **/
//** last no. count nhi karta h */
// let str = "Babbar";
// console.log(str.substring(2));//b
// console.log(str.substring(2,4));//bb




//** split method on strings **/
//** words ko break karne ke liye koi bhi use karna **/
// let sentence = "aap bas saath dijiye";
// let words = sentence.split(' ');
// console.log(words);


// let sentence = "aap bas \"saath\" dijiye";
// console.log(sentence)


// let sentence = "aap\\ bas\\ saath \\dijiye";
// let words = sentence.split('\\');
// console.log(words);




//** join method on strings **/ 
// let sentence = "aap\\ bas\\ saath \\dijiye";
// let words = sentence.split('\\');
// console.log(words);
// console.log(words.join(' , '));

// console.log(words.join('-'));



// +++++++++++++++++++++++++++++++++++++++++++++++++++ about string ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const name = "Laxmi"
// const repocount = 50

// console.log(name + repocount + "defination"); // not correct use






// always use of backticks(``)

// console.log(`hello my name is ${name} and my repo count is ${repocount}`);
/** 2nd exam. */
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."






const gameName = new String('laxmigupta')

// console.log(gameName[0]) // L


// console.log(gameName.__proto__); // {}





//****** use of touppercase & tolowercase *******/
// console.log(gameName.toUpperCase()); // LAXMIGUPTA
// console.log(gameName.toLowerCase()); //laxmigupta



//**** use of length ******/
// console.log(gameName.length); // 10







//know which no.of character
//********* use of charAt */
// console.log(gameName.charAt(3)); //m
/**  2nd exam.*/
const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`); //B
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`); //B
console.log(`The character at index 1   is '${anyString.charAt(1)}'`); //r
console.log(`The character at index 2   is '${anyString.charAt(2)}'`); //a
console.log(`The character at index 3   is '${anyString.charAt(3)}'`); //v
console.log(`The character at index 4   is '${anyString.charAt(4)}'`); //e
console.log(`The character at index 999 is '${anyString.charAt(999)}'`); //''






// know which Character of Number
//******** use of indexof  *******/
// console.log(gameName.indexOf('m')); //3

/** 2nd exam. */
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6






//****** use of substring  ******/

// const newString = gameName.substring(2,4)
// console.log(newString); //Xm
/** 2nd exm. */
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""








// ****** use of slice ******//
const anotherString = gameName.slice(-9, 4)
console.log(anotherString); //ulta se 9 se 3 = laxmigupta=9876543210=9 ko chor kar 8 liya or 4 ko chor kar 3 liya//axm
/** 2nd */
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"







//****** */ use of trim *******//
const nerstringone = " Laxmi "
console.log(nerstringone); //         Laxmi
console.log(nerstringone.trim()); //Laxmi
/** 2nd exam. */
const str = "   foo  ";
console.log(str.trim()); // 'foo'









//****** */ use of  replace  ******//

const  url = "https://Laxmi.com/Laxmi%20gupta"

console.log(url.replace('%20', '-')) // https://Laxmi.com/Laxmi-gupta

/** 2nd exam. */
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"








 //****** use includes for available */
console.log(url.includes('Laxmi')); // true
console.log(url.includes('kumari')); //false

/** 2nd example */
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false








