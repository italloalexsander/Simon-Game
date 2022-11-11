let answer = ""
let currentLevel = 1;


function allowButtonsClick(){
  $(".button").click(function(e){
    var buttonClicked = e.target.classList[1];
    animateButton(buttonClicked);
    if(buttonClicked === 'red'){
      userAnswer = userAnswer + '1';
    }
    if(buttonClicked === 'green'){
      userAnswer = userAnswer + '2';
    }
    if(buttonClicked === 'blue'){
      userAnswer = userAnswer + '3';
    }
    if(buttonClicked === 'yellow'){
      userAnswer = userAnswer + '4';
    }
  })
}

function disallowButtonsClick(){
  $(".button").unbind();
}

function checkResult(){
  if(userAnswer === answer){
    return 1;
  }
  return 0;
}

async function levelCheck(){
  allowButtonsClick();
  while(userAnswer.length < answer.length){
    await timer(800);
  }
  disallowButtonsClick();
  if(checkResult()){
    userAnswer = ""
    currentLevel++;
    levelStart(currentLevel)
  }
  else{
    userAnswer = ""
    answer = ""
    currentLevel = 1;
    $(".title-text").text("Errou, aperte uma tecla pra Recomeçar")
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    gameBind();
  }
}

function animateButton(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  $("."+name).animate({opacity: "1.0", height: "210px", width: "210px"}, 400).animate({
    opacity: "0.4", height: "200px", width: "200px"}, 400)
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

async function levelShow(string){
  var lengthOfLevel = string.length;
  for(let i = 0; i < lengthOfLevel; i++){
    await timer(800);
    if(string[i] === '1'){
      animateButton("red");
    }
    else if(string[i] === '2'){
      animateButton("green");
    }
    else if(string[i] === '3'){
      animateButton("blue");
    }
    else if(string[i] === '4'){
      animateButton("yellow");
    }
  }
  levelCheck();
}


function levelStart(levelNumber){
  $(".title-text").text("Level " + levelNumber)
  let randomNumber;
  userAnswer = "";
  randomNumber = Math.floor(Math.random()*4) + 1;
  answer += randomNumber.toString();
  levelShow(answer);
}

function gameStart(){
  $(document).unbind();
  levelStart(currentLevel)
}



function gameBind(){
  $(document).keypress(function(){
    gameStart(); 
  })
}

gameBind();