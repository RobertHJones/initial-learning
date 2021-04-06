//In-line comment
/*Multi-line comment use camelCase
see? */
var thisBeVar;
thisBeVar = 5;
var moVar;
moVar = thisBeVer;
//but it's better to do it all in one line as below
var a = 9;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 2;
c = c + "man!";
var addin = 10 + 10;
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
var varNest = [["Tolstoy", "Orwell", 4], ["Murakami", "Ryo", 7]]//multiple contents. Next up is indexes
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
var removeFromTheArray = theArray.pop();//theArray's value is now just ["Jack, 70] and remove's value is ["Dick", 40]