//  Currying in JavaScript

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
 

// let result = sum(2)(4)(6)

// console.log(result);


// Message Example :: 
// sender, heading, body

const message = (sender) =>{
    return function(heading){
        return function(body){
            console.log(`Sender is : ${sender}, Message Heading : ${heading}, Message Body : ${body}`);
            
        }

    }
}

let res = message("Sufyan Shaikh")("How Are You!")("What about you are you ok feeling weel or not!")
console.log(res);
