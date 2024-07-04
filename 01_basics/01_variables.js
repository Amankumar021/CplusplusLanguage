const accountId = 144523
let accountEmail = "aanam@google.com"
var accountPassword = "123545"
accountCity = "Prayagraj"
let accountState;

//accountId = 2 //not allowed

accountEmail = "aman@.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,,accountPassword,accountEmail, accountCity, accountState])