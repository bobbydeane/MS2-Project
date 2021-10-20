
/**
 * Event listeners
 */

/* code that will run when the page has finished loading.*/
document.addEventListener("DOMContentLoaded", function(){
    displayBeginning();
    
}
    
);

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
    let Round = document.getElementById("round-text").textContent=`Welcome, please select a game-type to start.`;
    let welcome = document.getElementById("image-area").innerHTML=`<p id="typewriter">Welcome to 8Bit Russian Roullette.<br><br>Select Solo for a single player game,<br><br>
    or else VS to play against the computer.<br><br>Select help to learn how to play.<br><br><br>Don't worry, it's completley safe!</p>`;
    
    document.getElementById("buttons").innerHTML= `<button  id="solo" data-type="solo">Solo</button>
    <button  id="start" data-type="start">Vs</button>
    <button id="help" data-type="help" onclick="help()">Help</button>
    <button id="reset" data-type="reset" onclick="displayBeginning()">Reset</button>`;
    document.getElementById("solo").onclick = displayRound1Solo;
    document.getElementById("start").onclick = displayRound1;
    document.getElementById("start").innerHTML = `Vs`;
    document.getElementById("buttons").style.left = "27%";
    document.getElementById("chamber").innerHTML ="";
    console.log(displayBeginning);
 }


/**
 * 
 * Round one - Display and Play
 * 
 */

/**
 * Display Round 1
 */

function displayRound1() {
    
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 1 text */
    let Round = document.getElementById("round-text").textContent=`Round 1... your chances of failure are 1/6. Take a chance and pick a number.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger">Random</p>`;
    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2()">2</button>
    <button id="three" data-type="three" input="submit" onclick="chamber3()">3</button>
    <button id="four" data-type="four" input="submit" onclick="chamber4()">4</button>
    <button id="five" data-type="five" input="submit" onclick="chamber5()"">5</button>
    <button id="six" data-type="six" input="submit" onclick="chamber6()">6</button>`;

    /** Start -chamber button style **/

    document.getElementById("buttons").innerHTML= `
    <button  id="start" data-type="start">Random</button>
    <button id="help" data-type="help" onclick="help()">Help</button>
    <button id="reset" data-type="reset" onclick="displayBeginning()">Reset</button>`;

    document.getElementById("buttons").style.left = "33%";
     
    document.getElementById("chamber").style.left= "16%";

    document.getElementById("start").onclick = playRound1;

    console.log(displayRound1);

}


/*Play Round 1*/

function playRound1() {
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif";
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time..`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML=`<button  id="one" data-type="one" input="submit onclick="chamber1()">1</button>
    <button id="two" data-type="two" input="submit" onclick="">2</button>
    <button id="three" data-type="three" input="submit" onclick="">3</button>
    <button id="four" data-type="four" input="submit" onclick="">4</button>
    <button id="five" data-type="five" input="submit" onclick="">5</button>
    <button id="six" data-type="six" input="submit" onclick="">6</button>`;

    document.getElementById("start").onclick = displayRound2;
}


}

/**
 * 
 * Round 2 - Display and Play
 * 
 */



/**
 * Display Round 2
 */

 function displayRound2() {
    
    
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 1 text */
    let Round = document.getElementById("round-text").textContent= `Round 2 - Computers turn, select begin to Proceed`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger">Begin Round 2`;
    
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = playRound2;
    console.log(displayRound2);
}


/*Play Round 2*/

function playRound2() {
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Phew... the computer chose ${num1}, the bullet was in chamber ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... the computer survived the 20% chance of failure`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;
    document.getElementById("start").onclick = displayRound3;
}


}

/**
 * 
 * Round 3 - Display and Play
 * 
 */


/**
 * Display Round 3
 */

 function displayRound3() {
    

    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 3 text */
    let Round = document.getElementById('round-text').textContent=`Round 3 - You've made it this far... pick a number between 1 - 4. Choose wisely!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Random`;

    
    /*displays buttons 1-4*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber3()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round3()">2</button>
    <button id="three" data-type="three" input="submit" onclick="chamber3Round3()">3</button>
    <button id="four" data-type="four" input="submit" onclick="chamber4Round3()">4</button>
    `;

    /**
     * Button style - Round 3
     */
     document.getElementById("chamber").style.left ="27%";
    
    document.getElementById("start").onclick = playRound3;
    console.log(displayRound3);

}

