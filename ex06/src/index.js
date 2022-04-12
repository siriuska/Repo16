'use strict';

const firstName = (firstName) => firstName.toUpperCase();
const lastName = (lastName) => lastName.toUpperCase();


// console.log(firstName("tokyo"));
// console.log(lastName("aida"));


exports.firstName = firstName;
exports.lastName = lastName;