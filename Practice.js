//---------loop-------------

/*for(i=44; i<67; i++){
    console.log(i);
}*/

//----------string------------

/*console.log("Hello");

console.log(42);
console.log(6.28);
console.log(true);

console.log("Hello".length);
console.log("Hello".toUpperCase());
console.log("Hello    ".trim());//trim white space before and after the string
console.log(Math.random());
console.log(Math.random()* 10);
console.log(Math.floor(Math.random()*10)); //rounds down random number to the nearest whole number then multiply by ten*/

/*console.log("Hello".concat(" you"));//joins two strings together
console.log("Hello".search("o"));//searches within the string and returns the index position number
console.log("Hello".lastIndexOf("e"));//returns the index position
console.log("Hello".slice(0,3));//slices off part of a string, use index positions of what to keep "start","end"
console.log("Hello".substring(0,4));//creates new string from original one, needs a start and end\
console.log("Hello".substr(0,4));//returns the specified string using the specified index start and how many characters you want
console.log("Hello".replace("H", "Y"));//replaces a string with another string*/


/*console.log("All Around the World".substring(7,8).toUpperCase());*/


//------variable--------

/*let name = "Sam";
console.log(name);*/

/*let age = 29;
console.log(age);
age ++; //=, *=, +=, /=, -=, ++, --
console.log(age);*/

/*let favouriteDrink = "coffee";
console.log(`My favourite drink is ${favouriteDrink}`);

let name = "Geoff";
let age = 29;
let favouriteColour = "black";

console.log (`My name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`);*/


/*let space1 = 'x';
let space2 = 'o';
let space3 = ' ';
let space4 = 'x';
let space5 = 'o';
let space6 = ' ';
let space7 = 'x';
let space8 = 'o';
let space9 = ' ';*/

/*if (space1 == 'x' && space4 == 'x' && space7 =='x'){
console.log("x has won"))
}
else if (space1 == 'x' && space4 == 'x' && space7 =='x'){
    console.log (o has won)'
}
else{console.log ("No one has won yet.")}*/


/*let space1 = 'x';
let space2 = 'o';
let space3 = ' ';
let space4 = 'x';
let space5 = 'o';
let space6 = ' ';
let space7 = 'x';
let space8 = 'o';
let space9 = ' ';*/

/*  console.log("   |    |   ");
    console.log(` ${space1} |  ${space2} | ${space3} `);
    console.log("   |    |   ");
    console.log("------------");
    console.log("   |    |   ");
    console.log(` ${space4} |  ${space7} | ${space6}   `);
    console.log("   |    |   ");
    console.log("------------");
    console.log("   |    |   ");
    console.log(` ${space5} |  ${space6} | ${space9}  `);
    console.log("   |    |   ");*/



/*if((space1 && space2 && space3 == "X") || (space1 && space2 && space3 == "O")) {
    console.log("WINNER")
}
else {
    console.log("No winning match")
}*/


//----------if/else statement--------------
/*let age=18;
let country = "France";

if (age > 17 && country == "UK"){
    console.log("Yes I can serve you.");
}
else{
    console.log("You aren't old enough.");
}*/


//--------&&, ||----------


/*1.Create a variable called password. Check how many letters are in the password, if there are less than 8 log to the console
 that the password is too short. Otherwise log the password to the console.*/
/*let password = "password";

if(password.length <8 ){
    console.log ("The password is too short");
}

else {
    console.log ("Password is the correct length");
}
*/

/*2Create a variable called num. Check if the variable is divisible by 3 or 5. If it is log “This number is divisible by 3 or 5” 
 to the console. Otherwise log “This number is not divisible by 3 or 5”*/

/*let num = 16;

if (num % 3 || num % 5){
    console.log("This number is divisble by 3 or 5.");
}
         else {
             console.log("This number is not divisble by 3 or 5.");
            }*/


/*Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the 
console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.*/
 
