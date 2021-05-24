//In-line comment
/*Multi-line comment use camelCase
see? */
var thisBeVar;
thisBeVar = 5;
var moVar;
moVar = thisBeVar;
//but it's better to do it all in one line as below
var a = 9;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 2;
c = c + "man!";
var adding = 10 + 10;
//can use + - * and / ++ for increment (add one) and -- for opposite
var newVar = 26;
newVar++;
var decimalBaby = 5.3;
var remainderPraccy = 16 % 3;
//so the remainder above would be 1
var d = 16;
d += 14;
//which makes d = d + 14 or 30. This also applies for -= *= and /=
var myFirstName = "Robert"
var myLastName = "Jones"
/*Something "in quotes" is a string literal
To use actual quotes within a string us \" to open and close. 
Mixing up single and double quotes works so long as you don't duplicate.
\ is a general escape */
var sampleQuote = "Hey don't \"quote\"me on that";
var praccyString = "FirstLine\n\t\\SecondLine\nThirdLine";
var conCat = "Humpty Dumpty " + "sat on a wall"; //concatenation, Humpty Dumpty sat on a wall
var conConCat = "Humpty Dumpty ";
conConCat += "sat on a wall."; //you can also mix this up as below
var myName = "RJ "
var myStyle = "Hey wassup everybody, " + myName + "on the mic";
var daWord = "tasty.";
var daString = "Cookies are ";
daString += daWord; // This should say Cookies are tasty.
var firstLetterOfLastName;
var lastName = "Jonesy"
firstLetterOfLastName = lastName[0] //should bring up J into the console, bracket notation baby
var midName = "Huw";
var lastLetterOfMidName = midName[midName.length - 1]; //Should be w. Check the below sentence
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "The hairy " + myNoun + " stood up and " + myVerb + " away from the " + myAdjective + " vulture as " + myAdverb + " as its stubby legs could carry it.";
var varGnome = ["Limestone pie", "hot melted silver", 5]; //this is an array. Below is nested array
var varNest = [["Tolstoy", "Orwell", 4], ["Murakami", "Ryo", 7]]//multiple contents, can be used for shopping lists etc. Next up is indexes
var daArray = [15,30,40];
daArray[1]//this would be 30
var myData = daArray[2]; //this is 40. Unlike strings, arrays can be changed freely by later code
var sampleArray = [10,20,30];
sampleArray[0] = 11;//10 becomes 11
var bigArray = [[1,2,3,], [4,5,6], [7,8,9], [[10,11,],12,13,14,]];
var hereWeGo = bigArray[2][1];//this would be 8, 11 would be [3][0][1], 12 would be [3][1]
var tryPush = [["Ted", 40], ["Dougal", 30,]];
tryPush.push(["Jack", 70]);//tryPush now has the value[["Ted", 40], ["Dougal", 30], ["Jack", 70]]
var theArray = [["Jack", 70], ["Dick", 40]];
var removeFromTheArray = theArray.pop();/*theArray's value is now just ["Jack, 70] and remove's value is ["Dick", 40]
.shift does the opposite and removes the first value .unshift does the same as push but at the start*/
function datFunction() {
    console.log("Allo World")
}//now to call/invoke the function I do the below, and that should bring up Allo World in the console
datFunction();//slightly more complex is passing values to it
function datArgFunction(paraone, paratwo) {
    console.log(paraone + paratwo);
}
datArgFunction(3, 4);//on the console this would bring up 7, (3+4)
/*if you set a var within a function it will be local only and cause an error outside the function as it is not defined outside the function
local vars override global*/
function subtractSix(num) {
    return num - 6;
}//return sends a value back out of the function. Without a return function the returned value is undefined
var test = subtractSix(10);//This will give the answer 4, if the number was 13 it would be 7, that function is set up to subtract 6. This can be used for + * / as well
var processed = 0
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(12);//this gives the answer 3: 12+3 is 15, 15/5 = 3.
function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;
}//from FCC this would add a number to the end of the array and remove the first element, item would be a number, arr is an array
//Boolean data is true or false, basically on/off. e.g.
function trueTest(wasItTrue) {
    if(wasItTrue) {
        return "Es verdad!"
    }
    return "Ay, es mentira!"
}//If a true value is returned the function will return the response in the {}s Es verdad! whereas if it's not true the statement is not executed and mentira is returned
function testEquality(val) {
    if (val==12) {
        return "Equal";
    }
    return "Not Equal";
} testEquality(11);/*this would be false unless the number is 12. JS can compare different data types by converting, so 1=="1" would be true
Whereas if you use strict equality ===  then it has to be exact, different types will be returned false eg 1 = "1"*/
typeof 3 // this determines the type, so here it would return number
typeof "string"//whereas here it would return string
//the opposite of this is != which is not equal and there is also the strict version !==
function testGreater(val) {
    if (val > 80) {
        return "Over 80";
    }
    if (val > 20) {
        return "Over 20";
    }
    return "20 or less";
}
testGreater(18);/*> sign compares two numbers and returns true or false, see example above
>= is greater than or equal to, and there's also < and <=*/
function spockLogical(val) {
    if (val <= 100 && val >=20){
        return "Yes";
    }
    return "No";
}
spockLogical(45)//this would be Yes. && is a way of testing more than one thing at a time, it's only true if both parts are true
function eitherOR(val) {
    if (val >40 || val <30) {
        return "Outside range"
    }
    return "Inside range"
}
eitherOR(33)/*this is Inside range as it's not >40 or <30. || does either/or, so meeting one of the criteria is enough
If you want to execute a block of code for the false statement as well as true you can use else*/
function whoElse(val) {
var result = "";
if (val >5) {
    result = "Bigger than 5";
} else {
    return "5 or smaller";
} return result;
} whoElse(6); /*like this. You can also chain if and else together
if X return "X" else if Z return "Z" else return "Y"*/
//below is example downloaded from FCC of chaining if else statements
function testSize(num) {
  if (num <5) {
    return "Tiny"
  } else if (num <10) {
    return "Small"
  } else if (num <15) {
    return "Medium"
  } else if (num <20) {
    return "Large"
  } else {
    return "Huge";}
  } testSize(7);
  //below is an example of switch statements, it's like you set up the switch and it has different outcomes based on different variables
  function caseInSwitch(val) {
    var answer = "";
  switch(val) {
    case 1:
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3: 
    return "gamma";
    break;
  case 4:
  return "delta";
  } return answer;//so whichever number is entered in the function is returned by the switch i.e. in the case of 1 return alpha, in the case of 2 return beta etc
  } caseInSwitch(1);//you can also set a default to return anything not matching the case statements
  //Below is an example of giving multiple values to each case
  function sequentialSizes(val) {
    var answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
    return "Low";
    break;
    case 4:
    case 5:
    case 6:
    return "Mid";
    break;
    case 7:
    case 8:
    case 9:
    return "High";
  } return answer;
  } sequentialSizes(1);//fairly self-explanatory. Switches can simplify if/else if statements. Below.
  function chainToSwitch(val) {
    var answer = "";//it just gives the choices rather than if this else if this etc.
  switch(val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
  } return answer;
  } chainToSwitch(7);//similarly, you can use return for results rather than if/else
  function isEqual(a,b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }//this can be simplified to below
  function isEqual(a,b) {
    return a === b;// this works for <> etc as well, not just ===
  }//card counting function - this was tricky
  var count = 0;
