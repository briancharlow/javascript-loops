//Write a function to print numbers from 1 to 100, for multiple of three you should print “Fizz” instead of the integer and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
// Function to print numbers with FizzBuzz rules
function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
