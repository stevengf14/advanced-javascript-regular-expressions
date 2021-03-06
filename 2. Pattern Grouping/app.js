// ***************************************************************************************************************
// ****************************************** CASE INSENSITIVE PATTERNS ******************************************
console.log("\n\n****************************************** CASE INSENSITIVE PATTERNS ******************************************");

// i => makes no sensitive no uppercase and lowecase
var expression1 = /Hello World/i;

console.log(expression1.test("Hello world"));

// ****************************************************************************************************************
// *********************************************** PATTERN GROUPING ***********************************************
console.log("\n\n*********************************************** PATTERN GROUPING ***********************************************");

var expression1 = /Woo+(hoo+)+/i;
console.log(expression1.test("Woooohoooohooooohoooo"));

// ****************************************************************************************************************
// ************************************************* EXEC - MATCH *************************************************
console.log("\n\n************************************************* EXEC - MATCH *************************************************");

var expression1 = /\d+/.exec('Of the year 2022');
console.log(expression1);

console.log("Until 2032", match(/\d+/));