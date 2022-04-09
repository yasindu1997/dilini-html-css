const x = 10;
const y = 45;

const answer = x + y;

const answer_2 = x * y;

const answer_3 = x - y;

const answer_4 = x / y;

console.log(answer + " " + answer_2 + " " + answer_3 + " " + answer_4); //contatted string

//***** js data types *****

// numbers
var f = 10;

//string
var r = "Yasindu";

//object
var d = {
    "name": "yasindu",
    "address": "Panadura",
    "age": 25
}

// undefined
var k;


//boolean
var is_accept = true;

// **** js functions ****


//normal
function greet_user() {
    console.log("Hello, Good Morning !");
}

greet_user();

//parametarized
function greet_user2(name) {
    console.log("Hello, " + name + " Good Morning !");
}

greet_user2("dilini");

//return type
function getSum(num1, num2) {
    let sum = num1 + num2;

    return sum;
}

const output = getSum(25, 40);

console.log(output);

//**** flow controllers ****

var j = 10;

if (j == 12 && j < 15) {
    console.log("Entered");
}

if (j == 12 || j < 15) {
    console.log("Entered");
}

var username = "yasindusathsara@gmail.com";
var password = 123456;

if (username == "yasindusathsara@gmail.com" && password == 123456) {
    console.log("User Loged !");
} else {
    console.log("Login failed !");
}


if (username == "yasindusathsara@gmail.co" && password == 123456) {
    console.log("User Loged !");
}
else if (username == "yasindusathsara@gmail.com" || password == 123456) {
    console.log("Check Email or Password !");
}
else {
    console.log("Login failed !");
}


//*** Loops ****

console.log("Yasindu Sathsara");
console.log("Yasindu Sathsara");
console.log("Yasindu Sathsara");
console.log("Yasindu Sathsara");
console.log("Yasindu Sathsara");

var f = 10;
f = 20;
f = 30;

// for loop, while loop, for each

for (var i = 0; i < 100; i++) {
    console.log("Yasindu Sathsara");
}

var control = 0;

while (control < 10) {
    console.log("Hello IJSE");
    control++;
}

console.log("End of the loop");

// ** arrays **

const cars = ["Toyota", "Nissan", "Mazda", "BMW"];

const students = ["Yasindu", "Pasindu", "Dilini"]

const marks = [15.25, 45.25, 15.0]

console.log(cars);

console.log(cars[0]);

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (var data of cars) {
    console.log(data);
}

for (var data in cars) {
    console.log(data);
}

// *** Js Objects ***

const dilini = {
    "name": "Dilini",
    "address": "Galle",
    "age": 25,
    "salary": 50000.00
}

const dog = {
    "name": "dog",
    "model": "Altation",
    "age": 10
}


// ***  event ****

function btnClick() {
    const value = 52;
    console.log("Value is : " + value);
}

function changeText() {
    document.getElementById('text').innerHTML = "Hello Dilini";
}