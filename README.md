# phase-1-project
Phase 1 Final Project - Hue Tuner

What it is:
Hue Tuner is an interactive game where players "tune" the values for RGB in an attempt to match a given random color. The user has an opportunity to learn about RBG values in a fun and simple way. 


How it works:
 Starting with a random color, users click to adjust the range of Red, Green, and Blue primary colors to guess the color values. Since there are so many (256 x 256 x 256 = 16777216) possibilities, players will obtain points based on how close they get to the original color. 

Under the hood:
Using http://colormind.io/api-access/ to generate the random color, the RGB integers will be compared against the input of the user.

Future additions:
-Score board
-Tutorial (e.g. walking through basic colors first, like all Red)
-Improved interface, tuner buttons, and sound effects
