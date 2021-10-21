# 8BIT RUSSIAN ROULETTE



# Introduction

8bit Russian Roulette is a web based game built in JavaScript, HTML and CSS. It is based on the infamous game of Russian Roulette but it is much safer and a lot more enjoyable. It is targeted towards users who enjoy playing short, fun games.

![8bitRRHome]

Click [here](https://bobbydeane.github.io/MS2-Project/) to view the Live website on Github. Please note: to open any links in this document in a new browser tab, please press CTRL + Click.

# UX



**The Strategy Plane.**

 - 8bit Russian Roulette was created to be a fun game that users could play over a short duration. Looking at classic arcade games, they tend to be uncomplicated, repetitive yet addictive. And I tried to capture this in 8bit Russian Roulette’s gameplay. The aesthetic sets the tone of the user interaction.

**Site Goals**

 - To provide the user with a simple and enjoyable game.
 - To ensure that navigating the site is uncomplicated and intuitive.
 - To give the use the option of multiple game types.
 - To provide the user with instructions should they need them.
 - To ensure the site is accessible.
 - To ensure the site displays correctly across different device screens sizes.


**User Stories**

 - As a user I want to play as fun and straightforward game.
 - As a user I want a game that allows me to exercise choice.
 - As a user I want to play against the computer.
 - As a user I want to be able to reset a game and start over any time I choose.

strikethrough text

**The Scope Plane**

Features planned:

 - Responsive Design – in which the site should be suitable for all devices such as desktop, tablet and mobile.
 - All navigation elements should be obvious and contained within the screen.
 - The Site should be visually pleasing for the user.
 - The user be able to choose the game type to play.
 - The site should be accessible to users.

**The Structure Plane**

User Story:

 - As a user I want to play a fun and straightforward game.

Acceptance Criteria:

 - It should be obvious to the user that this is a game with clear instructions on how to play.

Implementation:

 - The colour scheme and font help portray the site as a classic arcade game. The Green and black colours take the user back to the early days of gaming. There is a direct link to a Help page with instructions on how to play the game as well a text to guide the user between rounds.


User Story:

 - As a user I want a game that allows me to exercise choice.



Acceptance Criteria:

 - The game should give the use a choice of buttons to select that in turn will decide the outcomes of each round.



Implementation:

 - Each round the user is presented with a series of buttons. Each button represents a chamber, and one of the chambers has a ‘bullet’ in it. If the user chooses incorrectly then the game is over.


User Story:

 - As a user I want to play against the computer.

Acceptance Criteria:

 - The user will have the ability to choose between two game types. Solo & Vs.

Implementation:

 - The game has two game types, Solo & Vs. Solo game types involve the user playing each round until the final round/the game ends with a bang. In the Vs game type the user plays against the computer. The user will go first in the Vs mode and the computer will go second. The computer’s choice will be random whereas the user can still choose their ‘chamber’.



User Story:

 - As a user I want to be able to reset a game and start over any time I choose.


Acceptance Criteria:

 - The user should be able to exit or restart the game at any point.

Implementation:

 - The game features a reset button that brings the user back to the home display. This button is present throughout the whole game and can be executed any time.


### The Surface Plane

#### Design

As the name of the site suggests, I was looking to mimic the 8bit style of pixelated, block like design with few smooth curves. I found a .gif that displays a hand holding a gun that displays a Bang when looped. The image was black and green and reminded me of the old space invade or pong games. The classics. From this .gif image came the colour scheme – Black & Green.


<![endif]-->

The Gun image was found at [shuttershock](https://www.shutterstock.com/video/clip-1037455850-2d-animation-motion-graphics-monoline-drawing-hand) and I used a gif editing site called - [https://ezgif.com/](https://ezgif.com/) to end the gif loop and chop the gif into three separate image files. The first image was used as a still for when the game loads and rounds begin, the second .gif image was used to simulate the gun firing an empty chamber and the third .gif image was used when the user or computer lost the round with a BANG!

The Arcade 8bit style font was found on [Google fonts](%5Bhttps://fonts.google.com/%5D)- [https://fonts.google.com/](https://fonts.google.com/).



The Home Display.

<![if !vml]>![A screenshot of a computer



The Helppage.

<![if !vml]>![Text, application



Round one of the Solo Game.

<![if !vml]>![Diagram



Feedback from the computers turn in round 2.

<![if !vml]>![A picture containing diagram



**Future Enhancements**

 - Ability to enter user name – this would make the user experience more personable.
 - Ability to toggle sounds or music – the arcade style would really be complete with some of those iconic sounds included in the game.
 - Multiplayer games – the ability to play with other users would make the game more fun and interesting.

**Testing**

There was continuous testing throughout the coding process due to the nature of Javascript. This ensure my functions were executing as intended.

-   HTML

-   No errors were returned when passing through the official W3C [Validator](https://validator.w3.org/nu/?doc=https://bobbydeane.github.io/MS2-Project/). 

-   <![if !vml]>![Graphical user interface, text, application, email
    
  

-   No errors were returned when passing through the official [W3C CSS Validation Service - Jigsaw.](W3C%20CSS%20Validator%20results%20for%20https://bobbydeane.github.io/MS2-Project/%20%28CSS%20level%203%20+%20SVG%29) 

-   <![if !vml]>![Graphical user interface, text, application, email
    
    

-   JavaScript

-   No errors were returned when passing through the validator service at JSHint.com.

-   <![if !vml]>![Text
    
    

Lighthouse

<![if !supportLists]>· <![endif]><![if !vml]>![Graphical user interface, application


Notable bugs

There were a few small visual errors when testing the site on different devices that I raise with my mentor Rahul. When passing the JS code through Jshint there was a few warnings regarding missing semi-colons and rogue brackets. The Jshint validator also highlighted many unused variables, these variables targeted the HTML doc so were not recognised as used within Jshint. I relied on Slack for clarification on this.

**Deployment**

-   The site was deployed to GitHub pages, the live link can be found here - [https://bobbydeane.github.io/MS2-Project/](https://bobbydeane.github.io/MS2-Project/)

## Credits

### Media

-   The main gun image was found on shuttershock.
-   The text was borrowed from Google fonts
-   The social media icons were taken from Font Awesome and the code institute ‘Love Running’ walkthrough.

### Reference Material

-   W3 Schools was used as a reference point for HTML, CSS and JavaScript

### Acknowledgements

Thanks to my Mentor Rahul for being supportive of my ideas and keeping me on track with his advice. Thanks again to Code institute for the Opportunity.