function areaOfCircle(n) {
    if (typeof(n) == "number") {
        if (n < 0) {
            alert("This value must be positive")
        }
        else {
            let result = 3.1416 * (n * n);
            return Number(result.toFixed(2));
        }
    }
    else if (typeof(n) == "string") {
        alert("This must value must be a number")
    }
}



function squareRoot(n) {
    if (typeof(n) == "string") {
        alert("This value must be a number.")
    }
    else {
        let result = Math.sqrt(n);
        return Number(result.toFixed(2));
    }
}


function squareMe(n) {
    if (typeof(n) == "number") {
        let result = (n * n);
        return Number(result.toFixed(2));
    }
    else {
        alert("This value must be a number!!!")
    }
}



// function squareMe(n) {
//     if(typeof(n) == "string"){
//         alert("This value must be a number!!!")
//     } else{
//     let result = (n*n);
//     return Number(result.toFixed(2));
// }
// }

function cubeMe(n) {
    if (typeof(n) == "number") {
        return (n * n * n);
    }
    else if (typeof(n) == "string") {
        alert("This needs to be a number!")
    }
}


function aOT(n1, n2, n3) {
    if (typeof(n1) == "number" && typeof(n2) == "number" && typeof(n3) == "number"){
        return Number = (n1 * n2 / n3);
    } else if (typeof(n1) == "string" || typeof(n2) == "string" || typeof(n3) == "string") {
        alert("Values must be numbers")

    }
}

function yearsLeft(n1) {
    if(typeof(n1) == "number"){
        if (n1 > 2018){
            alert("Value must be under 2018")}
            else
        
        return (2018 - n1);
    } else if (typeof(n1)=="string"){
        alert("Numbers only please!")
    }
}