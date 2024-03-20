//Logical Operatiors

//  && || !- eigula same to same as C programming language

//Conditional Statements

// let number= prompt ("Enter a Number");
// console.log (number);

// if (number%5===0){
//     console.log(number, "is multiplied by 5");
// }

// else {
//     console.log(number, "isn't multiplied by 5");
// }

let marks= prompt ("Enter the marks");
console.log ("marks");

if (marks>=90 && marks<=100 ){
    console.log (marks,"Grade is A");
}
else if (marks>=70 && marks<=89 ){
    console.log (marks,"Grade is B");
}
else if (marks>=60 && marks<=69 ){
    console.log (marks,"Grade is C");
}
else if (marks>=50 && marks<=59 ){
    console.log (marks,"Grade is D");
}
else if (marks>=0 && marks<=49 ){
    console.log (marks,"Grade is F");
}
else {
    console.log ("marks isn' valid");
}

