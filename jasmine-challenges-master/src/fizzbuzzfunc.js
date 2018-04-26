// function fizzBuzz(n){
//     if (typeof(n) == "number"){
//         if (n % 3 == 0 && n % 5 == 0){
//             alert("FizzBuzz")
//         } else if (n % 3 == 0){
//             alert("Fizz")
//         } else if (n % 5 == 0){
//             alert("Buzz")
//         } else if (typeof(n) == "string"){
//             alert("Input must be whole number")
//         }
//     }
// }

function fizzBuzz(n){
    if (typeof(n) == "string"){
        alert("Input must be whole number")
        } else if (typeof(n) == "number"){
            if (n % 3 == 0 && n % 5 == 0){
            alert("FizzBuzz")
            } else if (n % 3 == 0){
            alert("Fizz")
            } else if (n % 5 == 0){
            alert("Buzz")}
        }
}