function cc(card) {
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;//I should try this one again to see if I can do it
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count--;
} if (count > 0) {
  return count + " Bet";
} else {
  return count + " Hold";
}} cc(2); cc(3); cc(7); cc('K'); cc('A');
//similar to arrays are objects, where their data is accessed through properties
var myWolf = {
  "name": "Fangy Pete",
  "teeth": 80,
  "attitude": "hostile",
  "enemies": ["animal", "mineral", "vegetable"]//to update an object's property see below
}; myWolf.name = "Very Fangy Pete"//you can also add new properties this way or delete ones
myWolf.howl = "Ooowwwwwww"
delete myWolf.teeth;
//dot notation is a way to access the properties of an object when you know the name of the property
var sampleObject = {
  "back": "camel",
  "core": "boat pose",
  "hip": "lotus",
};
var backValue = sampleObject.back;
var hipValue = sampleObject.hip;/*if the property of the object you are accessing has a space you'll need to use bracket notation
but you can also use it on object properties without spaces. Example below*/
var coreValue = sampleObject["boat pose"];// you can also use variables to access properties
var celloStrings = {
  Astring: "Perpetual",
  Gstring: "Spirocore",
  Cstring: "Magnacore"
};
var playerChoice = "Cstring";
var cello = celloStrings[playerChoice];//this will return Magnacore
function phoneticLookup(val) {
  var result = "";//this part is to create an empty string, where the results are actually returned
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }; return lookup[val]
  return result;
} phoneticLookup("charlie");//this is using an object to look up values rather than else if or switch
//you can check the property of a given object using .hasOwnProperty. This one was confusing so look at it again
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
  return "Not Found";
  }//so here if the obj matches the corresponding checkProp it will return the obj, otherwise it'll return Not Found
}//now for a complex data structure
var myMusic = [
  {
    "artist": "Kyuss",
    "title": "Welcome to Sky Valley",
    "release_year": 1994,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false
  },//don't forget the comma in between!
  {  
    "artist": "Pink Floyd",
    "title": "Wish you were Here",
    "release_year": 1975,
    "formats": [
      "CD",
      "LP",
      "MP3"
    ],
    "gold": true
  }
];//now this below is how to assign the contents of the glove box to gloveBoxContents. Glove box is in brackets because you can only use dot notation for single words
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];//objects can have both nested objects and nested arrays like below
var someGames = [ 
  { type: "FPS",
  list: [
    "Titanfall 2",
    "DOOM",
    "Halo"
  ]
},
{ type: "RTS",
list: [
  "RA2",
  "Plantary Annihilation",
  "Total Annihilation"
]
}
]; var secondRTS = someGames[1].list[1];//this should return PA. Below is how to return the record collection.
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },//I should do this one again to practice
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") === false) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}
updateRecords(collection, 5439, 'artist', 'ABBA');//this needs assimilating
//Loop. This is a while loop, which runs when a specified condition is true and stops when it is no longer true
var daLoop = [];
var k = 4;
while(k >= 0); {
daLoop.push(i);
k--;}//this will return [4,3,2,1,0] another way is the for loop, which runs for a certain amount of time
var anotherLoop = [];
for (var m = 1; m < 6; m++) {
  anotherLoop.push(m);//this will return [1,2,3,4,5]
}//it doesn't have to increment, you can increase in other ways like below
var thirdLoop = [];
for (var t = 1; 1 < 10; t += 2) {
  thirdLoop.push(t);
}//this will return [1,3,5,7,9]
//next up iterate through an array with a for loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i <= 4; i++) {
 total += myArr[i];
}//this will produce 20 (sum of the numbers of the array)
//nesting loops, through the array and sub-arrays
function multiplyAll(arr) {
  var product = 1;//so it starts on one
for (var i = 0; i < arr.length; i++)//0 is the first array
for (var j = 0; j < arr[i].length; j++)//array within an array so we need j
product *= arr[i][j];
  return product;//this will multiply all the numbers together
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
//there's also a do...while loop which will always execute the first part of the code
var doWhile = [];
var i = 10
do {
  doWhile.push(i);
  i++;
} while (i < 10);//so this will only run once and return [10]
//recursion replaces loops by expressing the function in terms of itself...kinda confusing
function sum(arr, n) {
if (n <= 0) {
  return 0;
} else {
  return sum (arr, n - 1) + arr[n - 1];
}//this returns the sum of the first elements of an array arr
}/*sum([1], 0) should equal 0.
sum([2, 3, 4], 1) should equal 2.
sum([2, 3, 4, 5], 3) should equal 9. so arr value is 1st part and n is 3. I think it's (3+2) + [4] */
//now below is looking up specific information within profiles. Need to work it out better
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function lookUpProfile(name, prop){
for (let i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
          return contacts[i][prop];
      } else {
          return "No such property"
      }
  }
}
  return "No such contact";
}
lookUpProfile("Akira", "likes");
//moving on, to return a random number between 0 and not quite 1, use below
function randomNumber() {
  return Math.random();
}//you can use Math.Floor to round the number down, as you can never get a whole number if you * by something
function randomWholeNumber () {
  return Math.floor(Math.random() * 10);
}//we can return a random whole number between two specific numbers as below
function randomRange (mininum, max) {
  return Math.floor(Math.random() * (max - mininum + 1)) + minimum;
}//eg minimum is 1 and max is 10, and the random decibel is 0.5. 10 - 1 + 1 = 8, 8 * 0.5 is 4, 4 + 1 is 5
//moving on again, to parse a string and return an integer you can use parseInt()
function convertToInteger(str) {
  return parseInt(str);
  }
  convertToInteger("56");/*you can enter a 2nd argument in parseInt, which is the radix. This defines what
  base the number system it is converting to an integer. So 2 would convert it from binary range is 2-36*/
  function convertToInteger(str) {
    return parseInt(str, 2)
    }
    convertToInteger("10011");//this would return 19
    /*the conditional or ternary operator is a way of doing an if else statement in one line
    the syntax is a ? b : c. a is the condition, b is the code for true, c is the code for false*/
    function checkEqual(a, b) {
      return a === b ? "Equal" : "Not Equal";
      }
      checkEqual(1, 2);//so if they're equal "Equal is returned", if not "Not Equal" is returned
      //you can also chain these together as below
      function checkSign(num) {
        return num > 0 ? "positive"
        : num < 0 ? "negative"
        : "zero";
        }
        checkSign(10);//this should be self explanatory but basically, positive number returns "positive", negative returns "negative" and 0 returns "zero"
