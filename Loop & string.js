
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
// console.log(str.substring(2));
// console.log(str.substring(2,4));




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
let sentence = "aap\\ bas\\ saath \\dijiye";
let words = sentence.split('\\');
console.log(words);
// console.log(words.join(' , '));

console.log(words.join('-'));

^`
`
