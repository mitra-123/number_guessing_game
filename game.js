var outputObj = document.getElementById("output");
var outputObj2 = document.getElementById("output2");
var outputObj3 = document.getElementById("hintText");
var rand;
var numGuesses;
var maxNum;
var user;
var guess;
var themeNum=1;
var count =0;

function start(){
    window.location.href = 'game.html';
}

function instructions(){
    window.location.href = 'instructions.html';
}


function initialize() {
   var status = true;
    while (status) {
        user = prompt("What is your name");

        if (user.trim()!== ""&&user !== null ) {
            status = false;
        }
        else{
            alert("Please input a username!");
        }
    }
    
    status = true;
    while (status) {
        numGuesses = parseInt(prompt("How many guesses do you want?"));

        if (numGuesses !== null && !isNaN(numGuesses)&&numGuesses>0) {
            status = false;
        }
        else{
            alert("Please input a valid number!");
        }
    }

    status = true;
    while (status) {
        maxNum = parseInt(prompt("What is the max number you want to guess up until (1-x)?"));

        if (maxNum !== null && !isNaN(maxNum)&&maxNum>0) {
            status = false;
        }
        else{
            alert("Please input a valid number!");
        }
    }
    rand = randomNum(parseInt(maxNum));
    outputObj2.innerHTML = "You have "+numGuesses+ " guesses left!";
    document.getElementById('output').textContent = "Welcome "+user+"!";
}

function userGuess() {

    count +=1
    if (count==1){
        outputObj3.innerHTML ="";
    }
    guess = parseInt(document.getElementById("N").value);
    numGuesses -=1;
    if(guess<0||guess>maxNum){
        document.getElementById('output').textContent = "Please put a number in range!";
        document.getElementById('output').style.color = '#FFC0CB'; 
        numGuesses +=1;
    }
    else if(numGuesses===0 && guess!= rand ){
        outputObj.innerHTML = "YOU LOST !<br> The number was "+rand;
        lose(themeNum);
        document.getElementById("guessButton").disabled = true; 
        document.getElementById("hint").disabled = true; 
        
        //insert function that takes user to losing page based on which theme is selected;
    }
    else if (guess===rand){
        outputObj.innerHTML = "Correct!";
        win(themeNum);
        document.getElementById("guessButton").disabled = true; 
        document.getElementById("hint").disabled = true; 
         //insert function that takes user to losing page based on which theme is selected;
    }
    else{
        document.getElementById('output').textContent = "Incorrect!";
        document.getElementById('output').style.color = '#e74c3c'; 
    }
    
    outputObj2.innerHTML = "You have "+numGuesses+" guesses left";
}
function lose(themeNum){
    if (themeNum==1){
        window.open("loserSea.html", "_blank");
    }
    else if(themeNum ==2){
        window.open("loserAutumn.html", "_blank");

    }
    else if(themeNum==3){
        window.open("loserMagic.html", "_blank");

    }
}
function win(themeNum){
    if (themeNum==1){
        window.open("winnerSea.html", "_blank");
    }
    else if(themeNum ==2){
        window.open("winnerAutumn.html", "_blank");

    }
    else if(themeNum==3){
        window.open("winnerMagic.html", "_blank");

    }
}
function randomNum(num) {
    rand = Math.floor(Math.random() * num)+1; 
    return rand
}

function hint() {
    count =0;
    numGuesses -=1;
    if (guess > rand) {
        outputObj3.innerHTML = "Your last guess is bigger than the number I have";
    }
    else{
        outputObj3.innerHTML = "Your last guess is lower than the number I have";
    }
    outputObj2.innerHTML = "You have "+numGuesses+" left";
}
function theme(n){
    themeNum = n;
    if(n == 1) {
        document.getElementById('theme').href='game1.css';
        document.getElementById('nameOfGame').innerHTML = "🌊🐟GUESS THE NUMBER🐟🌊";
    }
    if(n == 2) {
        document.getElementById('theme').href='game2.css';
        document.getElementById('nameOfGame').innerHTML = "🍂🍁GUESS THE NUMBER🍁🍂";

    }
    if(n == 3) {
        document.getElementById('theme').href='game3.css';
        document.getElementById('nameOfGame').innerHTML = "⋆˖⁺‧₊☽GUESS THE NUMBER☾₊‧⁺˖⋆";
    }
}
