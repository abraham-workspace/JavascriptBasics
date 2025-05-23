//Booleans = true or false
const username = 'Ben'
const isLoggedIn = false //boolean value
//conditionals
if(isLoggedIn){
    console.log(`Welcome ${username}`)
}else{
    console.log('Not logged in Please try to login')
}

const isValid = true
 if(isLoggedIn && isValid){ 
    console.log('Form subnitted')
 }else{
    console.log('Form is invalid or wrong credentials')
 }

 //the double equal sign -- > check for equality 

 let userRole = 'User' || 'Librarian'

 if(userRole == 'User'  || userRole == 'Librarian'){
    console.log('true')
 }else{
    console.log('false')
 } 

 //console.log(1 == 1)

 //(===) the variable(equality) and the data type

 let userId= 4

 if(userId === '4'){
     console.log('true')
 } else{
     console.log('false')
 }


 //iterations:
 //while loop remains unchanged
 //the do...while
// let password = '1234'
// let myInputPassword ; 
//  do{
//     let passwordInputValue = prompt('Enter a password')
//     myInputPassword = passwordInputValue
//  } while (myInputPassword !== actualPassword);
//  alert("Correct password");



//objects:
const person = {
    name: "GUVI",
    age: 10,
    city: "Chennai, Tamil Nadu",
    address: {
        location: 'KENYA',
        PhoneNo: 6327632,
        zip: {

        }
    }
};

const{name, age, city, address:{location, PhoneNo}}= person

console.log(location)
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }
//   console.log(person.age)
// const marks = [23,67,334]
// console.log(typeof(marks))
 let individual = [person]


 //ternary operator
 //syntax: let result = condition ? value1 : value2;

 let age1 = 24 
 let authorizedVoter = (age1 > 18) ? 'allowed ' : 'not allowed'

 console.log(authorizedVoter)

