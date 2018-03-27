//Business Logic
var diceRoll = function() {
  return 1 + Math.floor(Math.random() * 6);
}

function playerOne () {
  this.totalScore = 0;
  this.holdScore = 0;
  this.roll = 0;
}

//if playerOne rolls
playerOne.prototype.clickRoll1 = function() {
  if (this.roll === 1) {
    this.holdScore = 0;
  } else {
    this.holdScore += this.roll;
  }
}

playerOne.prototype.clickHold1 = function() {
  this.totalScore += this.holdScore;
}

function playerTwo () {
  this.totalScore = 0;
  this.holdScore = 0;
  this.roll = 0;
}

//if playerTwo rolls
playerTwo.prototype.clickRoll2 = function() {
  if (this.roll === 1) {
    this.holdScore = 0;
  } else {
    this.holdScore += this.roll;
  }
}


//When you roll a 1


//User Interface Logic
$(document).ready(function(){

var newPlayerOne = new playerOne();

debugger;
  $("button#playerOneRoll").click(function(event){
    event.preventDefault();

    //Shows user random roll
    newPlayerOne.roll = diceRoll();
    $("#playerOneCurrent").text(newPlayerOne.roll);

    //Shows user turn's total
    newPlayerOne.clickRoll1();
    $("#playerOneRound").text(newPlayerOne.holdScore);


  });

$("button#playerOneHold").click(function(event){
  //Shows user's total score
  newPlayerOne.clickHold1();
  $("#playerOneTotal").text(newPlayerOne.totalScore);

})




})
