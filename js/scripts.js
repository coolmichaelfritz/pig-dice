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
  




})
