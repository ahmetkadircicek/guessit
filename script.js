let answer = Math.floor(Math.random() * 100 + 1);
let guesses = 0;

var input = document.getElementById("guessField");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});

document.getElementById("submitButton").onclick = function(){

  let guess = document.getElementById("guessField").value;
  document.getElementById("guessField").value='';
  guesses+=1;

  if(guess == answer){
    document.getElementById("result").innerHTML = (`${answer} is the Luckynumber. It took you ${guesses} guesses!`);
    document.getElementById("tryagain").innerHTML = ("Try again!");
    document.getElementById("tryagain").onclick = function(){
      guesses = 0;  
      answer = Math.floor(Math.random() * 100 + 1);
      document.getElementById("guessField").value='';
      document.getElementById("result").innerHTML = ('');
      document.getElementById("tryagain").innerHTML = ('');
    }
  }

  else if(guess < answer){
    document.getElementById("result").innerHTML = ("Too small!");
  }

  else{
    document.getElementById("result").innerHTML = ("Too large!");
  }
}