//using recursion to create a countdown or countup
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
  return countArray;
  }
}//this returns an array counting down from n to 1 eg n = 3 returns [3, 2, 1]. If it was .push it would be counting up 
//we can also create a range with two parameters represented by startNum and endNum
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) { //so this means it only returns one number if they're equal
    return [startNum];
  } else {  
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
  return numbers;
  }
};//otherwise we get an array eg startNum is 2 and endNum is 6 we get [2, 3, 4, 5, 6]
//let is like var but returns an error instead of letting you override previous code, so
var myNameIs = "Robert"
var myNameIs = "Tab"//myNameIs has been overriden to Tab
let daNameIs = "Robert"
let daNameIs = "Tab"//whereas this will return an error as there can't be two. You can enable Strict Mode as below
"use strict";//strict mode catches common coding mistakes and "unsafe" actions
/*another difference when declaring globally or locally, when let is declared locally (within a function say)
it won't appear globally*/
//const is similar to let but it is read-only which means once a value is assigned, it cannot be reassigned and will return an error if reassignment is attempted
//common practice is to name const with all CAPS
//so you'd use let in a function eg let i = 0 etc, as with const it can't change value
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2
  s[1] = 5
  s[2] = 7
}
editInPlace();//so this will now return [2, 5, 7]
//so const doesn't protect data from mutation, to do this you need Object.freeze
let mrFreeze = {
  name: "Mr Freeze",
  temperature: "Cold"
}; Object.freeze(mrFreeze);
mrFreeze.temperature = "Hot";
mrFreeze.weapon = "Freeze ray";
console.log(mrFreeze);//Hot and Freeze ray will result in errors and Mr Freeze will remain Cold
//arrow functions can make functions more concise
const discoStu = function() {
  const discoMusic = "Dance";
  return discoMusic;
}//this can be simplified as below to remove the function
const discoStu = () => {
  const discoMusic = "Dance";
  return discoMusic;
}//when there is no function body and only a return value you can also omit return and brackets as below
const discoStu = () => "Dance";
//you can also pass arguments into an arrow function (x * y  etc)
const multiMulti = (low, high) => low * high;
multiMulti(3, 13)//would return 39
//ES6 also allows for default parameters in functions
const increMental = (number, value = 1) => number + value;//if value is not specific it will count as 1
//rest parameter ... creates functions that take a variable number of arguments, so the below
const daSum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0)
}//can be simplified to
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}//...also works as the spread operator, to expand (or spread) arrays, it returns an unpacked array
//Destructuring assignment is handy for assiging values taken directly from an object
const user = { name: "Tab Jones", age: 80 };
const name = user.name;
const age = user.age;//this can be simplified as below
const { name, age } = user;//or you can give new variable names like below
const { name: userName, age: userAge } = user;//this also works with nested objects, see below comparison
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};//above is simplified to below (lowToday and highToday are new variable names, it would work without)
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
//this is a way of destructuring an array collecting the rest of the elements in a separate array
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);
//destructure the object in a function argument itself
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (stats) => (stats.max + stats.min) / 2.0;// this is simplified to below
const half = ({max, min}) => (max + min) / 2.0; 
//template literals, can insert variables within strings using ${}. Needs to be within ` not " or '
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
   const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}//so this iterates to get the relevant failure message within the string
