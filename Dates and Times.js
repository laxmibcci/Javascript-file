// Dates

let mydate = new Date()
// console.log(mydate);         // 2024-11-12
// console.log(mydate.toString()); // Tue Nov 12 2024 16:07:32 GMT+0530
// console.log(mydate.toDateString()); // Tue Nov 12 2024
// console.log(mydate.toISOString());  // 2024-11-12T10:52:11.557Z
// console.log(mydate.toJSON());      // 2024-11-12T10:52:11.557Z
// console.log(mydate.toLocaleDateString()); //  11/12/2024

// console.log(typeof mydate);  // objects

// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate); // 2023-01-22T18:30:00
// console.log(myCreateDate.toDateString()); // Mon Jan 23 2023
// console.log(myCreateDate.toLocaleString()); // 1/23/2023, 12:00:00 AM


// let myCreateDates = new Date("2023-01-14")
// console.log(myCreateDates.toLocaleString()); // 1/14/2023, 5:30:00 AM

let createdDate = new Date("01-14-2023")
// console.log(createdDate.toLocaleString());  // 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()

// console.log(myTimeStamp);  // 1731412350253
// console.log(createdDate.getTime());  // 1673634600000

// console.log(math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate); // 2024-11-15T10
// console.log(newDate.getMonth() + 1); //10
// console.log(newDate.getDay());  //5

`${newDate.getday()}`


newDate.toLocaleString('default', {
    weekday: "long",

})

