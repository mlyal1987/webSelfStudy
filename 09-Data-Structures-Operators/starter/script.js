'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Destructuring from a function
  //we are destructuring right away in the function
  //there is only one argument (object) passed to the function, not 4 arguments
  //we can also assign default values in case a parameter cannot be destructured
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    // console.log(mainIngredient, otherIngredient);
    // console.log(otherIngredient);
    console.log(
      `Here's your pizza with ${mainIngredient} and ${otherIngredient}`
    );
  },
};

///////////////////////////////////////

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization
// const passenger = 'vIctor';
// const nameLower = passenger.toLowerCase();
// const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
// console.log(correctName);

// const nameFixer = function (name) {
//   const n = name.toLowerCase();
//   const nn = n[0].toUpperCase() + n.slice(1);
//   console.log(nn);
// };
// nameFixer('eLiana');
// nameFixer('esteBAN');

// //comparing emails
// const email = 'hello@victor.io';
// const loginEmail = '  hello@Victor.Io \n';
// const lowerEmail = loginEmail.toLowerCase().trim();

// email === loginEmail
//   ? console.log('addresses are the same')
//   : console.log('addresses are not the same');

// //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// const newAnnouncement = announcement.replaceAll('door', 'gate');
// console.log(newAnnouncement);

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('0neo'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));
// console.log(plane.endsWith('neo'));
// console.log(plane.includes('0n'));
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife', 'guns', 'gun', 'knives')) {
//     console.log('Your baggage is not allowed in the plane');
//   } else {
//     console.log('Your baggage IS allowed in the plae');
//   }
// };
// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('I have a laptop, some food and snacks');

// console.log(typeof plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.slice(4));
// console.log(typeof airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));
// const checkMiddelSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   s === 'B' || s === 'E'
//     ? console.log('You have a middle seat')
//     : console.log('You do not have a middle seat');
// };
// checkMiddelSeat('11B');
// checkMiddelSeat('23C');
// checkMiddelSeat('50E');
// checkMiddelSeat('09A');

//WORKING WITH STRINGS PT.3 ------------------------------------------------------------

//Split - allows to split a String into multiple parts
// console.log('a+very+nice+String'.split('+'));
// console.log('Victor Lucero'.split(' '));
// const [firstName, lastName] = 'Victor Lucero'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('victor lucero');

// //padding a string
// //adding characters
// const message = 'Go to gate 23!';
// //we type first the amount of characters that we need, then the character to fill it up with.
// //we can also add characters to the end.
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Victor'.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard('7665 6776 2887 6793'));
// console.log(maskCreditCard('3433678567769673'));

// //repeat
// //allows to repeat a string multiple times
// const message2 = 'Bad weather... All departures delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`The are ${n} planes in line ${'🛩️'.repeat(n)}`);
// };
// planesInLine(1);
// planesInLine(2);
// planesInLine(3);
// planesInLine(4);

//WORKING WITH STRINGS PT.2 ------------------------------------------------------------

// const airline = 'TAP Air Portugal';

// //changing case of a String
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// //fix capitalizacion in name
// const passenger = 'vIctor'; // Victor
// //we create a variable and convert it to lower case
// const passenderLower = passenger.toLowerCase();
// //we create a new variable and convert to upper case the first index [0]
// //and join it with the rest of the lower case variable
// const passengerCorrect =
//   passenderLower[0].toUpperCase() + passenderLower.slice(1);
// console.log(passengerCorrect);

// //comparing emails
// const email = 'hello@victor.io';
// //the email provided (with errors)
// const loginEmail = ' Hello@Victor.io \n';
// //changing it to lower case
// const lowerEmail = loginEmail.toLowerCase();
// //trimming the email
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// //or we can do it in one go
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// //replacing parts of a String
// //Strings cannot be mutated, a new String is created
// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', 'S').replace(',', '.');
// console.log(priceUS);

// //we can use "replace" but it only replaces the first occurence
// const announcement = 'All passngers come to boarding door 23. Boarding door 23';
// console.log(announcement.replaceAll('door', 'gate'));

// //Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); //returns a boolean
// console.log(plane.includes('Boeing'));

// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// //example
// //checking if a baggage have prohibited items
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and a camera');
// checkBaggage('Got some snacks and a gun for protection');

//WORKING WITH STRINGS PT.1 ------------------------------------------------------------

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// //logging index item
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// //another way to show the item in position
// console.log('B737'[0]);

// //getting the size of the String
// console.log(airline.length);
// console.log('B737'.length);

// //get position number
// console.log(airline.indexOf('r'));

// //get last position of a character
// console.log(airline.lastIndexOf('r'));

// //search entire words - 0 counts as the first index - case sensitive
// console.log(airline.indexOf('Portugal'));

