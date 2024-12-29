
//**************************************  function hoisting ******************************************/
{

myfirstname("khadus insaan");


function myfirstname(firstname){
    console.log(firstname);   //khadus insaan  
    }
}


// *********************************** variable hoisting ***************************************//

// var age = 21;                                   
// console.log(age); // 21                         

{
var age;

console.log(age);    // undefined
var age = 21;

}