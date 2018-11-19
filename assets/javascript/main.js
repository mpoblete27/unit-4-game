// setup the game//
var crystals = ['assets/images/gem1.png', 'assets/images/gem2.png', 'assets/images/gem3.png', 'assets/images/gem4.png']
var goalNum = 0
var Wins = 0
var Losses = 0 
var counterNum = 0


//make the crystal buttons and give it a random value
for(var i = 0; i < crystals.length; i++){
    var crystalPic = $("<img>");
    crystalPic.attr('src', crystals[i]); //give the div item an attribute//
    $(".pic").append(crystalPic); //change the div (class=pic) to have the picture from the array//
    $(".pic").attr("data-value", Math.floor(Math.random() * 10 ) + 2 ); //give the crystal a random value//
}

//Make the Goal number the player wants to get to//
function goal() {
    var goalNum = math.floor(math.random() * 120) + 19;
}



//add random number to counter number using a click event
function clickIt() {
    counterNum += parseInt($(this).attr("value"))
    $("score")
}


//compare score to goal number and reset game
 if(counterNum === goalNum){
     alert("A winner is you!");
     Wins++;
     counterNum = 0;
     goal();
 } else if(counterNum > goalNum){
     alert("You lose! Would you like to Continue?");
     Losses++;
     counterNum = 0;
     goal();
}