// //extract parts of a String
// //the slice method will "slice" from the typed index. We get a substring (part of a String)
// console.log(airline.slice(4));

// //extracting - we can also type and end character. It will stop before the specified index
// console.log(airline.slice(4, 7));

// //Extracting the first word
// //we need the 0 index, then we find the first appearance of " ".
// console.log(airline.slice(0, airline.indexOf(' ')));

// //extracting the last word
// //we user lastIndexOf in order to find the last appearance of " ".
// //then we add 1 to the index
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// //extracting - we can start counting from the end
// console.log(airline.slice(-2));

// //extracting with negative values
// console.log(airline.slice(1, -1));

// //writing a function that checks if an airplane seat is in the middle
// //B and E are middle seats
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   s === 'B' || s === 'E'
//     ? console.log("You've got the middle seat")
//     : console.log("You don't have the middle seat");
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
//The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // -- 1 --

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // -- 2 --

// gameEvents.delete(64, '🔶 Yellow card');
// console.log(gameEvents);

// // -- 3 --

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // -- 4 --

// for (const [min, event] of gameEvents) {
//   min < 45
//     ? console.log(`[FIRST HALF] ${min}: ${event}`)
//     : console.log(`[SECOND HALF] ${min}: ${event}`);
// }

//WHICH DATA STRUCTURE TO USE?------------------------------------------------------------

//Source of data
//1. From program itself
//2. From UI (users)
//3. External sources (APIs)

//For simple lists: Arrays - Sets
//ARRAYS:
//- When needing and ordered list of values
//- Use when you need to manipulate data

//SETS:
//- Use when you need to work with unique values
//- When high-performance is really important
//- Use to remove duplicate from arrays

//For key value pairs: Objects or Maps

//OBJETCS:
//- More "traditional" key/value store
//- Easier to write and access values with dot notaion
//- Use when you need to include functions (methods)
//- Use when working with JSON (convert to map)

//MAPS
//- Better performance
//- Kays can have any data type
//- Easy to operate
//- Easy to iterate
//- Easy to compute size
//- Use when you simply need to map key to values
//- Use when you need keys that are not strings

//MAPS ITERATION -----------------------------------------------------------------------

//create and fill up a map
// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// //convert objects to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// // console.log(answer);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// //Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

//MAPS -----------------------------------------------------------------------

//Data structure to maps values to keys
//data is stored in key value pairs
//in maps, the keys can have any type

//create a map (empty)
// const rest = new Map();

// //fill up the map
// //key and a value
// //maps return the
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firence, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open, 11')
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// //retrieving information from a map
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// //check if a map contains a certain key
// console.log(rest.has('categories'));

// //delete element from a map
// rest.delete(2);
// console.log(rest);

// //check the size of a map
// console.log(rest.size);

// //remove all elements from a map
// // rest.clear();
// // console.log(rest);

// //use arrays or objects as map keys
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// //the following array will not result in 'Test' because they are different in the heap memory
// console.log(rest.get(arr));

//SETS -----------------------------------------------------------------------

//A set is a collection of unique values
//cannot have duplicates

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// //Strings are iterable
// const victorSet = new Set('Victor');
// console.log(victorSet);

// // check how many different elements there are on a set

// console.log(ordersSet.size);

// // checking if an element exists in a set (true - falso)
// console.log(ordersSet.has('Bread'));

// // adding an element to a set
// ordersSet.add('Garlic Bread');

// // this code will be ignored (only different elements can exist in a set)

// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// // deleting an element from a set
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // delete all elements of a Set
// ordersSet.clear();
// console.log(ordersSet);

//retrieving elements from a set
//unlike an array, there are no indexes in sets
//there are no way no get values out of a set
//there is no need for it because all elements are unique
//we only need to know is a value exists in a set

// console.log(victorSet.has('r'));

//since sets are iterable we can loop them
// for (const order of ordersSet) console.log(order);

//example
//let's say we have an array of a restaurant staff
// const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];

//we would like to have an array with the unique elements
//additionally, we will convert the result to an array by wraping the new set into square brackets
// and using the spread operator
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//another way to find how many unique elements there are in an array
// console.log(new Set(['waiter', 'chef', 'manager', 'waiter', 'chef']).size);

//counting how many unique letters there are in a String

// console.log(new Set('Victor Lucero').size);

//LOOPING OBJECTS: KEYS, VALUES AND ENTRIES ----------------------------------

// //Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //Property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

/////////////////////////////////////////

//OPTIONAL CHAINING ----------------------------------

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //without optional chaining
// //throws an error because "mon" does not exist
// // console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// //only if the property before the question mark exists then the following property will be red
// //otherwise "undefines" will be the result
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// //example
// //we will use the nullish coalesing operator because on sat, the rest opens at midnight
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// //if the day does not exist in the object, it will be undefined
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //methods
// //we can check if a method exists before we call it
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');

