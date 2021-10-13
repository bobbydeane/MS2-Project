
/**
 * Event listeners
 */

/* code that will run when the page has finished loading.*/
document.addEventListener("DOMContentLoaded", function(){
    displayBeginning();
    
}
    
)

/**
 * Event click start button - begin round 1
 */




/**
 * Test Function that switches between the two Game Gifs
 

let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 !=== 1) {
    let gunGif = document.getElementById('gun').src="assets/images/testgif.gif";
} else {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
};
*/

/**
 * RUN GAME FUNCTION - this will display the Round 1 gun/game type.
 */
/*
function runGame(){

    let gameText = document.getElementsByName('game-area-text');
    gameText.innerHTML = ""

}
/** */
/**
 * Display Round 0/beginning
 */

 function displayBeginning() {
    let Round = document.getElementById("round-text").textContent=`Welcome, press start to begin!`;
    let welcome = document.getElementById("image-area").innerHTML=`<p id="typewriter">Welcome to 8Bit Russian Roullette.<br><br> Press start to begin,<br><br>
    or help to learn how to play.<br><br>Do you feel lucky??</p>`;
    let trigger1 = document.getElementById("start").innerHTML=`Start`;
    document.getElementById("start").onclick = displayRound1;
    console.log(displayBeginning);
 }

   /* document.getElementById("start").addEventListener('click',function ()
{
    displayRound1();
   }  );/*
}

/**
 * RoundType - displays which round to display 0-6
 

 if (roundType === "round0") {
    displayRound0();
} else if (gameType === "round1") {
    displayRound1();
} else if (gameType === "round2") {
    displayRound2();
} else if (gameType === "round3") {
    displayRound3();
} else if (gameType === "round4") {
    displayRound4();
} else if (gameType === "round5") {
    displayRound5();
} else if (gameType === "round6") {
    displayRound6();
}
*/

/**
 * Display Round 1
 */

function displayRound1() {
    
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 1 text */
    let Round = document.getElementById("round-text").textContent=`Round 1... your chances of failure are 1/6. Take a chance and hit the trigger button.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger">Pull Trigger</p>`;
    
    document.getElementById("start").onclick = playRound1;

    console.log(displayRound1);

    
    
    /*let pullTrigger =document.getElementsById("start").addEventListener("click", function() {
        playRound1();
      }, false);*/

}

/**
 * Display Round 2
 */

 function displayRound2() {
    
    
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 1 text */
    let Round = document.getElementById("round-text").textContent= `Round 2 - Computers turn, select begin to Proceed`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger"> Begin Round 2</p>`;
    
    document.getElementById("start").onclick = playRound2;
    console.log(displayRound2)
}

/**
 * Display Round 3
 */

 function displayRound3() {
    

    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 3 text */
    let Round = document.getElementById('round-text').textContent=`Round 3 - You've made it this far... hit the Trigger button to take your turn`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Pull Trigger</p>`;
    
    document.getElementById("start").onclick = playRound3;
    console.log(displayRound3);

}

/**
 * Display Round 4
 */

 function displayRound4() {
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 4 text */
    let Round = document.getElementById('round-text').innerHTML=`Round 4 - Computers turn again.. 33% chance of seeing a Bang!`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger"> Begin Round 4</p>`;
    
    document.getElementById("start").onclick = playRound4;
    console.log(displayRound4);
}

/**
 * Display Round 5
 */

 function displayRound5() {
    
}

/**
 * Display Round 6
 */

 function displayRound6() {
    
}


function help() {
    document.getElementById("image-area").innerHTML= `<p id="typewriter">In round 1, the user goes first.<br><br>The Computer goes first in round 2<br><br>In round 1, your chances of failing are 1/6..<br><br>In round 2, the computers chances of failing <br><br> are 2/6 etc<br><br>Can you make it to round 6? <br><br>
    Pull the Trigger and take your chance...</p>`;
}


/**
 * Game round functions
 * 
 */

function playRound1() {
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time..`;
    let trigger1Text = document.getElementById("start").innerHTML=`Play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;
    document.getElementById("start").onclick = displayRound2;
};


}

function playRound2() {
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Phew... the computer loses this round`;
    let trigger1Text = document.getElementById("start").innerHTML=`Play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... the computer survived the 20% chance of failure`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;
    document.getElementById("start").onclick = displayRound3;
};


}

function playRound3() {
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Uh Ohh, better luck next time!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... today really is your lucky day! Proceed to round 4.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;
    document.getElementById("start").onclick = displayRound4;
};

}

function playRound4() {
    let num1 = Math.floor(Math.random() * 3) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Woohoo!... the computer loses this round. That was close.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... the computer lives to see another day!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 5`;
    document.getElementById("start").onclick = displayRound5;
};


}