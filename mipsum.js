/* 
---------------
mipsum.js v0.2
---------------
Proudly made for mussumipsum.com by Diego Esteves
*/

/*
Function to sort a number
----------------- >
*/
  // Define the min and max value to sort
  var min = 1, 
      max = "";
  function getRandomNumber(min, max) { 
    n = Math.random() * (max - min) + min;
    return Math.round(n) -1; // 1 less of the total arrays to adjust with the array index
  }

/*
Creating paragraphs
----------------- >
*/
  // Define quotes
  var quotes = [
    "quote1",
    "quote2",
    "quote3",
    "quote4",
    "quote5",
    "quote6",
    "quote7",
    "quote8",
    "quote9",
    "quote10",
    "quote11",
    "quote12",
    "quote13",
    "quote14",
    "quote15",
    "quote16",
    "quote17",
    "quote18",
    "quote19",
    "quote20",
    "quote21",
    "quote22",
    "quote23",
    "quote24",
    "quote25",
    "quote26",
    "quote27",
    "quote28",
    "quote29",
    "quote30",
    "quote31",
    "quote32",
    "quote33",
    "quote34",
    "quote35",
    "quote36",
    "quote37",
    "quote38",
    "quote39",
    "quote40"
  ],
  paragraphs = [],
  mIpsumStart = "Mussum Ipsum, cacilds vidis litro abertis. ";

  var quotesLength = quotes.length,
      max = quotesLength; //redefine max value

  // It makes 10 paragraphs
  for (var y = 0; y < 10; y++){
    // 1 paragraph == 4 quotes
    for (var i = 0, tempParagraph = ""; i < 4; i++){
      // sort function
      var randomResult = getRandomNumber(min, max);

      var q = quotes[randomResult];
      tempParagraph += q + " "; // append the quote on a temp string
      quotes.splice(randomResult, 1); //exlude the used value for the array
      max --; //decrease max getRandomNumber

      if (i==3) {
        // Push the the tem string to the paragraphs array
        paragraphs.push(tempParagraph);
        break;
      };
    };
  };

  console.log(paragraphs);

  // How many times u need to loop, this will be set by user
  var turns = 10;

  for (var i = 0; i < turns; i++){
    var max = paragraphs.length; // Define the max number of paragraphs
    // sort function
    var randomResult = getRandomNumber(min, max);

    // Insert the classic Mussum Ipsum start if it's the first paragraph
    if (i == 0 ) {
      console.log(mIpsumStart + paragraphs[randomResult]);
    } else{
      console.log(paragraphs[randomResult]); //print the selected value;    
    };

    paragraphs.splice(randomResult, 1); //exlude the used value for the array
    max --; //decrease max getRandomNumber
  };

