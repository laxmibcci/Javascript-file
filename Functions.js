// Function definition
/************** function without parameter */
// function sayMyName() {
//     console.log("laxmi Kumari")
// }

//function use - function call
// sayMyName();



/************** function with loop */
// function printcounting(){
    // for(let i=1; i<=20; i++) {
        // console.log(i);
        // }
// }

// printcounting();


/******************** 3rd ( function with single parameters ) */

// function PrintNumber(num){
    // console.log( "Printing Number:" ,num);
//   }
// PrintNumber(5);
/****************** (num) = parameters and (5) = arguments */





/****************** 4th ( function with multiparameters) */

// function getAverage(num1,num2){
//     let avg = (num1 + num2)/2
//     console.log("Average:" ,avg);
    // }
// getAverage(3,70)

/********************* Return Function */
// function getsum(a,b,c) {
//     let sum = a + b + c;
//     return sum;
// }
// let ans = getsum(1,2,3);
// console.log(" getsum:", ans);


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
    


//******************** function with integers */

// function getMyName(firstName, lastName){
//     let fullname = firstName  + "  " + lastName;
//     return fullname;
// }

// let fullname = getMyName("7","7");
// console.log("fullname:", fullname);



//****************** function declaration */

// function Solvexyz(is called declaration){
//     is called define
// }

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // Output: Hello, John!





//*********************************** function expression */

const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("John")); // Output: Hello, John!





//***************************** Arrow function */

const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("John")); // Output: Hello, John!


//******************** callback function */

function fetchData(callback) {
    // Simulated asynchronous operation
    setTimeout(() => {
        const data = "Data fetched successfully";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log(`Processing data: ${data}`);
}

fetchData(processData); // Output: Processing data: Data fetched successfully

function sumOfSquaresOfOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i] * arr[i];
        }
    }
    return sum;
}
