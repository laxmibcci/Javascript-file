// console.log("laxmi")


//******************************** Arithmetic operator *****************************//

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b); // a = 5 & b = 2

// console.log("a + b = ", a + b);    // a + b = 7
// console.log("a - b = ", a - b);    // a - b = 3
// console.log("a * b = ", a * b);    // a * b = 10
// console.log("a / b = ", a / b);    // a / b = 2.5
// console.log("a % b = ", a % b);    // a % b = 1
// console.log("a ** b = ", a ** b);  // a ** b = 25

// console.log(a+b);

// console.log(a-b);

// console.log(a*b);

// console.log(a/b);

// console.log(a%b);

// console.log(a**b);


//*********************************** Unary Operator ******************************/

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);  // a = 5 & b = 2

//*********** pre increament */
// console.log("++a = ", ++a); // ++a = 6
// console.log("a =", a); // a = 6

//*********** post increament */
// console.log("a++ = ", a++); // a++ = 5
// console.log("a =", a);    // a = 6


//************** pre decreament */
// console.log("--a = ", --a); // --a = 4
// console.log("a = ", a);     //  a = 4



//*************** post decreament */
// console.log("a-- = ", a--); // a-- = 5
// console.log("a =", a);     // a =4



 //** Assignment & comparison operator  **//

// let a = 2;
// let b = 5;
// a = a +10;
// a +=10;
// console.log(a);

// a = a -2;
// a -=2;
// console.log(a);

// console.log(5>=5)

// console.log('5' == 5); // true
// console.log('5' === 5); //false
// console.log(5 === 5); //true


// console.log('5' != 3); //true

// console.log('5' !== 3);  //true
// console.log(5 !== '3');  /true

//*********************** 2. Assignment operators ***********************/
// let a = 5;
// let b =2;
// a += 4 // a = a+4
// console.log("a = ", a); // a =9

// let a = 5;
// let b =2;
// a -= 4 // a = a-4
// console.log("a = ", a); // a = 1

// let a = 5;
// let b =2;
// a *= 4 // a = a*4
// console.log("a = ", a); // a =20


// let a = 20;
// let b =2;
// a /= 4 // a = a/4 
// console.log("a = ", a);  // a = 5


// let a = 10;
// let b =2;
// a %= 4 // a = a%4
// console.log("a = ", a);  // a =2 

// let a = 5;
// let b =2;
// a **= 4 // a = a**4
// console.log("a = ", a); // a = 625


//********************* comparison operators ******************/
 //******* equal to value */
// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b); // false

// let a = 5;
// let b = 5;
// console.log("5 == 5", a == b); // True

// let a = "5";
// let b = 5;
// console.log(""5" == 5", a == b); // true // datatypes is not compulsory for same but value is always same


//********** equal value and equal type */
// let a = 5;
// let b = 2;
// console.log("5 === 2", a === b); // false 

//  let a = 5;
//  let b = 5;
//  console.log("5 === 5", a === b);  // true

// let a = "5";
// let b = 5;
// console.log("a === b", a === b);  // false // datatypes and value is compulsory same


//*********** not equal */
// let a = 5;
// let b = 5;
// console.log("5 != 5", a !=b);  // false


// let a = 5;
// let b = 2;
// console.log("5 != 2", a !=b);  // true

// let a = "5";
// let b = 5;
// console.log("a != b", a != b); // false


//********** not eaual value or not equal datatypes */

// let a = 5;
// let b = 5;
// console.log("5 !== 5", a !== b); // false

// let a = 5;
// let b = 2;
// console.log("5 !== 2", a !== b); // true

// let a = "5";
// let b = 5;
// console.log("a !== b", a !== b); // true
 
//******* greater than *****/
// let a = 7;
// let b = 5;
// console.log("a > b", a > b); // true

//******** less than ******/
// let a = 7;
// let b = 5;
// console.log("a < b", a < b); // false


//***** greater than or equal to *****/
// let a = 7;
// let b = 5;
// console.log("a >= b", a >= b); //  true

// let a = 5;
// let b = 5;
// console.log("a >= b", a >= b); //  true



//****** less than or equal to  */
// let a = 7;
// let b = 5;
// console.log("a <= b", a <= b); // false

// let a = 5;
// let b = 5;
// console.log("a <= b", a <= b);  //true

//*************** logical operator **********/

// logical AND (all true will be true otherwise false)
// let a = 6;
// let b = 5;
// let cond1 = a > b; //true
// let cond2 = a === 6; // true
// console.log("cond1 && cond2", cond1 && cond2); // true


// let a = 6;
// let b = 5;
// let cond1 = a > b; //true
// let cond2 = a === 5; // true
// console.log("cond1 && cond2", a > b && a === 5); // false




//logical or ||(all false will be false otherwise true)
// let a = 6;
// let b = 5;
// console.log("cond1 || cond2", a > b || a === 5); // true

