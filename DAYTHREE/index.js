import bcrypt from 'bcrypt'


const marks = [12,34,56,78] // create an array
 console.log(marks[1]) //access an array

 marks[1] = 45

 console.log(marks[1])

//push() add the data at  the end of the array: 
marks.push(5)
 console.log(marks)

 //pop() : remove the last element from the array
 marks.pop()
 console.log(marks)

 //shift(): remove the first element from the array
 marks.shift()
 console.log(marks)


 console.log(marks.indexOf(56)) //prints out the index of a certain value in the array. 


 //concat(): used to join mutiple arrays: 
 const markMwangi = ['Mark', 23456];
const stanley = ['Stanley', 54657];
const joinedArray= markMwangi.concat(stanley)
console.log(joinedArray);


//join()
const months = ['Jan', 'March', 'April', 'June'];
console.log(months.join()); // Outputs: Jan,March,April,June
console.log(months.join('')); // Outputs: JanMarchAprilJune
console.log(months.join(' ')); // Outputs: Jan March April Junen

//Banana Apple Orange
//splice()

//forEach
 //array.forEach(callbackfn, thisArg);

 let runners = ['Kiplimo', 'Kipchumba', 'Koskei'];
runners.forEach(function(runner) {
    console.log(`${runner} runs a 100 meters`);
});


let total = 0
let marks1 = [12,34,45,56,67,78,90]
let size = marks1.length

marks1.forEach((mark)=>{
    console.log(mark)
    total += mark
    console.log(total)
    console.log(`Average mark is : ${total/size}`)
})


function verifyPassword(inputPassword, storedHashedPassword){
    if (bcrypt.compare(inputPassword, storedHashedPassword) == true){
        return true
    }else{
        return false
    
    }
}