const failuresList = makeList(result.failure);
//object property shorthand can make literal declarations more concise, rather than this
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};//we can shorthand to this
const createPerson = (name, age, gender) => {
  return ( { name, age, gender });
};//in ES6 you can make functions more concise by removing the function keyword and colon
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);//this is before

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);//and this is after
//you can use class syntax to create objects, it replaces the constructor function, so this
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');//would become
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');//another example is below
class Vegetable {
  constructor(name) {
    this.name = name
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
/*getters and setters
getters obtain values from an object, setters set the value of a property within the object*/
class Thermostat {
  constructor(heat) {
    this.heat = heat
  }
  get temperature() {
    return 5/9 * (this.heat - 32); //this converts the farenheit reading to celsius
  }
  set temperature(celsius) {
    this.heat = celsius * 9 / 5 + 32; //this converts the celsius reading to farenheit
  }//all fairly self-explanatory
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
//module script - this is HTML code that enables the stuffs I'm about to learn
/*<html>
  <body>
<script type = "module" src="index.js"></script>
  </body>
</html> */
//you can export functions from a file to use in different files, you can put export at the start of anything you want to export like below
export const add = (x, y) => {
  return x + y;
} //but a better way is to do an export statement, you can add multiple functions to this
const uppercaseString = (string) => {
  return string.toUpperCase();
}
const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { uppercaseString, lowercaseString };
//importing is similar, you just need the file pathway - ./ tells the import to look in the same folder as the current file
import { uppercaseString, lowercaseString } from './string_functions.js';  
uppercaseString("hello");
lowercaseString("WORLD!");
/*you can import all contents from a file using import *. This will create an object which contains all the exports from
the file in it meaning you can access this file's functions like any other object property, as below*/
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!"); 
//you can also use export default, which is also used to create a fallback value. You use this if only one value is being exported
export default function subtract(x, y) {
  return x - y;
} //a benefit of default is when you import the function you don't need to use {}s
import subtract from "./math_functions.js";
subtract(7,4);
//promise is used as a constructor function with 2 parameters - resolve and reject. makeServerRequest is the only bit that could change name
const makeServerRequest = new Promise((resolve, reject) => {});//this is not complete so stuck in pending stage
//it works like a function, as below
const breakStyleOverload = new Promise((resolve, reject) => {
  let breakStyleResponse;
  if (breakStyleResponse) {
    resolve("Fatty K");
  } else {
    reject("Shottas");
  }//this has returned strings, but it could return anything such as objects
});
//can use .then to handle a fulfilled promise
const breastMilky = new Promise((resolve, reject) => {
  //responseMilky is set to true representing a successful response from a server
  let responseMilky = true;
  breastMilky.then(result => {
  });
  console.log(result)//this logs result to the console
  if(responseMilky) {
    resolve("Marmalade");
  } else {
    reject ("Los Angeles");
  }
});//.catch is used to handle a rejected promise, see the same code as above but with false
const breastMilky = new Promise((resolve, reject) => {
  //responseMilky is set to false representing a successful response from a server
  let responseMilky = false;
  breastMilky.catch(error => {
  });
  console.log(error)//this logs error to the console
  if(responseMilky) {
    resolve("Marmalade");
  } else {
    reject ("Los Angeles");
  }
});
//you can use .test() to find a word within a string
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); //this would return true
//it needs to be a literal match, hello or HELLO wouldn't work
// to search for multiple patterns you can use |, as below
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;//this will return true if any of these pets are in the string
let result = petRegex.test(petString);
// to ignore case you can use i like this /example/i. This would return true for Example or examPLE etc.
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString); // this is true
/*to actually extract the match you can use .match
match syntax is the opposite of test*/
'string'.match(/regex/);
/regex/.test('string');
let extractJackson = "Extract the word Jackson from this string.";
let jacksonRegex = /Jackson/;
let result = extractJackson.match(jacksonRegex);// this should extract Jackson
//you can use g to find more than the first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex); //this would return both twinkles
/* . is wildcard like on SITS, although unlike SITS it can go before or after
/hu./ would return hum hug etc, /.un/ would return fun sun run etc*/
//if you want to only find a specific set of characters you can put them inside []s
let daQuote = "Hey, did you see Chris Hoy ride through the hay?";
let vowelRegex = /h[aeo]y/i;
let result = daQuote.match(vowelRegex); //this would return Hey Hoy and hay
//you can match a group of letters by using -, so [a-n] would match letters a to n
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); // this returns all the letters including repeats
// - also works for numbers like [4-9] etc. You can combine letters and numbers like this [f-p1-8]
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex); 
//if you want to find characters that don't match your search you can use ^
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex); // this would return blnd mc. (including special characters like .)
/* you can use + character to match a character or group of characters that appears one or more times in a row
so it would return ["aa"] for aabc but ["a", "a"] for abab as there is a b between them*/
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
//to match characters that appear 0 or more times you use * like /go*/
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
/*assuming cheweiQuote is Aaaaaaaargh!, this would return Aaaaaaaa
lazy matching - finds the shortest possible match rather than the default greedy which finds the longest
this uses the ? sign*/
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[a-z]*?1>/; // this will return <h1>, the ? means it won't return any of the [a-z] because lazy
let result = text.match(myRegex);
//Using ^ outside of []s will search for patterns at the beginning of strings
let firstSebulba = "Sebulba is first.";
let regexSebulba = /^Sebulba/;
regexSebulba.test(firstSebulba); // this will return true
let alwaysWins = "He always wins. Sebulba.";
regexSebulba.test(alwaysWins); // this will be false
//the opposite is $ which searches for patterns at the end of strings and goes after the term /example$/
/* \w searches for all, shorthand for [A-Za-z0-9_]
\W does the opposite and searches for everything except the above*/
// \d is for all numbers
// \D does everything except numbers
// \s searches for whitespace, including carriage return, tab, form feed, and new line characters, could think of it as [ \r\t\f\n\v]
// again \S does the opposite, everything except whitespace
/* you can specify the amount of times you want a character to appear with a range in {}s, like /Oh{3,6} no/
this returns Ohhh no, to Ohhhhhh no*/
// this doesn't have to have an upper or lower limit, you can leave it out like {4,} to do anything higher than 4
// to do a specific number you leave out the comma, like {4}
// ? after a character makes it option, like /favou?rite/ to get either British or US spelling of favourite
// positive lookup (?=...) ...is the required part, like /(?=\w{6,})
// negative lookup (?!...) ...is the part you don't want to be there
// we can check for groups of characters using regex using () see below example
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) .*Roosevelt/gi;
let result = myRegex.test(myString); // .* allows for middle names, has to go next to Roosevelt, no space
//you can use .replace() to search for and replace text
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // so this removes whitespace at the start or at the end
let result = hello.replace(wsRegex, "");
//when using console.log() you can insert typeof to determine the type of a variable
let seven = 7;
let three = "3";
console.log(typeof seven); //this is a number
console.log(typeof three); //this is a string
// .splice is like .push .pop etc except it can start anywhere and do consecutive
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let newArray = arr.splice(1, 4);
console.log(arr);
// this would return [ 2, 5, 2, 1 ], as it removes 4, 5, 1, 7, from the array
// the first parameter is where it starts, and the second is how many it removes
// the third parameter adds values in 
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);// this would return [10, 11, 12, 13, 14, 15]
//
function htmlColorNames(arr) {
arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// this replaces the first two with the alternatives entered
// .slice() copies elements to a new array up to but not including the 2nd number
function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//this returns ['warm', 'sunny'] - elements 2 up to 4 not inclusive
// you can use ... to insert all elements, this is the spread operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
console.log(spreadOut()); // learning to code is fun
// indexOf checks for the presence of an element in an array
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1 as this is the first occurance of it
// a more complicated use of this below
function quickCheck(arr, elem) {
if 
(arr.indexOf(elem) >= 0){
  return true
}
else {
  return false
};
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// so if the element is found in the array it returns true, otherwise it returns false
//arrays can go very deep, the one below is 5 levels deep, it's just using random info
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [
  ['loop', 'shift', 6, 7, 1000, 'method'], ['boom', 'bang', 35]
  ],
  [    
  ['concat', false, true, 'spread', 'deep', 'array'], ['more', 'but', 356]],
  [[
  ['mutate', 1327.98, 'splice', 'slice', 'deeper', 'push'], [68, 24, 'numb']]],
  [[[
  ['iterate', 1.3849, 7, '8.4876', 'deepest', 'arbitrary', 'depth'], ['sonnet', 'sonic', 58]]]]
];
// dot notation can span levels as below
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity);
// you can use delete to remove values from an object
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods); // this will only return { apples: 25, bananas: 13, grapes: 35 }
// if you want to use .hasOwnProperty() you need to assign every value, as below
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
}; // below is the bit I worked out
function isEveryoneHere(obj) {
 if (obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') && obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Ryan')) {
  return true
 } else {
    return false
  };
}
console.log(isEveryoneHere(users));
// as well as has own property you can use in which comes up with an item within an object
function countOnline(usersObj) {
let result = 0;
for (let user in usersObj) {
if (usersObj[user].online === true) {
  result++;
}
}
  return result
}
// this is to return the number of users whose online property is set to true, like below
{
  Alan: {
    online: false
  }
  Jeff: {
    online: true
  }
  Sarah: {
    online: false
  }
} // this would return 1
//  Object.keys() can contain all the keys stored in an object, like so
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
return Object.keys(obj)
}
console.log(getArrayOfUsers(users));
// this returns [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
// to reverse a string you can use .split .reverse and then .join
function reverseString(str) {
  return str.split ("").reverse().join("");
}
reverseString("hello"); // this returns olleh
// script to factorialise a number 
function factorialize(num) {
  let total = 1
  for (let i = 1; i<= num; i++)
  total *= i;
  return total;
}
factorialize(5);
// should have done objects elsewhere but one thing is you can create a new object with the same properties
function Dog() { // <--- constructor function
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog(); // hound has all the same properties as dog, which can be accesed in the same way
// or you can set the base properties in advance to save time
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
  }
  let terrier = new Dog ("Doodoo", "blue");