// let a = 6;
// let b = 5;
// console.log("cond1 || cond2", a > b || a === 6); // true

// let a = 6;
// let b = 5;
// console.log("cond1 || cond2", a < b || a === 5); // false


// **** !(not) *****(true = false, false = true)

// let a = 6;
// let b = 5;
// console.log( !(a === 6)); // false 

// let a = 6;
// let b = 5;
// console.log(!(a < 5)); // true






//**Ternary operator **//

// let age = 25;
// let status1 = (age > 18) ? 'I can vote' : 'I cannot vote';

// console.log(status1);




//** Logical operator **//

// let ans = (true && true && true);
// console.log(ans);

// let ans = (true && true && false);
// console.log(ans);


// let ans = (true || false || false);
// console.log(ans);

// let ans = (false ||false|| false);
// console.log(ans);

// let ans = !(true);
// console.log(ans)

// let ans = !(false);
// console.log(ans);

// console.log(false||'babbar');
// console.log(false||7||11||18);



//** Bitwise operator **//
// console.log(0&1);
// console.log(1 & 1);
// console.log(1|0);
// console.log(~1);
// console.log(2^2);




//** conditional **//
// let age = 30;
// if (age >=18) {
//     console.log('can vote');
// }
// else{
//     console.log('cannot vote');
// }


// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color);


// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color);

// let age = "16";
// if(age >= 18){
//    console.log("you can't vote"); 
// }
// if(age < 18){
//    console.log("you can vote"); 
// }

// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color); // black


// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color); //white



// let age = "16";
// if(age >= 18){
//    console.log("you can't vote"); 
// }
// if(age < 18){
//    console.log("you can vote");  // you can vote
// }


// let mode = "blue";
// let color;
// if(mode === "dark"){
//     color = "black";
//     } else {
//         color = "white";
//     }
//  console.log(color); //white


// let age = "16";
// if(age >= 18){
//     console.log("you can't vote");
// } 
// if(age < 10){
//     console.log("you can vote");
// }
// else {
//     console.log(" vote"); // vote
// }

// let num = 10;
// if(num%2 === 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd"); // 10 is even
// }

// let num = 5;
// if(num%2 === 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd"); // 5 is odd
// }


// let age = 50;
// if(age < 18){
//     console.log("junior");
// }  else if (age > 30){
//     console.log("senior");
// } else{
//     console.log("middle"); // senior
// }


// let mode = "blue";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else if (mode === "light"){
//     color = "white";
// } else if(mode === "blue"){
//     color = "blue";
// } else{
//     color = "pink";
// }
// console.log(color); // blue






// let number = 5;
// if (number ==1 ) {
//     console.log('A');
// }
// if (number ==2 ) {
//     console.log('B');
// }
// if (number ==3 ) {
//     console.log('C');
// }

// if (number ==4 ) {
//     console.log('D');
// }

// if (number ==5 ) {
//     console.log('E');
// }

// else{
//     console.log('F');
// }


/****************************************** Ternary Operators *********************/
// conditions ? true output : false output
// let age = 20;
//  let result = age > 18 ? "adult":"not adult"
//  console.log(result);



 //********************** switch ************/
//  const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const message = "hello";
//     console.log(message);
//     break;
//   case "say_hi":
//     const messages = "hi";
//     console.log(messages);
//     break;
//   default:
//     console.log("Empty action received.");
// }

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }




// const fruit = "apple";
// switch (fruit) {
//     case "banana":
//     console.log("banana is  also include veg.");
//     break;
//      case "apple":
//     console.log("apple is fruit.");
//     break;
//     default:
//         console.log("sorry, we are out of ${fruit}.");
// }
 

//*********************************practise 1 ***********//

// alert("hello moto"); // one time

// let name = prompt("how are you");
// console.log(name); // many times



// let num = prompt("enter a number:");
// if(num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else{
//     console.log(num, "is NOT multiple of 5");
// }

//************************* practice 2 *************//
let score = prompt("enter ypur score (0-100):");
let grade;
if(score >= 80 && score <= 100){
    grade = "A";
} else if (score >= 70 && score <= 89){
    grade = "B";
} else if (score >= 60 && score <= 69){
    grade = "C";
} else if(score >= 50 && score <= 59){
    grade = "D";
} else if (score >= 0 && score <= 49){
    grade= "fail"; 
} 

console.log("according to your score, your grade was:", grade);









//** switch number **//

// let num =3;
// switch(num) {
//     case 1 : console.log('A');
//     break;
//     case 2 : console.log('B');
//     break;
//     case 3 : console.log('C');
//     break;
//     case 4 : console.log('D');
//     break;
//     default : console.log('F');
// }



// let fullname = "laxmi"
// console.log(fullname);


// let a = 5;
// let b = 2;


// console.log([0] == ");

    // console.log(["] == ");

