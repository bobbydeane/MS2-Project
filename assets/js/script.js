
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
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1()"><p>1</p></button>
    <button id="two" data-type="two" input="submit" onclick="chamber2()"><p>2</p></button>
    <button id="three" data-type="three" input="submit" onclick="chamber3()"><p>3</p></button>
    <button id="four" data-type="four" input="submit" onclick="chamber4()"><p>4</p></button>
    <button id="five" data-type="five" input="submit" onclick="chamber5()""><p>5</p></button>
    <button id="six" data-type="six" input="submit" onclick="chamber6()"><p>6</p></button>`;

    /** Start -chamber button style **/
     
    document.getElementById("chamber").style.left= "16%";

    document.getElementById("start").onclick = playRound1;

    console.log(displayRound1);

}


/*Play Round 1*/

function playRound1() {
    let num1 = Math.floor(Math.random() * 6) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OH NO! Better luck next time..`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play again?</p>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 2</p>`;

    /*displays buttons 1-6*/
    document.getElementById("chamber").innerHTML=`<button  id="one" data-type="one" input="submit onclick="chamber1()"><p>1</p></button>
    <button id="two" data-type="two" input="submit" onclick=""><p>2</p></button>
    <button id="three" data-type="three" input="submit" onclick=""><p>3</p></button>
    <button id="four" data-type="four" input="submit" onclick=""><p>4</p></button>
    <button id="five" data-type="five" input="submit" onclick=""><p>5</p></button>
    <button id="six" data-type="six" input="submit" onclick=""><p>6</p></button>`;

    document.getElementById("start").onclick = displayRound2;
};


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
    let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger"> Begin Round 2</p>`;
    
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = playRound2;
    console.log(displayRound2)
}


/*Play Round 2*/

function playRound2() {
    let num1 = Math.floor(Math.random() * 5) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Phew... the computer chose ${num1}, the bullet was in chamber ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play again?</p>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... the computer survived the 20% chance of failure`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 3</p>`;
    document.getElementById("start").onclick = displayRound3;
};


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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Random</p>`;

    
    /*displays buttons 1-4*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber3()"><p>1</p></button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round3()"><p>2</p></button>
    <button id="three" data-type="three" input="submit" onclick="chamber3Round3()"><p>3</p></button>
    <button id="four" data-type="four" input="submit" onclick="chamber4Round3()"><p>4</p></button>
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
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`Uh Ohh, better luck next time!`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play again?</p>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... today really is your lucky day! The bullet was in Chamber number ${num1}. Proceed to round 4.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 4</p>`;
    document.getElementById("start").onclick = displayRound4;
};

/*displays buttons 1-4*/
document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick=""><p>1</p></button>
<button id="two" data-type="two" input="submit" onclick=""><p>2</p></button>
<button id="three" data-type="three" input="submit" onclick=""><p>3</p></button>
<button id="four" data-type="four" input="submit" onclick=""><p>4</p></button>
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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play again?</p>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... the computer lives to see another day!`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 5</p>`;

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
        /* displays the Round 3 text */
        let Round = document.getElementById('round-text').textContent=`Round 5 - Well Done on getting this far. You have a 50/50 chance of surviving this round! `;
        let trigger1Text = document.getElementById("start").innerHTML=`<p>Pull Trigger</p>`;
        
        document.getElementById("start").onclick = playRound5;
        console.log(playRound5);
        
        /*displays buttons 1-4*/
    document.getElementById("chamber").innerHTML=`<button id="one" data-type="one" input="submit" onclick="chamber1Round5()"><p>1</p></button>
    <button id="two" data-type="two" input="submit" onclick="chamber2Round5()"><p>2</p></button>
    `;

    document.getElementById("chamber").style.left ="38%";
    
    }

    /*Play Round 5*/

function playRound5() {
    let num1 = Math.floor(Math.random() * 2) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`OHH NO!, you came sooo close!! The bullet was in chamber ${num1}. Would you like to play again?`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play again?</p>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... Well done! You survived this game. Only one bullet left... Proceed to round 6.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 6</p>`;
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
        let trigger1Text = document.getElementById("start").innerHTML=`<p id="trigger"> Begin Round 4</p>`;
        
        document.getElementById("start").onclick = playRound6;
        console.log(playRound6);
    }
    


function help() {
    document.getElementById("image-area").innerHTML= `<p id="typewriter">In round 1, the user goes first.<br><br>The Computer goes first in round 2<br><br>In round 1, your chances of failing are 1/6..<br><br>In round 2, the computers chances of failing <br><br> are 2/6 etc<br><br>Can you make it to round 6? <br><br>
    Pull the Trigger and take your chance...</p>`;
}


/*Play Round 6*/

function playRound6() {
    let num1 = Math.floor(Math.random() * 1) + 1;

if (num1 === 1) {
    gunGif = document.getElementById('gun').src="assets/images/RRGreenNoLoopBang.gif"
    Round = document.getElementById("round-text").innerHTML=`BANG! Poor computer, it didn't have a chance! Well done on making it to the 6th round!`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play again?</p>`;
    document.getElementById("start").onclick = displayBeginning;
    
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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play again?</p>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 2</p>`;

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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 2<p/>`;

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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 2<p/>`;

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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 2<p/>`;

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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 2<p/>`;

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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click... You survived this round! The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Round 2<p/>`;

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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
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
    let trigger1Text = document.getElementById("start").innerHTML=`<p>Play Again?<p/>`;
    document.getElementById("start").onclick = displayBeginning;
    
} else {
    let gunGif = document.getElementById("image-area").innerHTML = `<img id="gun" src="assets/images/RRGreenNoLoop.gif">`;
    let Round = document.getElementById("round-text").innerHTML=`Click...  The bullet was in chamber number ${num1}.`;
    let trigger1Text = document.getElementById("start").innerHTML=`Round 6`;

    /*displays buttons 1-2*/
    document.getElementById("chamber").innerHTML="";

    document.getElementById("start").onclick = displayRound6;
};

}