// you can use instanceof to check if an object was created by a constructor (an instance of the constructor)
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(2);
myHouse instanceof House // this returns true
// following code adds the properties of an object to an array
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}// this would return ["name", "numlegs"]
// you can use prototype to define an object's property so that it stays without needing to be duplicated
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy"); // everything created from the Dog constructor now has 4 legs
// similar to adding the properties of an object to an array, if it has a prototype you do it as below
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
} // ownProps would return as ["name"] and prototypeProps would return as ["numLegs"]
//
// you can use the constructor property to check what kind of object it is
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
if (candidate.constructor === Dog) {
  return true;
} else {
  return false;
}
}
// you can set the prototype to an object which already has the properties to save time 
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
eat: function() {
  console.log ("slobbered on melegovic");
},
describe: function() {
  console.log ("My name is " + this.name);
}
};
// doing this erases the constructor however! You can avoid this by defining the constructor in the object
//so the above would become
Dog.prototype = {
  constructor: Dog,
  numLegs:4, // etc
}
// you can use isPrototypeOf to check if an object is a prototype of something
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle); // this returns true
// Prototypes are objects so they can also have prototypes, like stack up it 
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype); // yields true
/* don't repeat yourself is a principle in coding
you can create a supertype (or parent) of an object if all objects will have the same property to save writing it out*/
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat, 
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
};
function Animal() { }
Animal.prototype = {
  constructor: Animal,
eat: function() {
  console.log("nom nom nom");
}
}; // this saves you writing the eat function for both animals
// a way to create a new object and assign it a prototype
let squid = Object.create(Cephalopod.prototype);
// you can manually set an object's constructor like below
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
// you can still add methods to an object in addition to inherited methods
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};

