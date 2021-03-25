//global constants
const clueHoldTime = 1000; //time to hold each clue's light/sound
const cluePauseTime= 333; //time to pause btwn clues
const nextClueWaitTime = 1000; //wait time before playing sequence


//Global Variables
var pattern = [2,5,4,6,3,1,2,4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //between 0.0 and 1.0
var guessCounter =0;
var mistakeNumber =0;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistakeNumber = 0;
  
    //swap Start and Stop btns
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
  gamePlaying =false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
// Sound Synthesis Functions
const freqMap = {
  1: 600.6,
  2: 250.6,
  3: 400,
  4: 466.2,
  5: 700,
  6: 350
  
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  
  document.getElementById("btn"+btn).classList.add("lit")
  
}
function clearButton(btn){
  document.getElementById("btn"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  guessCounter =0;
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");

}

function winGame(){
  stopGame();
  alert("Game Over. You won!")
}

function guess(btn){
  console.log("user guessed: " +btn);
  if(!gamePlaying){
    return;
  }
  //game logic
  
  if(btn != pattern[guessCounter]){
    if(mistakeNumber == 2){
    loseGame();
    }else{ 
    mistakeNumber+=1;
    alert("You have made "+ mistakeNumber+" mistakes");
    playClueSequence();}
  }
  else{
    if(progress == guessCounter){
      if(progress!=pattern.length-1){
        progress +=1;
        playClueSequence();
      }
      else{
        winGame();
      }
    
    }
    else{guessCounter +=1;}
  }
  
}