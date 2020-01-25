// Write a function that prints the numbers from 20 to 50.
function numbersBetween(start, end){
    for(var i = start; i <= end; i++){
      console.log(i);
    }
  }
  
  // Write a function that prints the numbers 10 to 1, backwards
  function backwardNumbers(start, end) {
    if (start > end) {
      [start, end] = [end, start];
    }
  
    for(var i = end; i >= start; i--){
      console.log(i);
    }
  }
  
  // Write a function that prints the event number 1 to 100.
  function evenNumbers(start, end) {
    if (start > end) {
      [start, end] = [end, start];
    }
  
    for(var i = start; i <= end; i++){
      if(i%2 == 0) {
        console.log(i);
      }
    }
  }
  
  // Write a function that prints the prime numbers less than 100.
  function primeNumbersLessThanNum(num){
    console.log(2); // The only prime even
  
    var prime = true;
    for(var i = 3; i < num; i += 2){
  
      /* Any multiplier greater square root of the number tested
      will be greater than the namber. So we do not have to test */
      for(var j = 3; j <= Math.sqrt(i); j++){
        if(i%j === 0){
          prime = false;
          break;
        }
      }
      if(prime){
        console.log(i);
      }
      prime = true;
    }
  }
  
  // Write a function that takes a string and prints out the count of how many times each character appears.
  function countChar(str) {
    var dict = {};
    var letter = "";
    for(var i = 0; i < str.length; i++) {
      letter = str[i];
      if(!(letter in dict)){
        dict[letter] = 1;
      }else {
        dict[letter]++;
      }
    }
  
    for(const k of Object.keys(dict)){
      console.log(`${k}: ${dict[k]}`);
    }
  }
  
  // Write a function to compute the Fibonacci numbers.
  function fibo(num){
    if(num === 0){
      return;
    }else if(num === 1){
      console.log(0);
    }else if(num === 2){
      console.log(0);
      console.log(1);
    }else{
      console.log(0);
      console.log(1);
  
      var a = 0;
      var b = 1;
      var c;
      for(var i = 2; i < num; i++){
        c = a+b;
        console.log(c);
        a = b;
        b = c;
      }
    }
  }
  
  /* Write a guess my number game: the game should be a function that creates a random number between 1 and 100. The user should have 10 tries to guess the number -- the number *does not* change until the user guesses it correctly, or the user has used up all their tries. After each guess, the function should tell the user if the guess was: correct, too high, or too low.
    - Extra challenge: create a webpage that the user can use to interact with the game. The page should display the previous guess should tell the user if they’ve won or lost, and should have a reset button to start the game over again. */
  
  function guessMyNumber() {
    var rdmNumber = Math.floor(Math.random()*99+1);
    var guess;
  
    for(var i = 0; i < 10; i++) {
      guess = prompt("Guess my number: ");
      guess = parseInt(guess);
  
      if(guess === rdmNumber) {
        console.log("Correct!");
        return;
      }else if (guess > rdmNumber) {
        console.log("Too high!");
      }else if (guess < rdmNumber) {
        console.log("Too low!");
      }else {
        console.log("Invalid input!");
      }
    }
  
    console.log(`End up tries. My number was ${rdmNumber}`);
  }