let beagle = new Dog(); // so Dog inherits Animal properties but also has bark
// you can also override this way, it goes up in levels, so beagle has first priority, then Dog, then Animal etc
// mixin gives the same property to objects that may not sure other properties or be unrelated, eg
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function () {
    console.log("gliiiiiiiide")
  }
};
glideMixin(bird);
glideMixin(boat);// now they can both glide despite not sharing other properties
// you can make aspects of your objects private by creating them within the constructor function like below
function Bird() {
  let weight = 15; // this is where you define it within the function
this.getWeight = function() {
  return weight;
}
}
// you can execute a function immediately by putting ()s around it and leave the function ()s blank
(function () {
  console.log("A cozy nest is ready");
})

();
// you can also use this to related functionality into a single object
let motionModule = (function () {
  return {
    floatMixin: function(obj) {
      obj.float = function () {
        console.log("Float like a boss");
      };
    },
    bounceMixin: function(obj) {
      obj.bounce = function () {
        console.log("Bounce a ball");
      };
    }
  }
}) (); // this puts float and bounce both into motion, you can then use it as below
motionModule.floatMixin(duck);
duck.float();
// using slice to check if target is the same as the end of str
function confirmEnding(str, target) {

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
// to repeat a given string for num times, see below using recursion
function repeatStringNumTimes(str, num) {
  var repeat = "";
 if (num < 1) {
   return ""
 } else  {
 return str + repeatStringNumTimes(str, num - 1) // so this gives us the original string and then adds it on another num - 1 times to get the right amount
 }
 }
 repeatStringNumTimes("abc", 3);
 //this is a weird one, remove all 'falsy' values from an array - false, null, 0, "", undefined, and NaN
 function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);