/*Play Round 3*/

function playRound3() {
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif";
    Round = document.getElementById("round-text").innerHTML=`Uh Ohh, better luck next time!`;
    let trigger1Text = document.getElementById("start").innerHTML=``;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... today really is your lucky day! The bullet was in Chamber number ${num1}. Proceed to round 4.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;
    document.getElementById("start").onclick = displayRound4;
};

/*displays buttons 1-4*/
document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="">1</button>
<button id="two" data-type="two" input="submit" onclick="">2</button>
<button id="three" data-type="three" input="submit" onclick="">3</button>
<button id="four" data-type="four" input="submit" onclick="">4<play again?/button>
`;

}

/**
 * 
 * Round 4 - Display and Play
 * 
 */
/**
 * Display Round 4
 */

 function displayRound4() {
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 4 text */
    let Round = document.getElementById('round-text').innerHTML=`Round 4 - Computers turn again.. 33% chance of seeing a Bang!`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger"> Begin Round 4</p>`;
    
    document.getElementById("chamber").innerHTML="";
    document.getElementById("start").onclick = playRound4;
    console.log(displayRound4);
}

/*Play Round 4*/

function playRound4() {
    let num1 = Math.floor(Math.random() * 3) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Woohoo!... the computer loses this round. That was close.`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... the computer lives to see another day!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 5`;

    document.getElementById("start").onclick = displayRound5;
};

}


/**
 * 
 * Round 5 - Display and Play
 * 
 */