/*let num = 20;

if (num % 3){
    console.log("Fizz");
}

else if (num % 5) {
    console.log("Buzz");
}

else if (num % 3 && num % 5) {
             console.log("Fizz Buzz");
}

else {
    console.log (num);
}*/


/*4.Create a variable called num. Check if the number is a palindrome 
(looks the same forward as it does backwards e.g. 1001 or 20202).*/

/*var nnumber = "1001";
var items = nnumber.split( "" );
var isPalindrome = items.join( "" ) === items.reverse().join( "" );

if(isPalindrome) {
    console.log("number is a palindrome");
}
else {
    console.log("number is not a palindrome");
}*/

/*5.Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement 
that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, 
at 9 I’m at work.*/

/*let time = 8;
let placeOfWork = "work";
let townOfHome = "Manc";

if (time <=7){
    console.log (`I'm at home in ${townOfHome}`);
}

else if (time >=9){
    console.log (`I'm at ${placeOfWork}`);
}

else {
    console.log ("I'm communting");
}*/


/*7Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
Find the index of a last vowel in the string.*/


/*let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = "aeiou";

for(let i = longString.length - 1; i > 0; i--)
{
    if(vowels.indexOf(longString.toLowerCase().charAt(i)) >= 0)
    {
        console.log("The last vowel is: " + longString.charAt(i) + " at position: " + i);
        break;
    }
}*/


/*8.Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the 
first. If it is return true, otherwise return false.*/

/*let word = "hello";

if (word.charAt(word.length-1)==word.charAt(0)){
    console.log(true);
}

else {
    console.log(false)
}*/


/*9.Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. If it is 
return the number, otherwise return the numbers multiplied together.*/

/*let num1 = 7;
let num2 = 2;

if (num1 + num2 % 2 ==0){
    console.log(num1+num2)
}

else {console.log(num1 * num2)}*/



//--------Intro Functions-------

/*const SayHi = (name) => {
    console.log (`Hiya ${name}`);
}

SayHi("Sam");*/


//------Parameters------

/*const coffeeOrder = (size, typeOfDrink) =>{
    console.log(`${size}, ${typeOfDrink}`)
}

coffeeOrder("Tall, Latte");*/

//turn function into arrow syntax from declaration
/*const factorial = (n) =>{
    if ((n === 0) || (n === 1)) { 
        return 1;
    } 
    else {
    return (n * factorial(n-1));
    } }
    console.log(factorial(33));*/

//Write a function that takes 9 parameters and logs our naughts and crosses board to the console.
  /*  const logGrid = (space1,space2,space3,space4,space5,space6,space7,space8,space9) => {
        console.log("   |    |   ");
        console.log(` ${space1} | ${space2} | ${space3} `);
        console.log("   |    |   ");
        console.log("------------");
        console.log("   |    |   ");
        console.log(` ${space4} | ${space7} | ${space6}   `);
        console.log("   |    |   ");
        console.log("------------");
        console.log("   |    |   ");
        console.log(` ${space5} | ${space6} | ${space9}  `);
        console.log("   |    |   ");
    }
    logGrid(" ", "x", "o", "x", "x","o", " ", " ", "o")*/


//Cash machine time. create one that :dispenses cash if your pin number is correct and your balance is equal to, or more than, 
//the amount you’re trying to withdraw.

/*function check_pin (pin){
   return pin === "1234";
   console.log(correct)
   
}

check_pin(1345);*/

//------function to multiply 2 numbers-----------

/*function multi (num1, num2){
    console.log(num1 * num2)
}
multi(2, 2);*/

/*const multiplyNumbers = (num1, num2)=>{
    return num1 * num2
}
console.log (multiplyNumbers(6,7);*/


//---------Arrays------------

/*let coffeeOrder = ['Sam – Hot Chocolate', 'Stuart - Cortado', 'Dan - Latte'];

console.log(coffeeOrder);*/


//make an array now of your favourite songs/films. 3 of them. Log to console.

