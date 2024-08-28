// const AccountId = 43345
// let AccountEmail = "laxmikumari@gmail.com"
// var Accountpassword = "57646546"
// Accountcity = "Ranchi"
  

/* undefined */
// let accountstate;

// console.log(AccountId);

//** const ka value change nhi hoga ** AccountId = 2223 not allowed **//
// AccountId = 2223

// ye sabhi second time dusra value daalne par change ho jata hai

// AccountEmail = "pujakumari@gmail.com"
// Accountpassword = "44556677"

/* not use */
// Accountcity = "dhanbad"
// console.table([AccountId, AccountEmail, Accountpassword, Accountcity, accountstate])

/*
prefer not to use var 
because of issue in block scope and functional scope
*/




//************************************** Variable Rules ***********************/

// 1.  Variable names are case sensitive; "a" & "A" is different.

// name = "Akshay"
// console.log(name); // Akshay

// Name = "kajal"
// console.log(Name); // kajal



// 2. only letters, digits, underscore(_) and $ is allowed. (not even space)

// letters = "a"
// console.log(letters); // a


// digits = 123
// console.log(digits); // 123
   

// underscore_ = "under"
// console.log(underscore_); // under

// dollar$ = "Dollar"
// console.log(dollar$); // Dollar



// 3. only a letter, underscore(_) or $ should be 1st character.

// 123name = "laxmi"
// console.log(123name); // not allowed

// _underscore = "under"
// console.log(_underscore);// under


// 4. Reserved words cannot be variable names.
// Reserved names means console 

// console = "laxmi"
// console.log(console); // not use

// Console = "laxmi"
// console.log(Console); // laxmi 




//******************************* let, const & var */
// 1. var : Variable can be re-declared & updates. A global scope Variable.
// var name = "puja"
//  var name = "kajal"
//  var name = "laxmi"
// console.log(name); // laxmi






// 2. let : variable cannot be re-declared but can be updated. A block scope variable.

// let fullname = "puja" // not use let again
// fullname = "kajal"
// fullname = "laxmi"
// console.log(fullname); // laxmi

// { let address = "putki"
    // console.log(address); //putki
// }

// {
    // let address = "ranchi"
    // console.log(address); //ranchi // curly bracket ke andar let,const likhne se value alag alag maani jayegi. so you can use it simply.
// }







// 3. const : varibale cannot be re-declared or update. A block scope variable.
// const me objects ki key ko change kar skte hai


// const fullName = "puja" // not use const repeat
// console.log(fullName); // puja


// const student = {
//     fullname : "lamxi kumari",
//     address : "ranchi",
//     age : 22,
//     cgpa : 7.8,
// };

// console.log(student);


// change of student objects

// student["age"] = student["age"] + 1





//***************************** operator */

//****************** arithmetic operator */
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

let a = 5;
let b = 2;

console.log("a = ", a, " & b = ", b);  // a = 5 & b = 2

//*********** pre increament */
// console.log("++a = ", ++a); // ++a = 6
// console.log("a =", a); // a = 6

//*********** post increament */
// console.log("a++ = ", a++); // a++ = 5
// console.log("a =", a);    // a = 6


//************** pre decreament */
// console.log("--a = ", --a); // --a = 4
// console.log("a = ", a);     //  a = 4



//*************** post increament */
console.log("a-- = ", a--); // a-- = 5
console.log("a =", a);     // a =4


//*********************** Assignment operators ***********************/
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