// another odd one, return the earliest number at which num could enter arr, so for below it's 1 (40 is 0, so 50 could be 1 with 60 as 2)

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
  return a - b;})
//the above sorts the array into numerical order if it's not already
  for (let i = 0; i <= arr.length; i++) {
  if (arr[i] >= num) 
   return i;
    }  return arr.length;
}

getIndexToIns([40, 60], 50);
// example of how to use map below to return the title and rating from array
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

// Only change code above this line

console.log(JSON.stringify(ratings));

//using the same array as above, this returns only the films with a rating above 8 on IMDB
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
var filteredList = ratings.filter(Title => Title.imdbRating*1 >= 8);
console.log(filteredList);
//
const ratings = watchList.map(({ Director: director, imdbRating: rating }) => ({director, rating}));
var filteredList = ratings.filter(Title => Title.director !== "James Cameron");
var averageRating = filteredList.reduce((sum, Title) => sum + (Title.rating*1) / 4, 0);

const ratings = watchList.map(({ Director: director, imdbRating: rating }) => ({director, rating}));
  var filteredList = ratings.filter(Title => Title.director !== "James Cameron");
  var averageRating = watchList.reduce((sum, Title) => sum + (Title.imdbRating*1) / 4, 0);
/*
this code is to filter out everything except positive integers and then square them*/
const squareList = arr => {

  const filtering = arr.filter(x => x > 0 && x % 1 === 0) // filter out negative numbers and decimals
const mapping = filtering.map(x => x ** 2) // square the remaining array x ** y as power of is useful

return mapping;
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
//sort function below

function alphabeticalOrder(arr) {
  // Only change code below this line
return arr.sort(function(a, b) {
  return a === b ? 0 : a < b ? -1 : 1; //to do it in reverse order would be the other way around a < b ? 1: -1;
})

  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); // this returns the array in alphabetical order

//working on
function splitify(str) {
  // Only change code below this line
return str.split(/\W/g)
  // Only change code above this line
}
splitify("Hello World,I-am code");
// join is used to join the elements of an array to create a string
function sentensify(str) {
  // Only change code below this line
var booBoo = str.split(/\W/); // this is to split it into an array
var nowBoo = booBoo.join(" "); // and then this to join em
return nowBoo

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");

//converts (" Winter Is  Coming") to winter-is-coming, and the like
// Only change code below this line
function urlSlug(title) {
  var magMa = title.toLowerCase();
  var boBa = magMa.trim(); // this is remove the whitespace at the start
  var slugMa = boBa.split(/\s+/);
  var badMa = slugMa.join("-");
  return badMa
  
  }
  // Only change code above this line
  console.log(urlSlug(" Winter Is Coming"))
  // .every checks an array to see if every element passes a particular test, as below
  function checkPositive(arr) {
    // Only change code below this line
    const belowThresh = (currentValue) => currentValue >= 0;
  return arr.every(belowThresh)
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  //you could change .every for .some to see if any element passes the test
  //currying is effectively reducing the amount of arguments in a function by passing them into multiple nested functions
  function multiply(a, b, c) {
    return a * b * c;
} // this is uncurried
function multiply(a) {
  return (b) => {
      return (c) => {
          return a * b * c
      }
  }
} // this is curried, why it's better remains to be seen
//or in another form, this is what is happening
const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
log(result); // 6