//let favFilms = ['Laputa', 'Wheels on Meals','Star Wars'];

//console.log(favFilms[2])//logs an item from the array (0 index) where it is (.length counts from 1)
//favFilms[2] = "Groundhog Day";//changes a item from the array

//console.log(favFilms.length);//tells you how many items in the array

//Array methods

//favFilms.push("Star Wars");//adds an item to the array
//favFilms.pop();//removes the last item to the array
//favFilms.shift();//Removes the first element of an array, and returns that element
//favFilms.unshift("Star Wars");//adds new elements to the beginning of an array, and returns the new length
//favFilms.splice(0,1, "Terminator 2");//Adds/Removes elements from an array, first number is the position in the array to place, 2nd number is how many to remove from that position
//let favFilms2 = favFilms.slice(1,2);//Selects a part of an array, and returns the new array, need to create a new array yourself

//console.log(favFilms2);

//Create a list of your favourite websites (3 of them) and then add another 2 using a methodThen remove the last website
//let faveWebsites = ['Youtube', 'AnimeNewsNetwork', 'Kotaku'];

//faveWebsites.push ("GamesIndustry", "Dark Horizons");
//faveWebsites.pop();
//console.log(faveWebsites);


//----------functionPractice------------

/*# numberToString(Number)-----

Converts a number a string.

Parameters

n: number

Returns: string, the number as a string*/

/*const numberToString = (numString) =>{
   Return numnString;
}
console.log(numberToString (1234)) =>;*/

//-----------------------------
/*# increase(n)

Adds one to a given number

Parameters

n: number

Returns: number*/

/*const addOne = (num3) =>{
    return num3+1;
}
console.log (addOne (1));*/


/*#decrease(n)

Subtracts one from a given number

Parameters

n: number

Returns: number*/

/*const takeOne = (num4) =>{
    return num4-1;
}
console.log (takeOne (1));*/


/*# add(x, y)

Adds two numbers.

Parameters

x: number

y: number

Returns: number, the sum*/

/*const addTwo = (num5, num6) =>{
    return num5+num6;
}
console.log (addTwo (1));*/


/*# subtract(x, y)

Subtracts the second number from the first.

Parameters

x: number

y: number

Returns: number, the difference*/

/*const takeTwo = (num7,num8) =>{
    return num7 - num8;
}
console.log (takeTwo (7, 3));*/


/*# multiply(x, y)

Multiplies two numbers.

Parameters

x: number

y: number

Returns: number, the product*/

/*const multiplyNumbers = (num9, num10)=>{
    return num9 * num10
}
console.log (multiplyNumbers(6,7);*/


/*# divide(x, y)

Divides the first number by the second.

Parameters

x: number

y: number

Returns: number, the quotient*/

/*const divideNumbers = (num11, num12)=>{
    return num11 / num12
}
console.log (divideNumbers(6,2));*/


/*# square(x)

Multiplies a number by itself.

Parameters

x,: number, number to be squared

Returns: number, squared*/

/*const squareNumbers = (num13)=>{
    return Math.pow (num13,2);
}
console.log (squareNumbers(6));*/


/*# calculate(operation, x, y)

Prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4". Returns the result.

Parameters

operation: string, "add", "subtract", "multiply", or "divide"

x: number

y: number

Returns: number, the result*/

/*const numberEquation = (num14, num15)=>{
    return num14+num15
}
console.log (numberEquation(6,7));*///------------------------------------


/*# isGreaterThan(a, b)

Returns true if a is greater than b

Parameters

a: number

b: number

Returns: boolean, a is larger than b*/


/*const greaterThan = (a,b)=>{

    if (a>b){
        return true
    }
    else {
        return false
    }
}
    console.log(greaterThan(5,2));*/


/*# isLessThan(a, b)

Returns true if a is less than b

Parameters

a: number

b: number

Returns: boolean, a is smaller than b*/

