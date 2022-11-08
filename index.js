$("h1").css("color", "blue");

function playButton(button){
  console.log(button);
  if(button === 1){
    $(".red").animate({opacity: "1.0", height: "210px", width: "210px"}, 300);
  }
  else if(button === 2){
    $(".green").animate({opacity: "1.0", height: "210px", width: "210px"}, 300);
  }
  else if(button === 3){
    $(".blue").animate({opacity: "1.0", height: "210px", width: "210px"}, 300);
  }
  else if(button === 4){
    $(".yellow").animate({opacity: "1.0", height: "210px", width: "210px"}, 300);
  }
}


function levelStart(levelNumber){
  var randomNumber;
  var answer = "";
  for(i = 0; i < levelNumber; i++){
    randomNumber = Math.floor(Math.random()*4) + 1;
    playButton(randomNumber);
    answer += randomNumber.toString;
  }
}

function gameStart(){
  var level = 3;
  levelStart(level)
  /*while(level){
    if(levelStart(level)){
      level++;
    }
    else{
      level = 0;
    }
  }
  gameEnd(){}*/

}



$(document).keypress(function(){
  gameStart();
})