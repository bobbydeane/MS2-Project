
/**
 * Event listeners
 */

/* code that will run when the page has finished loading.*/
document.addEventListener("DOMContentLoaded", function(){
    displayBeginning();
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        addEventListener("click", function() {
            if(this.getAttribute("data-type") === "start") {
                    let gameType = this.getAttribute("data-type");
                    displayRound1();
            } else (this.getAttribute("data-type") === "help");
                    help();

        })
    }
}
    
)






/**
 * Event click start button - begin round 1
 */




/**
 * Test Function that switches between the two Game Gifs
 

let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 1) {
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

    let gameText = document.getElementsByClassName('game-area-text');
    gameText.innerHTML = ""

}
/** */
/**
 * Display Round 0/beginning
 */

 function displayBeginning() {
    let gunGif = document.getElementById('gun').src="assets/images/testgif.gif";
    let Round = document.getElementById("round-text").textContent=`Welcome, press start to begin!`;
    let welcome = document.getElementById("image-area").innerHTML=`<p id="typewriter">Welcome to 8Bit Russian Roullette.<br><br> Press start to begin!! </p>`;
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
    let gunGif = document.getElementById('gun').src="assets/images/testgif.gif";
    document.document.getElementById("round-text").textContent=`Round 1, Pull the Trigger if your'e feeling`;
}

/**
 * Display Round 2
 */

 function displayRound2() {
    let gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif";
    let Round = document.getElementById("round-text").textContent= `Round 2 - Computers turn, select begin to Proceed`;
}

/**
 * Display Round 3
 */

 function displayRound3() {
    let Round = document.getElementsByClassName('round-text').innerHTML=`Round 3 - You've made it this far... your chances are 1 in 4`;
}

/**
 * Display Round 4
 */

 function displayRound4() {
    
}

/**
 * Display Round 5
 */

 function displayRound5() {
    
}

/**
 * Display Round 1
 */

 function displayRound6() {
    
}


function help() {
    document.getElementById("image-area").innerHTML= `<p id="typewriter">In round 1, the user goes first.<br><br>The Computer goes first in round 2<br><br>In round 1, your chances of failing are 1/6..<br><br>In round 2, the computers chances of failing are 2/6</p>`;
}