//this arrow function is a whole function. Put the code inside it
/*const lesserThan = (a,b)=>{

    if (a<b){
        return true
    }
    else {
        return false
    }
}
    console.log(lesserThan(5,2));*/


/*# areEqual(a, b)

Returns true if a and b are equal

Parameters

a: number

b: number

Returns: boolean, the numbers are equal*/


/*const equal = (a,b)=>{

    if (a==b){
        return true
    }
    else {
        return false
    }
}
    console.log(equal(5,6));*/


/*# minimum(x, y)

Returns the smallest value of two numbers.

Parameters - a: number, b: number

Returns: number, the smallest number*/


/*const smallest = (x,y)=>{

    return Math.min (x,y);
    
}
console.log(smallest(1,2));*/



/*# maximum(x, y) - Returns the largest value of two numbers.

Parameters a: number, b: number

Returns: number, the largest number*/


/*const largest = (x,y)=>{

    return Math.max (x,y);
    
}
console.log(largest(9,2));*/


/*# isEven(n) - Returns true if n is even.

Parameters - n: number

Returns: boolean, the number is even*/


/*const even = (n)=>{

    if (n%2===0){
        return true
    }
    else {return false}
}
console.log(even(3));*/


/*# isOdd(n)-Returns true if n is odd.

Parameters-n: number

Returns: boolean, the number is odd*/


/*const odd = (n)=>{

    if (n%2>0){
        return true
    }
    else {return false}
}
console.log(odd(2));*/


/*# letterGrade(score, total) - Returns a letter grade. "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%

Parameters - score: number, total: number, maximum possible score

Returns: string, the score represented as a letter grade*/

/*const letterGrade = (score)=>{

    if (score <= 100 && score >= 90){
        console.log("A")
    }
    if (score <= 89 && score >= 80){
        console.log("B")
    }
    if (score <= 79 && score >= 70){
        console.log("C")
    }
    if (score <= 69 && score >= 60){
        console.log("D")
    }
    if (score <= 59 && score >= 0){
        console.log("F")
    }
    else {return}
}
console.log(letterGrade(59));*/

/*function letterGrade() {
    let gScore;
    let score;
    switch(true) {
case (score <= 100 && score >= 90):
  gScore = 'A';
   break;
case (score <= 89 && score >= 80):
   gScore = 'B';
    break;
case (score <= 79 && score >= 70):
   gscore = 'C';
    break;
  case (score <= 69 && score >= 60):
   gScore = 'D';
    break;
case (score <= 59 && score >= 0):
   gScore = 'F';
   break;

case (score > 100 && score < 0):
   gScore = 'INVALID SCORE';
   break; 

default:
 return 'INVALID SCORE';
    }*/
 //console.log(letterGrade(90))

    

/*# combine(word1, word2) - Joins two strings with a space.

Parameters

word1: string

word2: string

Returns: string, joined the words joined with a space*/


/*let combine = (word1, word2)=>{
    let space = " ";
    return word1 + word2;
}
combine(console.log ("hello" + " " + "world"));*/

/*for(i=9; i>=0; i--){//(start condition, end condition; )
    console.log(i);//counts from 9-0
}*/


/*let favFilms = ['Laputa', 'Wheels on Meals','Star Wars'];
favFilms.push ( "Groundhog Day" , "Terminator 2")
console.log(favFilms)//logs an item from the array (0 index) where it is (.length counts from 1)
//favFilms[2] = "Groundhog Day";//changes a item from the array
for(i=0; i>6; i++){//(start condition, end condition; )
    console.log(i);
}*/

//Displays 4 films stored in an array. Use a loop to show each film in the arrayCreate a function called filmCheck() that checks 
//if the 3rd film in the array is Ghostbusters.If it is, it should return “yey it’s ghostbusters”. If it isn’t, it should
// return “booo, we want ghostbusters”
/*
let favFilms = ['Laputa', 'Wheels on Meals','Star Wars', 'Ghostbusters'];
//console.log(favFilms)//logs an item from the array (0 index) where it is (.length counts from 1)

for(i=0; i>5; i++){//(start condition, end condition; )
    console.log(i);
}*/


