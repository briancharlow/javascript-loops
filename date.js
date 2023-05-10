//Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Generate a random number between 1 and 10



let currentDate = new Date();


let month = currentDate.getMonth() + 1; // Months are zero-based
let day = currentDate.getDate();
let year = currentDate.getFullYear();

let formattedDate1 = month + '-' + day + '-' + year;
let formattedDate2 = month + '/' + day + '/' + year;
let formattedDate3 = day + '-' + month + '-' + year;
let formattedDate4 = day + '/' + month + '/' + year;


console.log(formattedDate1);
console.log(formattedDate2);
console.log(formattedDate3);
console.log(formattedDate4);
