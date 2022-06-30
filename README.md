# phase-1-project
# Hue Tuner

********************************************

____________________________________________


## Summary:


  **Hue Tuner** is an interactive, single-page web-application where users "tune" RGB values using slider range inputs and produce a color based on all three as a result. As part of the webpage, there is a built-in game wherein players attempt to match a given random color with their own resulting color. In the future there will be a scoring element and a scoreboard that will post the top players to the page. The point of Hue Tuner is to give the user an opportunity to learn about RBG values in a fun and simple way -- the page purposefully starts off in muted tones and comes alive the more the person learns and interacts within the site.


____________________________________________


## How it works for the users:


<img src = "/pictures/initial_HueTuner.png">


 Starting with a bland, black, white, and grey document, users navigate around to bring color to different pieces of the page, illuminating the dom in different ways with various parts of random color. For the game, users can click to create a color at random and then adjust the range of their Red, Green, and Blue primary colors to guess the color values, pressing a button when they think they have a match. Since there are so many (256 x 256 x 256 = 16777216) possibilities, in future additions to the app,  players will obtain points based on how close they get to the original color.


<img src = "/pictures/color_HueTuner.png">

 ___________________________________________


## Under the hood:


### HTML and CSS 
-- Starts on an initial load as a plain, unassuming structure and style. Top section is welcoming the person to the page and then below that are sections bringing the focus on the "tuner" bars and two color div blocks, the user's color and the soon to be random color. The tuners are range inputs set from 0 to 255 for each color. On the random block is a button to press for a new random color. After the color blocks is another button to check for a match of the two color sections. Some "hover" styling effects are given to the title bar and the labels to increase fun colors occuring (and also to showcase multiple ways to include design changes).


### Javascript 
-- Loads dom, grabs a random color from an API or function, listens for user interactions with a **forEach()** on the Nodelist, and updates dom with new colors and results.


#### Main event listeners:

  -hover over banner to create color and effects on individual letters

  -click and drag the range input (aka tuner) and place color on bar based on value

  -combine the three inputs into one color and place it in block on the dom

  -(Being built) submit guess button to check for match

  -(Being built) secret "copy" listener to "cheat" on matching game


____________________________________________


### Future additions:


  [  ] Score board stored in JSON.db and placed on the dom

  [  ] Tutorial alert (e.g. walking through basic colors first, like all Red, White, ect)

  [  ] Improved interface, tuner buttons, and sound effects

  [  ] More messages/scoring describing how close or far the guess was from the random color

  [  ] Secret rainbow snake game using Dots function


____________________________________________


### Resources:


  -http://colormind.io/api-access/ (Random Color Palette API)
  -https://www.w3schools.com/howto/howto_js_rangeslider.asp (Range-slider tutorial)
  -https://css-tricks.com/css-link-hover-effects/ (Title Bar Rainbow Effect)
  -https://codepen.io/falldowngoboone/pen/PwzPYv (Arrow Trail Effect to be used in future rainbow snack game)