/**
 * Display Round 5
 */

 function displayRound5() {
        /* displays the Gun image */
        let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
        /* displays the Round 5 text */
        let Round = document.getElementById('round-text').textContent=`Round 5 - Well Done on getting this far. You have a 50/50 chance of surviving this round! `;
        let trigger1Text = document.getElementById("start").innerHTML=`Random`;
        
        document.getElementById("start").onclick = playRound5;
        console.log(playRound5);
        
        /*displays buttons 1-4*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round5()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round5()">2</button>
    `;

    document.getElementById("chamber").style.left ="38%";
    
    }

    /*Play Round 5*/

function playRound5() {
    let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OHH NO!, you came sooo close!! The bullet was in chamber ${num1}. Would you like to play again?`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... Well done! You survived this game. Only one bullet left... Proceed to round 6.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;
    document.getElementById("start").onclick = displayRound6;
};
}


    /**
 * 
 * Round 6 - Display and Play
 * 
 */


/**
 * Display Round 6
 */

 function displayRound6() {

        /* displays the Gun image */
        let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
        /* displays the Round 4 text */
        let Round = document.getElementById('round-text').innerHTML=`Round 6 - The final round, its the end of the road for the computer. the chances of getting a bang is 100%.`;
        let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger"> Begin Round 6</p>`;
        
        document.getElementById("start").onclick = playRound6;
        console.log(playRound6);
    }
    


function help() {
    document.getElementById("image-area").innerHTML= `<p id="typewriter">This is the fun (and safe) arcade version of<br><br>Russian Roullette>choose wisely.<br><br>In round one, the user has a choice between<br>
    the numbers 1-6.<br><br>If you choose icorrectly, you will get a BANG!<br><br>
    Try your luck against to the computer by<br>selecting the VS game mode<br>and see if you can make it all the way<br>
    to Round 6.</p>`;
}


/*Play Round 6*/

function playRound6() {
    let num1 = Math.floor(Math.random() * 1) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`BANG! Poor computer, it didn't have a chance! Well done on making it to the 6th round!`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Error`;
    let trigger1Text = document.getElementById("start").innerHTML=`Error`;
    document.getElementById("start").onclick = displayBeginning;
};
}


/**
 * 
 * Chamber functions
 * 
 */

/**chamber 1 */
function chamber1(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
    document.getElementById("chamber").innerHTML="";

} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2;
};

}

/**chamber 2 */

function chamber2(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 2) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2;
};
}

/**chamber 3 */

function chamber3(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 3) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
    document.getElementById("chamber").innerHTML="";

} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2;
};
}

/**chamber 4 */

function chamber4(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 4) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2;
};
}

/**chamber 5 */

function chamber5(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 5) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2;
};
}

/**chamber 6 */

function chamber6(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 6) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2;
};
}


/**
 * 
 * Round 3 chambers
 *
 */

/** Round 3 chamber 1 */
function chamber1Round3(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4;
};

}

/**Round 3 chamber 2 */

function chamber2Round3(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 2) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
    document.getElementById("chamber").innerHTML="";

} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4;
};
}

/** Round 3 chamber 3  */

function chamber3Round3(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 3) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4;
};
}

/** Round 3 chamber 4 */

function chamber4Round3(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 4) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4;
};
}


/**
 * 
 * Round 5 chambers
 *
 */

/** Round 5 chamber 1 */
function chamber1Round5(){
    let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
    document.getElementById("chamber").innerHTML="";

} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click...  The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;

    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound6;
};

}

/** Round 5 chamber 1 */
function chamber2Round5(){
    let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click...  The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;

    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound6;
};

}



/**
 * Solo Game
 * 
 */


/**
 * 
 * Solo Round one - Display and Play
 * 
 */

/**
 * Display solo Round 1
 */

function displayRound1Solo() {
    
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 1 text */
    let Round = document.getElementById("round-text").textContent=`Round 1... your chances of failure are 1/6. Take a chance and pick a number.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger">Random</p>`;
    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round1Solo()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round1Solo()">2</button>
    <button id="three" data-type="three" input="submit" onclick="chamber3Round1Solo()">3</button>
    <button id="four" data-type="four" input="submit" onclick="chamber4Round1Solo()">4</button>
    <button id="five" data-type="five" input="submit" onclick="chamber5Round1Solo()"">5</button>
    <button id="six" data-type="six" input="submit" onclick="chamber6Round1Solo()">6</button>`;

    /** Start -chamber button style **/

    document.getElementById("buttons").innerHTML= `
    <button  id="start" data-type="start">Random</button>
    <button id="help" data-type="help" onclick="help()">Help</button>
    <button id="reset" data-type="reset" onclick="displayBeginning()">Reset</button>`;

    document.getElementById("buttons").style.left = "33%";
     
    document.getElementById("chamber").style.left= "16%";

    document.getElementById("start").onclick = playRound1Solo;

    console.log(displayRound1Solo);

}

/*Play Round 1 Solo*/

function playRound1Solo() {
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time..`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML=`<button  id="one" data-type="one" input="submit onclick="chamber1()">1</button>
    <button id="two" data-type="two" input="submit" onclick="">2</button>
    <button id="three" data-type="three" input="submit" onclick="">3</button>
    <button id="four" data-type="four" input="submit" onclick="">4</button>
    <button id="five" data-type="five" input="submit" onclick="">5</button>
    <button id="six" data-type="six" input="submit" onclick="">6</button>`;

    document.getElementById("start").onclick = displayRound2Solo;
};


}


/**
 * 
 * Solo Round 2 - Display and Play
 * 
 */



/**
 * Solo Display Round 2
 */

 function displayRound2Solo() {
    
    
    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 1 text */
    let Round = document.getElementById("round-text").textContent=`Round 2... pick a number between 1-5.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger">Random</p>`;
    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round2Solo()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round2Solo()">2</button>
    <button id="three" data-type="three" input="submit" onclick="chamber3Round2Solo()">3</button>
    <button id="four" data-type="four" input="submit" onclick="chamber4Round2Solo()">4</button>
    <button id="five" data-type="five" input="submit" onclick="chamber5Round2Solo()"">5</button>`;

    /** Start -chamber button style **/
     
    document.getElementById("chamber").style.left= "16%";

    document.getElementById("start").onclick = playRound2Solo;

    console.log(displayRound1Solo);

}


