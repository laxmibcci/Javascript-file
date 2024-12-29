// let obj = {
//     "name":"laxmi",
//     age: 23,
//     weight: 45,
//     height:"5th 1in",
//     greet:function(){
//        console.log("I am feeling good now");
// } 
// };

// console.log(obj);
// obj.greet();

// console.log(typeof (obj));

// let obj2 = obj;

 

///////...........array start..............///////
// creation of arrays.........//
// let arr = [1,2,3,4,5,6];

////.........array construction.......///
// let brr = new Array("my love",2,true);
// console.log(brr[0]);
// console.log(brr[2]);


// console.log(brr,arr);

// console.log(typeof (arr));
// console.log(typeof (new Array));


//...........built-in method........//
// let brr = new Array("my love",2,true);
// brr.push('laxmi');   // ['my love' ,2, true, 'laxmi']
// brr.pop();             // ['my love',2,true] 
// brr.shift();           //  [2, true]
// brr.unshift('my love')           // ['my love',2,true]
// brr.push(20);
// brr.push(40);
// brr.push(70);     // ['my love',2,true,20,40,70]

// console.log(brr.slice(2,4));   [true, 20]
// console.log(brr);      //    ['my love',2,true,20,40,70]

// brr.splice(1,2,'kumari')
// console.log(brr);

// **************************map method ***********************//


// let arr = [10,20,30];
// let ansArray = arr.map((number) => {
//     return number*number   // [100,200,300]
// })

// console.log(ansArray); 

// let arr = [10,20,30];
// arr.map((number) => {
//     console.log(number+1);   // [11,21,31]
    // })

// let  arr  = [2,5,3];
// arr.map((number,index) => {
//     console.log(number*number);
//     console.log(index); //[4,25,9]
    // })



// let arr = [5,10,15];
// let ans=arr.map((number) => {
//     return number*number;
// })
//  console.log(ans);   //[25,100,225]
//  arr.map((number) => {
//     console.log(number*2);  //[10,20,30]
// })

//************************************* filter method *****************************/


// let arr = [10,20,30,11,21,44,51];
// let evenarray = arr.filter((number) => {
//     if(number%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(evenarray);  //[10,20,30,44]


// let arr = [10,20,30,11,21,44,51];
// let evenarray = arr.filter((number) => {
//     return number%2 === 0;
// });

// console.log(evenarray);  // [10,20,30,44]


// let arr = [1,2,'deepak','laxmi',null];
// let ans = arr.filter((value) => {
//         if(typeof(value) === 'string'){
//             return true;
//         }
//         else{
//             return false;
//         }     

// });
// console.log(ans); // ['deepak', 'laxmi']

// let arr = [1,2,'deepak','laxmi',null];
// let ans = arr.filter((value) => {
//         if(typeof(value) === 'number'){
//             return true;
//         }
//         else{
//             return false;
//         }     

// });
// console.log(ans);                // [1, 2]

// let arr = [1,2,'deepak','laxmi',null];
// let ans = arr.filter((value) => {
//         if(typeof(value) === 'null'){
//             return true;
//         }
//         else{
//             return false;
//         }     

// });
// console.log(ans);   //[]





//******************************* Reduce Method  ***************************/

// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// },0);
// console.log(ans);  // 100



// let arr = [1,10,1,10];
// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// },1);
// console.log(ans);



// let arr = [1,10,1,10];
// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// });
// console.log(ans);

//******************** sort method ***********************/
// let arr = [9,7,1,4,2,8];
// arr.sort();
// console.log(arr);  // [1,2,4,7,8,9]





// let arr = [1,2,4,7];
// arr.sort((a,b) => b-a);
// console.log(arr);      //[7,4,2,1]

// let arr = [1,2,4,7];
// arr.sort().reverse();
// console.log(arr);       //[7,4,2,1]


//************************ indexof method ****************//

// let arr = [9,7,1,4,2,8];
// console.log(arr.indexOf(7));   //1

//******************* find method ****************/

// let arr = [9,7,1,14,12,8];

// let ans = arr.find((element) => (element) > 10);
// console.log(ans);  // 14





// const inventory = [
//     {"name": "cherries", quantity:2},
//     {"name": "cow", quantity:7},
//     {"name": "peacock", quantity:5},
// ];
// function ischerries(fruit){
//     return fruit.name === "cherries";
// }
// function iscow(animal){
//     return animal.name === "cow";
// } 

// // console.log(inventory.find(ischerries));
// console.log(inventory.find(animal));


//***************************** for-each ******************/

// let arr = [10,20,30];
// arr.forEach((value,index) => {
//     console.log("Number:", value, "index:", index);  // number:10  index:0
                                                        //  number:20  index:1
                                                        //   number:30  index:2
// })


// let arr = [11,22,33,44];
// let length = arr.length;
// console.log("lenght:",length);  //4


//****************  traditional loop ************/
 
// let arr = [2,1,3,21,45,23];
// let length = arr.length;
// console.log("lenght: " , length);   //6
// for (let index=0; index < length; index++){
//     console.log(arr[index]); 
//     }                       // 2
//                              1       
//                              3  
//                             21
//                              45   
//                              23

//*************************** for-in  ***************//

// let obj = {
//         name:"laxmi",
//         age: 23,
//         weight: 45,
//         height:"5th 1in",
//         greet:function(){
//            console.log("I am feeling good now");
//     } 
//     };

//     for(let key in obj){
//         console.log(key,"",obj[key]); //
        
//     }


//********************************* for-of *********************/
// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);   //10
                          //20          
                          //30 
                          //40
                          //50 
// }

// let fullname = "laxmi";
// for (let value of fullname){
//     console.log(value);   //l
                         //a
                         //x
                         //m
                         //i                        
    // }

//********************** function with Array *****************/
// let arr = [10,20,30,40,50];

// function getSum(arr) {
//     let len = arr.length;
//     let Sum = 0;
//     for (let index=0; index<len; index++) {
//             Sum = Sum + arr[index];
//         }
//         return Sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);  //150


//******************* for-each array ****************/
let arr = [20,5,10,25,37];
function getSum(arr) {
    let Sum = 0;
    arr.forEach((value) => {
     Sum = Sum + value;
        
    });
    return Sum;
}
 let totalSum = getSum(arr);
 console.log(totalSum);
 

