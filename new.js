const Quote = require('inspirational-quotes');

var cowsay = require("cowsay");

const args = {
    text : Quote.getRandomQuote(),
    e : "uu",
    T : "U"
};

console.log(cowsay.think(args));