/*Play Round 2*/

function playRound2Solo() {
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif";
    Round = document.getElementById("round-text").innerHTML=`Unlucky this time! Why don't you try again?`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Nice! the bullet was in chamber ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;
    document.getElementById("start").onclick = displayRound3Solo;
};




}

/**
 * 
 * Round 3 - Display and Play Solo
 * 
 */


/**
 * Display Round 3
 */

 function displayRound3Solo() {
    

    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 3 text */
    let Round = document.getElementById('round-text').textContent=`Round 3 - You've made it this far... pick a number between 1 - 4. Choose wisely!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Random`;

    
    /*displays buttons 1-4*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round3Solo()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round3Solo()">2</button>
    <button id="three" data-type="three" input="submit" onclick="chamber3Round3Solo()">3</button>
    <button id="four" data-type="four" input="submit" onclick="chamber4Round3Solo()">4</button>
    `;

    /**
     * Button style - Round 3
     */
     document.getElementById("chamber").style.left ="27%";
    
    document.getElementById("start").onclick = playRound3Solo;
    console.log(displayRound3Solo);

}

/**Play Round 3 Solo */

function playRound3Solo() {
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Hard luck! Why don't you try again?`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Very skillful. The bullet was in chamber ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;
    document.getElementById("start").onclick = displayRound4Solo;
};




}

 
/**
 * 
 * Round 4 - Display and Play Solo
 * 
 */


/**
 * Display Round 4 solo
 */

 function displayRound4Solo() {
    

    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 3 text */
    let Round = document.getElementById('round-text').textContent=`Round 4 - Well done on making it this far. Can you keep going?`;
    let trigger1Text = document.getElementById("start").innerHTML=`Random`;

    
    /*displays buttons 1-3*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round4Solo()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round4Solo()">2</button>
    <button id="three" data-type="three" input="submit" onclick="chamber3Round4Solo()">3</button>
    `;

    /**
     * Button style - Round 4
     */
     document.getElementById("chamber").style.left ="33%";
    
    document.getElementById("start").onclick = playRound4Solo;
    console.log(displayRound4Solo);

}

/**Play Round 4 Solo */

function playRound4Solo() {
    let num1 = Math.floor(Math.random() * 3) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Hard luck! Why don't you try again?`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Awesome!. The bullet was in chamber ${num1}. Proceed to Round 5.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 5`;
    document.getElementById("start").onclick = displayRound5Solo;
};

}

/**
 * 
 * Round 5 - Display and Play Solo
 * 
 */


/**
 * Display Round 5 solo
 */

 function displayRound5Solo() {
    

    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 5 text */
    let Round = document.getElementById('round-text').textContent=`Round 5 - You have 50/50 chance of seeing the next round!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Random`;

    
    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round5Solo()">1</button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round5Solo()">2</button>`;

    /**
     * Button style - Round 5
     */
     document.getElementById("chamber").style.left ="47%";
    
    document.getElementById("start").onclick = playRound5Solo;
    console.log(displayRound5Solo);

}

/**Play Round 5 Solo */

function playRound5Solo() {
    let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Hard luck! You came very close to Round 6. Why don't you try again?`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Congrats! Today is your lucky day. The bullet was in chamber ${num1}. Proceed to Round 5.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;
    document.getElementById("start").onclick = displayRound6Solo;
};

}

/**
 * 
 * Round 6 - Display and Play Solo
 * 
 */


/**
 * Display Round 6 solo
 */

 function displayRound6Solo() {
    

    /* displays the Gun image */
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRStillImage.gif">`;
    /* displays the Round 6 text */
    let Round = document.getElementById('round-text').textContent=`Round 6- We all know what happens next don't we? Thanks for playing!!`;
    let trigger1Text = document.getElementById("start").innerHTML=`Random`;

    
    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round6Solo()">Click me</button>`;

    /**
     * Button style - Round 6
     */
     document.getElementById("chamber").style.left ="47%";
    
    document.getElementById("start").onclick = playRound6Solo;
    console.log(displayRound6Solo);

}

