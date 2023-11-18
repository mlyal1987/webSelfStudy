'use strict';

//Default parameter

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// console.log(bookings);

//////////////////////////////////////
//How passing arguments work value vs reference

const flight = 'LH234';
const victor = { name: 'Victor Lucero', passport: 2343345487 };

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 2343345487) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, victor);
console.log(flight);
console.log(victor);

const newPassPort = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassPort(victor);
checkIn(flight, victor);