// //Arrays
// //we can check if an array is empty
// //values before the question markwill be checked if they exists
// const users = [{ name: 'Vic', email: 'vic@mail.com' }];

// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');

//ENHANCED OBJECT LITERALS ----------------------------------

//enhancements to ES6
//1. we can create objets outside objects, just type the name of the object as a property
//2. Functions no longer need a property name, just create the function
//3. we can compute property names instead of writing them manually

//FOR-OF LOOP ----------------------------------
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//new way to loop an array
// for (const item of menu) {
//   console.log(item);
// }

// //how to get the index
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

//LOGICAL ASSIGNMENT OPERATOR ----------------------------------

// const rest1 = {
//   name: 'Capri',
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

//OR assignment operator assigns a value to a variable if the variable is falsy
//rest1.numGuest is 0 (falsy) so it it assigned 10
//rest2.numGuest is falsy, so it is assigned 10
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//nullish assignment operator (null or undefined)
//rest1.numGuest in rest1 will be assigned to 0
//rest2.numGuest is undefined so it is assgined 10
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

//AND assignment operator
//it short circuits when the first value is falsy
//in the following example we aim to anonimize the owner's names
//rest1.owner is undefined
// rest1.owner = rest1.owner && '<ANONYMUS>';
// rest2.owner = rest2.owner && '<ANONYMUS>';

//in the following, rest1.owner will not appear
// rest1.owner &&= '<ANONYMUS>';
// rest2.owner &&= '<ANONYMUS>';

// console.log(rest1);
// console.log(rest2);

//NULLISH COALESCING OPERATOR ----------------------------------
//works with the idea or concepts of NULLISH values instead of falsy
//nullish values: null and undefined (NOT 0 or '')
//only nullish values will short circuit the evaluation

//0 is a falsy value, so in the following, guests variable will change to 10
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// in the following, the variable will be set to 10
//if the first part is nullish, then the variable changes
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//SHORT CIRCUITING ----------------------------------------
//using logical operators
//they can use ANY DATA TYPE
//they can return any data type

//----OR-----
//the result is 3 since it is a truthy value
//if the first operant is truthy, then the other operant will not be evaluated
// console.log(3 || 'Victor');
// console.log('' || 'Victor');
// console.log(true || 0);
// console.log(undefined || null);
// //'hello' is the first truthy value in the following chain of operants
// console.log(undefined || 0 || '' || 'hello' || null);

// restaurant.numGuests = 23;

// //in the following: numGuests does not exists (so far), so it get assimed to 10
// //after restaurant.numGuests is created, then the variable guest# can be used

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //PROBLEM: if we have the possible value of 0 zero, then guest# will always be 10
// //for this, we have the nullish operator

// //----AND-----
// //opposite of the OR operator
// //AND operator short-cicuits when the first value is falsy and returns the falsy value
// //if no falsy value is found, the last value is returned
// console.log(0 && 'Victor');
// //in the following, both values are truthy, 'Victor' is the last value, so it is returned
// console.log(7 && 'Victor');
// console.log('Hello' && 23 && null && 'Victor');

// //in the following we are first checking if it exists, then we call it
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // in the following, we are doing the same thing
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// const guest2 = restaurant.numGuests || 10;
// console.log(guests2);

//REST PATTERN - REST PARAMETER ----------------------------------------

//rest pattern looks the same, but does the opposite from the spread operator
//the spread operator is to "unpack" an array - REST is to "pack" into an array

//1) Destructuring

//SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //REST, becuase on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// //the 1st and 2nd elements become a and b, the other become a new array
// console.log(a, b, others);

// //we can skip elements
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //REST in objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2. Functions
// //we can loop numbers as it is an array
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// //here we can add the elements of the array.
// //note thar we CANNOT type: add(x)
// const x = [23, 5, 7];
// add(...x);

// //we get the first element 'mushrooms' and an array of the rest ingredients
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

//THE SPREAD OPERATOR IS USED WHERE WE WOULD USE VALUES SEPARATED BY A COMMA
//THE REST OPERATOR IS USED WHERE WE WOULD USE VARIABLE NAMES SEPARATED BY A COMMA

//SPREAD OPERATOR ----------------------------------------

//use it to expand an array into all it elements
//use it when the elements of an array are needed individually

//in this example, we manually add the elements from "arr" into the new array "badNewArr"
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //with the SPREAD operador, we can simplify this action
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// //using the spread operator show all items separately
// console.log(...newArr);

