// Numbers

// Converts string to integer
parseInt('123', 10); // 123 in decimal system
parseInt('11', 2); // 11 in binary system

// Unary + operator to convert strings to numbers
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16

//A special value called NaN 
// (short for "Not a Number") is returned 
//if the string is non-numeric:
parseInt('hello', 10);

1 / 0; //Infinity
-1 / 0; //-Infinity

isFinite(1 / 0); //false
isFinite(-1 / 0); //false
isFinite(NaN); //false

// Strings

// To find the length of a string
'hello'.length;

'hello'.charAt(0); //'h'
'hello, world'.replace('world', 'mars'); //"hello, mars"
'hello'.toUpperCase(); // "HELLO"

//Boolean

//false: false, 0, "", NaN, null, undefined
//true: all other values

Boolean(''); // false
Boolean(234); // true


// Variables

// let allows you to declare block-level 
// variables. The declared variable is available
// from the block it is enclosed in.


// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    // myLetVariable is only visible in here
}
  
// myLetVariable is *not* visible out here
  

// const allows you to declare variables whose 
// values are never intended to change. The 
// variable is available from the block it is 
// declared in.

const Pi = 3.14;
Pi = 1; //Error


// A variable declared with the var keyword is 
// available from the function it is declared in.


// myVarVariable *is* visible out here

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) { 
    // myVarVariable is visible to the whole function 
} 
  
// myVarVariable *is* visible out here 


//Operators

// String concatenation
'hello' + ' world'; // "hello world"

'3' + 4 + 5; //"345"
3 + 4 + '5'; //"75"

123 == '123'; //true
123 === '123'; //false (type)

1 == true; //true
1 === true; //false


// Control Structures

for (let value of array) {
    // do something with value
}

for (let property in object) {
    // do something with object property
}


// Objects

// Two ways to create an empty object

var obj = new Object(); // first way

var obj = {}; // second way, more convenient


// Object literal syntax can be used to 
// initialize an object in its entirety:

var obj = {
    name: 'Carrot',
    _for: 'Max',
    details: {
      color: 'orange',
      size: 12
    }
};

obj.details.color; // orange
obj['details']['size']; // 12

// The following example creates an object 
// prototype(Person) and an instance of that 
// prototype(you):

function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
// Define an object
var you = new Person('You', 24); 
// Creates a new person named "You" aged 24.


// Once created, an object's properties can 
// again be accessed in one of two ways:

// dot notation
obj.name = 'Simon';
var name = obj.name;

// And...

// bracket notation (calculated at run time)
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')


obj.for = 'Simon'; 
// Syntax error, because 'for' is a reserved word

obj['for'] = 'Simon'; 
// works fine


// Arrays

var a = ['dog', 'cat', 'hen'];
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101

for (const currentValue of a) {
    // Do something with currentValue
}

['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
    // Do something with currentValue or array[index]
});

// Append an item to an array
a.push(item);


// Functions

function add(x, y) {
    var total = x + y;
    return total;
}

// If no return statement is used (or an empty 
// return with no value), JavaScript returns 
// undefined.

add(); // NaN, no parameters
// You can't perform addition on undefined

add(2, 3, 4); // 5
// added the first two; 4 was ignored


// Let's re-write the add function to take as 
// many values as we want:

function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum;
}
  
add(2, 3, 4, 5); // 14


// Rest parameter syntax
// the variable args holds all the values that 
// were passed into the function.

function avg(...args) {
    var sum = 0;
    for (let value of args) {
      sum += value;
    }
    return sum / args.length;
}
  
avg(2, 3, 4, 5); // 3.5



// The avg() function takes a comma-separated
// list of arguments:

function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
}
  
avgArray([2, 3, 4, 5]); // 3.5


// But it would be nice to be able to reuse 
// the function that we've already created. 
// Luckily, JavaScript lets you call a function 
// with an arbitrary array of arguments, using 
// the apply() method of any function object:

avg.apply(null, [2, 3, 4, 5]); // 3.5


// JavaScript lets you create 
// anonymous functions:
var avg = function() {};


// hiding some local variables:

var a = 1;
var b = 2;

(function() {
  var b = 3;
  a += b;
})();

a; // 4
b; // 2


// Recursive functions

function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
      return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
      count += countChars(child);
    }
    return count;
}


// Custom Objects

function makePerson(first, last) {
    return {
      first: first,
      last: last
    };
}
function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}

var s = makePerson('Simon', 'Willison');
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"


// Reduce functions to 1
// Attach a function to object:

function makePerson(first, last) {
    return {
      first: first,
      last: last,
      fullName: function() {
        return this.first + ' ' + this.last;
      },
      fullNameReversed: function() {
        return this.last + ', ' + this.first;
      }
    };
}
  
var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"

// this refers to the current object

// We can take advantage of the this keyword 
// to improve our makePerson function:

function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
      return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function() {
      return this.last + ', ' + this.first;
    };
}

var s = new Person('Simon', 'Willison');


// The Best way:

function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};

// Person.prototype is an object shared by all 
// instances of Person. It forms part of a 
// lookup chain (that has a special name, 
// "prototype chain"): any time you attempt to 
// access a property of Person that isn't set, 
// JavaScript will check Person.prototype to 
// see if that property exists there instead.


// We can add extra methods to existing 
// objects at runtime:

var s = new Person('Simon', 'Willison');
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"


// Let's add a method to String that returns 
// that string in reverse:

var s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS




// Closures

function makeAdder(a) {
    return function(b) {
      return a + b;
    };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?


add5(6); // returns 11
add20(7); // returns 27