/*let favFilms = ['Laputa', 'Wheels on Meals','Star Wars', 'Ghostbusters'];

function checkFilm(arrayOfFilms){
    return arrayOfFilms.indexOf("Ghostbusters");//function uses unique parameter but when invoking can use existing parameter eg array favFilms
}

//console.log(checkFilm(["Ghostbusters", "Star Wars"]))
console.log(checkFilm(favFilms))

if (checkFilm) {
    console.log ("yey it's Ghostbusters")
}
else {console.log("booo, we want Ghostbusters")}*/


//----------Objects--------------

/*let person = {
    name: "Geoff",
    age:34,
favBiscuits:['custard creams', 'posh biscotti'],
friendlyGreeting(){
    return "Hi, nice to meet you"
},
meanGreeting(){
    return "Hi, now go away"
}
};
 
//console.log (person.name);
console.log (person.name );
console.log (person.favBiscuits); 
console.log (person.friendlyGreeting());*/

//-----------functions with objects------------------

/*let person = {
    name: "Geoff",
    age:34,
favBiscuits:['custard creams', 'posh biscotti'],
mood:"Bad",
//using this. is the same as saying person.mood outside
Greeting(){
    if(this.mood == "good"){
    return "Hi, nice to meet you"
    }
    else {
    return "Hi, now go away!"}
    },
    sayHi(){
        return `Hi my name is ${this.name}`
    }
};
 
//console.log (person.name);
//console.log (person.name );
//console.log (person.favBiscuits); 
console.log (person.Greeting());
console.log (person.sayHi());*/


/*let rabbit = {

    name: "Sherlock",
    colour: "black and white",
    ears: "uppy",
    bunHop(){
        return "Sherlock is hopping"
    },
    bunChew(){
       return "Sherlock is chewing"
    }
}
console.log(rabbit.bunHop())
console.log(rabbit.bunChew())*/

/*Problem 1:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

/*function multiples(number) {
    let sum = 0;
 
    for (let i = 0; i <1000; i++) {
        if ((i % number) === 0) {
            sum += i;
        }
    }
    return sum;
 }
 console.log( multiples(3) );
 console.log( multiples(5) );*/
 

/*Problem 2:
Take this string “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.
The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.*/

/*let longWord = (word) =>{
    
    console.log(word.indexOf("hi"));
    console.log(word.lastIndexOf("hi"));
}
longWord ("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh");*/


/*Problem 3:
Take the string from problem 2 and print each letter out individually.*/


/*let longWord2 = (word2) =>{
    console.log(word2.split(""))
}
longWord2 ("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh");*/


/*Problem 4:
Take the string from problem 2, loop through the string and find out how many times the word hi appears and the indexes where it appears.*/


let longWord3 = (word3) =>{
    
    console.log(word3.match(/hi/g).length);
    let i;
    for(i=0; i<word3.length; i++){//(start condition, end condition;)
        
        if (){

        }
}
}
longWord3 ("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh")


/*Problem 5:
Create a function that checks if a number is a palindrome.
Use this function to find the biggest palindrome less than 90283743503594.*/

/*Problem 6:
This is a paragraph from Harry Potter “Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises.”
Count how many words are in this paragraph (using code!).*/

/*Problem 7:
https://projecteuler.net/problem=25 rather then go to 1000 digits, go to 50 digits.
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?*/


/*Problem 8: 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/


/*Problem 9:
If I add up the digits of the number 19082 I would get 1+9+0+8+2=20. Add the digits of the number:
371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331*/


/*Problem 10:
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
A website dedicated to the fascinating world of mathematics and programming*/

/*Problem 11:
Take the paragraph from problem 6.
Find the longest word.
Find the index of the first time the word “witch” appears.
Remove all the punctuation from the string.*/
