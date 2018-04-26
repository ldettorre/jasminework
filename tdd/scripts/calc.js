function addition(num1,num2) {
    if(typeof(num1) == "number" && typeof(num2) == "number") {
    return num1 + num2 ;
    }else{ 
        alert("Arguements must both be number");
    }
}

function subtraction(num1,num2) {
    if(typeof(num1) == "number" && typeof(num2) == "number") {
        return num1 - num2 ;
    }else{
        alert("Arguements must both be numbers");
    }
}

function multiplication(num1,num2) {
    if(typeof(num1) == "number" && typeof(num2) == "number"){
        return num1 * num2;
    } else {
        alert("Arguements must both be numbers");
    }
}