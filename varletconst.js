const AccountId = 43345
let AccountEmail = "laxmikumari@gmail.com"
var Accountpassword = "57646546"
Accountcity = "Ranchi"
  

/* undefined */
let accountstate;

console.log(AccountId);

//** const ka value change nhi hoga ** AccountId = 2223 not allowed **//
// AccountId = 2223

// ye sabhi second time dusra value daalne par change ho jata hai

AccountEmail = "pujakumari@gmail.com"
Accountpassword = "44556677"

/* not use */
Accountcity = "dhanbad"
console.table([AccountId, AccountEmail, Accountpassword, Accountcity, accountstate])

/*
prefer not to use var 
because of issue in block scope and functional scope
*/