// //adding elements to an array
// //Here we are creating a new array from scratch
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //the spread operator takes all elements from an array but does not create new variables
// //we can only use it in places where we would use values separated by a comma

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //join two arrays or more together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //spread operator works on all "iterables" (arrays, strings, maps, sets, NOT objects)
// //in the following example we are showing the letters from a string as individual items
// const str = 'Victor';
// //letters is an array
// const letters = [...'Victor'];
// console.log(letters);
// //this is a string, not an array
// console.log(...str);

// //using template literals - not allow since that is not the place where we can
// //typle multiple elements separated by a comma

// //creating a function that will receive the 3 ingredients via prompt window

// // const ingredients = [
// //   prompt('Ingredient #1'),
// //   prompt('Ingredient #2'),
// //   prompt('Ingredient #3'),
// // ];
// // console.log(ingredients);

// // //here we are providing an array as individual elements
// // restaurant.orderPasta(...ingredients);

// //OBJECTS
// //here we created a new object from restaurant and added two more items

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// //creating a copy of an object
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//DESTRUCTURING OBJECTS ----------------------------------------

// //in objects, order of elements does not matter (openingHours is the last element)
// //properties names are the same as variable names
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //changing variable names from the propierty names
// //the variable names will be: restaurantName, hours and tags
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //defining default values
// //"menu" does not exist, so it gets teh default value "[]"∂
// //"starterMenu" does exist, so it gets changed to "starters" and does not get the default "[]"
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// //when we start a line with "{}" javascript expects a code block
// // {a,b} = obj; will show an undefined error
// //we need to wrap the line with "()"
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// //"fri" is an object inside "openingHours"
// //we are assigning a new name to open and close
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //we are passing an object as an argument
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //here we are not defining "mainMenu[mainIndex]" or time
// //so it gets the default value assigned in the function
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

//DESTRUCTURING ARRAYS ----------------------------------------
// console.log('Destructuring an array');

// console.log('declaring the variables in an array');
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(y);

// console.log('Obtaining first and second elements');
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// //obtaining the third element -> leave 'holes' in the destructuring declaration
// const [, , third] = restaurant.categories;

// //switching (mutating) variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //recevie 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested arrays destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //assign default values -> r becomes 1
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

////////////////////////////////////////

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

//   printGoals: function (...players) {
//     console.log(`${players.length} goals were scored.
//     Players that scored: ${players}`);
//   },
// };

/////////////////////////////////////////////
//CHALLENGE #2

//1. Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")

// const players = Object.values(game.scored);
// for (const [goal, player] of players.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

//another way
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

//02. Use a loop to calculate the average odd and log it to the console (We already
//studied how to calculate averages, you can go check if you don't remember)

// const odds = Object.values(game.odds);
// let avg = 0;
// for (const odd of odds) avg += odd;
// avg /= odds.length;
// console.log(avg);

//03. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

/////////////////////////////////////////////
//CHALLENGE #1

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2. The first player in any player array is the goal keeper and the others are field players.
// //For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
// //and one array ('fieldPlayers') with all the remaining 10 field players

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams(22 players)

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich(team1)used 3 substitute players.
// //So create a new array ('players1Final') containing all the original team1 players plus 'Thiago',
// //'Coutinho' and 'Perisic'

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5. Based on the game.oddsobject, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and prints
// //each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// game.printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// // 7. The team with the lower odd is more likely to win. Print to the console which
// //team is more likely to win, without using an if/else statement or the ternary operator.

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 1 is more likely to win');

/////////////////////////////////////////////

// const parentDetails = {
//   //nested object
//   father: { fatherName: 'Victor', fatherLastName: 'Lucero', age: 60 },
//   mother: { motherName: 'Elizabeth', motherLastName: 'de la Cruz' },
// };

// const student = {
//   id: 5001,
//   name: 'Victor', // Using string quotes
//   age: 36,
//   isHosteler: true,
//   courses: ['JAVA', 'ReactJS', 'MYSQL'], //array

//   parentDetails,
//   // parentDetails: {
//   //   //nested object
//   //   fatherName: 'V.M. Lucero',
//   //   motherName: 'B.E. de la Cruz',
//   // },

//   presentStudent: function ({ name, age }) {
//     console.log(`${name} is a student here and is ${age}`);
//   },
// };

// // student.presentStudent({ name: 'Victor', age: 36 });

// const data = Object.keys(parentDetails);
// console.log('-------------');
// console.log('Nombre de las propiedades');
// console.log(data);

// const valores = Object.values(parentDetails);
// console.log('-------------');
// console.log('Mostrando los valores');
// console.log(valores);

// const entradas = Object.entries(parentDetails);
// console.log('-------------');
// console.log('Objeto entero');
// console.log(entradas);

////////////////////////////////////////////////////////////////

// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document
  .querySelector('button')
  .addEventListener('click', function (variables) {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split('_');
      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
  });

//organizing the following array
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
