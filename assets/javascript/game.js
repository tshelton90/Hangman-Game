// a couple problems to fix
// cant figure out how to exclude extra guesses of the same letter so this will allow you to find one correct letter and keep pressing it to get a winning condition
// can't figure out how to reset the dom to blank on the reset function so just the new underscores value shows up
// Global Variables
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var wrongLetter = [];
var guessesLeft = [];
var userGuesses = [];
var nbaTeams = [
    'celtics',
    'nets',
    'knicks',
    '76ers',
    'raptors',
    'bulls',
    'caveliers',
    'pistons',
    'pacers',
    'bucks',
    'hawks',
    'hornets',
    'heat',
    'magic',
    'wizards',
    'warriors',
    'clippers',
    'lakers',
    'suns',
    'kings',
    'mavericks',
    'rockets',
    'grizzlies',
    'pelicans',
    'spurs',
    'nuggets',
    'timberwolves',
    'thunder',
    'trailblazers',
    'jazz',
];
var randomTeam;
var winCounter = 0;
var underScores = [];


//Starting the game
//============================================
startGame()

//Function that runs when game initializes
function startGame(){
    randomTeam = nbaTeams[Math.floor(Math.random() * nbaTeams.length)];
    
for(var i = 0; i < randomTeam.length; i++)
{
    underScores.push('_ ');
    document.querySelector('#under-scores').textContent = 'Word to guess: ' + underScores.join("");
}
 
wrongLetter = [];
guessesLeft = 12;

document.querySelector('#guesses-remaining').textContent = 'Guesses Remaining: ' + guessesLeft;

}

//alerting win or loss and reseting the game
function winLose(){
    if(winCounter === randomTeam.length){
        alert('Winner Winner Chicken Dinner!');
        wins++;
        resetGame();
        startGame();
    }
    else if(guessesLeft === 0){
        alert('Incorrect; try again');
        losses++
        resetGame();
        startGame();
        
    }
}

//User Guesses
document.onkeyup = function(event){
    userGuesses = event.key;
    // Checking if guesses match the randomly generated word.
    if(randomTeam.indexOf(userGuesses) > -1){
        for(var i = 0; i < randomTeam.length; i++){
            if(randomTeam[i] === userGuesses){
                underScores[i] = userGuesses;
                winCounter++; 
                winLose()         
            }
       document.querySelector('#under-scores').textContent = 'Word to guess: ' + underScores.join('');
     }
    
    }
    // handling incorrect user guesses
    else{
        wrongLetter.push(userGuesses);
       document.querySelector('#wrong-guess').textContent = wrongLetter.join('')
       guessesLeft--;
       winLose()
    }
    document.querySelector('#guesses-remaining').textContent = "Guesses remaining: " + guessesLeft

}
// Function to be called once the win or loss conditions are met
function resetGame(){
document.querySelector('#under-scores').textContent = underScores.join('');
document.querySelector('#wrong-guess').textContent = wrongLetter.join('');
document.querySelector('#wins').textContent = 'Wins: ' + wins 
document.querySelector('#losses').textContent = 'Losses: ' + losses
}
