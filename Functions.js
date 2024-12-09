// Function definition
/************** function without parameter */
// function sayMyName() {
//     console.log("laxmi Kumari")
// }
// sayMyName();

// function fullname(){
//     console.log("gupta");
    
// }
// fullname()
//function use - function call
// sayMyName(); // laxmi kumari



/************** function with loop */
// function printcounting(){
    // for(let i=1; i<=20; i++) {
        // console.log(i);
        // }
// }

// printcounting();

/************************2nd***************/
// function printing(){
//     for(let i=1; i<=5; i++ ) {
//         console.log(i);
        
//     }
//     }

// printing();


/******************** 3rd ( function with single parameters ) */

// function PrintNumber(num){
    // console.log( "Printing Number:" ,num);
//   }
// PrintNumber(5);
/****************** (num) = parameters and (5) = arguments */

// function printnumber(number){
//     console.log("print Number:" ,number);
    
// }

// printnumber(5)



/****************** 4th ( function with multiparameters) */

// function getAverage(num1,num2){
//     let avg = (num1 + num2)/2
//     console.log("Average:" ,avg);
    // }
// getAverage(3,70)

// function getAverage(num1,num2){
//     let avg = (num1+num2)/3
//     console.log("getAverage:" ,avg);
    
// }
// getAverage(3,70)

/********************* Return Function */
// function getsum(a,b,c) {
//     let sum = a + b + c;
//     return sum;
// }
// let ans = getsum(1,2,3);
// console.log(" getsum:", ans);

// function sum(a,b,c) {
//     let sum = a+b+c;
//     return sum;
// }
// let ans = sum(1,2,3);
// console.log("sum:", ans); // 6



//****** 2nd */

// function getMyName(firstName, lastName){
// let fullName = firstName +  " "  + lastName;
// return fullName;
// }
// let fullName = getMyName("Laxmi", "Kumari");
// console.log("fullName: ", fullName);


//**************** function with number  */
// function getMyName(firstName, lastName){
//     let fullName = firstName +  " "  + lastName;
//     return fullName;
//     }
//     let fullName = getMyName("Laxmi", "7");
//     console.log("fullName: ", fullName);
    

// function getname(firstname, lastnumber){
//     let fullname = firstname + "" + lastnumber;
//     return fullname;
// }
//  let fullname = getname(9 , "laxmi");
//  console.log("fullname:" ,fullname);    //9laxmi
 


//******************** function with integers */

// function getMyName(firstName, lastName){
//     let fullname = firstName  + "  " + lastName;
//     return fullname;
// }

// let fullname = getMyName("7","7");
// console.log("fullname:", fullname); // 7 7

// function getmysum(firstName, lastName){
//     let sum = firstName + lastName;
//     return sum;

// }

// let sum = getmysum(5, 6);
// console.log("getmysum:" ,sum); // 6




//****************** function declaration */

// function Solvexyz(is called declaration){
//     is called define
// }

// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("John")); // Output: Hello, John!

let squarenumber = function(num){
    let ans = num**2;
    return ans;
}
let ans = squarenumber(5);
console.log(ans); //25







//*********************************** function expression */

// const greet = function(name) {
//     return `Hello, ${name}!`;
// };
// console.log(greet("John")); // Output: Hello, John!







//***************************** Arrow function */

// const greet = (name) => {
//     return `Hello, ${name}!`;
// };
// console.log(greet("John")); // Output: Hello, John!

let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}
console.log(getExp(2,5)); //32



//******************** callback function */

// function fetchData(callback) {
//     // Simulated asynchronous operation
//     setTimeout(() => {
//         const data = "Data fetched successfully";
//         callback(data);
//     }, 2000);
// }

// function processData(data) {
//     console.log(`Processing data: ${data}`);
// }

// fetchData(processData); // Output: Processing data: Data fetched successfully

// function sumOfSquaresOfOddNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum += arr[i] * arr[i];
//         }
//     }
//     return sum;
// }
