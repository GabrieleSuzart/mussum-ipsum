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
  function creatingParagraphs() {
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
    ];

    window.paragraphs = [];

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
          tempParagraph += "\n" ; // append the quote on a temp string
          paragraphs.push(tempParagraph);
          break;
        };
      };
    };

    console.log(paragraphs);
    sortParagraphs();
  };

/*
Sorting paragraphs
----------------- >
*/
  function sortParagraphs(){
    console.log('laps = ' + window.laps);
    for (var i = 0, result = ""; i < window.laps; i++){
      var max = paragraphs.length; // Define the max number of paragraphs
      // sort function
      var randomResult = getRandomNumber(min, max);

      var pTagBegin = "<p>",
      pTagEnd = "</p>",
      hTagBegin = "<h1>",
      hTagEnd = "</h1>";

      if (window.pTag == true) {
        toShow = pTagBegin + paragraphs[randomResult] + pTagEnd;
      } else if (hTag == true){
        toShow = hTagBegin + paragraphs[randomResult] + hTagEnd;
      } else{
        toShow = paragraphs[randomResult];
      }; 

      window.result += toShow;

      paragraphs.splice(randomResult, 1); //exlude the used value for the array
      max --; //decrease max getRandomNumber
    };
  };

  function showResult(){
    // Insert the classic Mussum Ipsum start if it's the first paragraph
    var mIpsumStart = "Mussum Ipsum, cacilds vidis litro abertis. ";

    console.log(result);
    document.getElementById("result").innerHTML = mIpsumStart+window.result;
  };
/*
Triggres
----------------- >
*/
  function mIpsumTrigger(){
    window.pTag = false,
    hTag = false;

    // How many paragraphs u need ?, this will be set by user
    window.turns = document.getElementById('turns').value;
    // window.turns = 200;

    // console.log('window.turns = ' + window.turns);
      // make sure that it will not call more tham 10 paragraphs
    if (window.turns < 10) {
      console.log('window.turns = ' + window.turns);
      window.laps = window.turns;
      creatingParagraphs();
      console.log('criou menos de 10 paragrafos e guardou na variavel');
      console.log('Imprime a variavel');     
      showResult();
    } else{
      for( ;window.turns >10; ){
        window.laps = 10;
        console.log('window.turns = ' + window.turns);
        creatingParagraphs();
        console.log('criou 10 paragrafos e guardou na variavel');
        window.turns -= 10;
        console.log('window.turns = ' + window.turns);
        if (window.turns < 10) {
          window.laps = window.turns;
          console.log('window.turns = ' + window.turns);
          console.log('criou menos de 10 paragrafos e guardou na variavel');
          creatingParagraphs();
          console.log('Imprime a variavel');            
          showResult();
        };
      };
    };
  };

// var window.turnsBt = document.getElementById('window.turns');
// window.turnsBt.click(console.log('click!'));

// function triggers(){
//   var window.turns = document.getElementById('window.turns').value;
//   console.log(window.turns);
//   sortParagraphs();
//   var kind = document.getElementById('window.turns').value;
//   console.log(window.turns);
// };
















