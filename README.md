# phase-1-project
Phase 1 Final Project - Hue Tuner


Summary:


  Hue Tuner is an interactive, single-page web-application where users "tune" RGB values using slider inputs and produce a color based on all three as a result. As part of the webpage, there is a built-in game wherein players attempt to match a given random color with their own resulting color. In the future there will be a scoring element and a scoreboard that will post the top players to the page. The point of Hue Tuner is to give the user an opportunity to learn about RBG values in a fun and simple way -- the page purposefully starts off in muted tones and comes alive the more the person learns and interacts within the site.


How it works:

 Starting with a random color, users click to adjust the range of Red, Green, and Blue primary colors to guess the color values. Since there are so many (256 x 256 x 256 = 16777216) possibilities, players will obtain points based on how close they get to the original color. 

Under the hood:


  Using http://colormind.io/api-access/ to generate the random colors, the RGB integers of the user input will be compared against the randomly generating one. 

Three event listeners:


  -hover over banner to create color and effects on individual letters
  -arrow keys to turn the dial
  -submit guess button

Future additions:
  -Score board
  -Tutorial (e.g. walking through basic colors first, like all Red)
  -Improved interface, tuner buttons, and sound effects
  -More messages describing how close or far the guess was


Resources:
  -http://colormind.io/api-access/ (Random Color Palette API)
  -https://github.com/andrepxx/pure-knob (Knob)
  -https://css-tricks.com/css-link-hover-effects/ (Title Bar Rainbow Effect)
  -https://codepen.io/falldowngoboone/pen/PwzPYv (Arrow Trail Effect)