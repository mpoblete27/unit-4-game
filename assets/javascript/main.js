// setup the game//
var crystals = ['assets/images/gem1.png', 'assets/images/gem2.png', 'assets/images/gem3.png', 'assets/images/gem4.png']
var goalNum = 0
var Wins = 0
var Losses = 0 
var counterNum = 0


//make the crystal buttons, add a random value to them//
for(var i = 0; i < crystals.length; i++){
    var crystalPic = $("<img>");
    crystalPic.attr('src', crystals[i]); //give the div item an attribute//
    $(".pic").append(crystalPic); //change the div (class=pic) to have the picture from the array//
    // crystalPic.attr("data-value", math.floor(math.random() * 10 ) + 2 );
}

//Make the Goal number the player wants to get to//
function goal() {
    var goalNum = math.floor(math.random() * 120) + 19;
}



//add random number to score using a click event
function clickIt() {

}


//compare score to goal number and reset game
 if(counterNum === goalNum){
     alert("A winner is you!");
     Wins++;
     counterNum = 0;
     goal();
 } else(){
     alert("You lose! Insert a quarter to continue");
     Losses++;
     counterNum = 0;
     goal();
}
