const fs = require('fs');
const path = require('path');

//
const sprintf = require('sprintf-js').sprintf;

//this is our counter id stored in memory
var counter = 0;

// Private helper functions ////////////////////////////////////////////////////

// Zero padded numbers can only be represented as strings.
// If you don't know what a zero-padded number is, read the
// Wikipedia entry on Leading Zeros and check out some of code links:
// https://www.google.com/search?q=what+is+a+zero+padded+number%3F





const zeroPaddedNumber = (num) => {
  return sprintf('%05d', num);
};

const readCounter = (callback) => {
  // same as fs.readFile(path.join(__dirname, 'counter.txt'))
  fs.readFile(exports.counterFile, (err, fileData) => {
    if (err) {
      callback(0, null);
    } else {
      callback(Number(fileData), null);
    }
  });
};

const writeCounter = (count, callback) => {

  var counterString = zeroPaddedNumber(count);
  fs.writeFile(exports.counterFile, counterString, (err) => {
    if (err) {
      throw ('error writing counter');
    } else {
      console.log('counterstring', counterString);
      callback(counterString, null);
    }
  });
};

// Public API - Fix this function //////////////////////////////////////////////

exports.getNextUniqueId = () => {
  //first we want to write bc as of now that file does not exist, then we want to write

  readCounter((number) => {
    console.log('hey our num', number);
  });

  // writeCounter(counter, (data) => {

  // });


  counter = counter + 1;
  return zeroPaddedNumber(counter);
};



// Configuration -- DO NOT MODIFY //////////////////////////////////////////////

exports.counterFile = path.join(__dirname, 'counter.txt');
