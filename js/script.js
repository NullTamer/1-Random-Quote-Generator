/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
let quotes = [
  //array holding quote objects
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "Planet Earth",
    year: "100 BC",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation: "Planet Earth 2",
    year: "200 BC",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    source: "Winston Churchill",
    citation: "Planet Earth 4",
  },
  {
    quote:
      "We burn the present for the sake of a brighter future, and act surprised when all it holds is ash",
    source: "Zack Morrison",
    year: "500 BC",
  },
];

console.log(quotes); //prints out the array in console

// getRandomQuote function
function getRandomQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length); //Randomizes a quote
  return quotes[quoteIndex]; //returns said quote
}

//printQuote function
function printQuote(message) {
  let randomQuote = getRandomQuote();
  var message = "";
  message += "<p class='quote'>" + randomQuote.quote + "</p>";
  message += "<p class='source'>" + randomQuote.source;
  if ("citation" in randomQuote) {
    //checks for citation property
    message += "<span class='citation'>" + randomQuote.citation + "</span>"; // appends citation value
  }
  if ("year" in randomQuote) {
    //checks for year property
    message += "<span class='year'>" + randomQuote.year + "</span>" + "</p>"; //appends year value
  }

  document.getElementById("quote-box").innerHTML = message; //displays html
}

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false); //calls printQuote when show another quote is clicked
