//Celsius to Fahrenheit Conversion

// let celsius = 10;
// let fahrenheit = (celsius*1.8) + 32;

// console.log(fahrenheit);



//Conversion using Functions

//Named Function
function tempconvert (degreeC){
    return degreeC*1.8 + 32;
}

//Arrow Function
// const tempconvert = (degreeC) => {
//     return degreeC*1.8 + 32;
// }

console.log (tempconvert (30));