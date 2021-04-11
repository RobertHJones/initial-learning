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
updateRecords(collection, 5439, 'artist', 'ABBA');