/**Play Round 6 Solo */

function playRound6Solo() {
    let num1 = Math.floor(Math.random() * 1) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/SpaceInvaders.gif"
    Round = document.getElementById("round-text").innerHTML=`Well done, you made it to the end of the game, I hope you had fun!`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Erro chamber ${num1}. Proceed to Round 5.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;
    document.getElementById("start").onclick = displayRound6Solo;
};

}


/**
 * 
 * Chamber functions
 * 
 */

/**chamber 1 Solo */
function chamber1Round1Solo(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2Solo;
};

}

/**chamber 2 Solo*/

function chamber2Round1Solo(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 2) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2Solo;
};
}

/**chamber 3 */

function chamber3Round1Solo(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 3) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2Solo;
};
}

/**chamber 4 */

function chamber4Round1Solo(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 4) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";
    document.getElementById("solo").innerHTML="";

    document.getElementById("start").onclick = displayRound2Solo;
};
}

/**chamber 5 */

function chamber5Round1Solo(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 5) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2Solo;
};
}

/**chamber 6 */

function chamber6Round1Solo(){
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 6) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 2`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound2Solo;
};
}


/**
 * 
 * Round 2 chambers Solo 
 */

/** Round 2  chamber 1 Solo */
function chamber1Round2Solo(){
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound3Solo;
};

}

/**chamber 2 Round 2 chambers Solo  */

function chamber2Round2Solo(){
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 2) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound3Solo;
};
}

/**chamber 3 Round 2 chambers Solo */

function chamber3Round2Solo(){
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 3) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound3Solo;
};
}

/**chamber 4 Round 2 chambers Solo */

function chamber4Round2Solo(){
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 4) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound3Solo;
};
}

/**chamber 5 Round 2 chambers Solo */

function chamber5Round2Solo(){
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 5) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 3`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound3Solo;
};
}



/**
 * 
 * Round 3 chambers Solo
 *
 */

/** Round 3 chamber 1 */
function chamber1Round3Solo(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4Solo;
};

}

/**Round 3 chamber 2 */

function chamber2Round3Solo(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 2) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4Solo;
};
}

/** Round 3 chamber 3  */

function chamber3Round3Solo(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 3) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4Solo;
};
}

/** Round 3 chamber 4 */

function chamber4Round3Solo(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 4) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 4`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound4Solo;
};
}

/**
 * 
 * Round 4 chambers Solo 
 */

/**Round 4 chamber 1 Solo */
function chamber1Round4Solo(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
    document.getElementById("chamber").innerHTML="";

} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 5`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound5Solo;
};

}

/**chamber 2 Round 4 chambers Solo  */

function chamber2Round4Solo(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 2) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;
    
    document.getElementById("chamber").innerHTML="";

} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 5`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound5Solo;
};
}

/**chamber 3 Round 4 chambers Solo */

function chamber3Round4Solo(){
    let num1 = Math.floor(Math.random() * 4) + 1;

if (num1 === 3) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 5`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound5Solo;
};
}



/**
 * 
 * Round 5 Solo chambers
 *
 */

/** Round 5 chamber 1 Solo*/
function chamber1Round5Solo(){
    let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click...  The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;

    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound6Solo;
};

}

/** Round 5 chamber 2 */
function chamber2Round5Solo(){
    let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 2) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time.. the bullet was in chamber ${num1}`;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click...  The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;

    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound6Solo;
};

}

/**
 * 
 * Round 6 chambers
 *
 */

/** Round 6 chamber 1 */
function chamber1Round6Solo(){
    let num1 = Math.floor(Math.random() * 1) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/SpaceInvaders.gif"
    Round = document.getElementById("round-text").innerHTML=``;
    let trigger1Text = document.getElementById("start").innerHTML=`play again?`;
    document.getElementById("start").onclick = displayBeginning;

    document.getElementById("chamber").innerHTML="";
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Error number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;

    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound6Solo;
};

}
