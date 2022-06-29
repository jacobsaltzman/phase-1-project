document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  getRandomColorFromAPI();
  randomColor();
  //arrowTrail();
  changeColorOnHover();
  newRandomColorButton();
  addColorToBars()
});

//function to grab json/api data for colors

function getRandomColorFromAPI(){
var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : ["N","N","N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
    // console.log(palette)
    // return palette returns array of array values
    const newColor = palette[0]
    return `rbg(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`
    
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));
//console.log(data )
}

//get random RGB Color function without API

function randomColor(){
  let r = Math.floor(Math.random()*255)
  let g = Math.floor(Math.random()*255)
  let b = Math.floor(Math.random()*255)
  // console.log([r,g,b])
  return `rgb(${r}, ${g}, ${b})`
}



//functions for all event listeners

//#1 hover color change
function changeColorOnHover(){
  const banner = document.getElementsByClassName("banner")
  for (let i = 0; i < banner.length; i++){
  banner[i].addEventListener("mouseover", function (){
    // console.log(`Found ${banner[i].innerHTML}!`)
    let newColor = randomColor()
    // console.log(newColor)
    banner[i].style.color = newColor
  })
  }
}


//#2 arrow trail of colors

function arrowTrail(){
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };

// The Dot object used to scaffold the dots
var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   n.style.background = randomColor();  //added random color
   document.body.appendChild(n);
   return n;
 }());
};
// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 100; i++) {
 var d = new Dot();
 dots.push(d);
}

// This is the screen redraw function
function draw() {
 // Make sure the mouse position is set everytime
   // draw() is called.
 var x = mouse.x,
     y = mouse.y;
 
 // This loop is where all the 90s magic happens
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .6;
   y += (nextDot.y - dot.y) * .6;

 });
}

addEventListener("mousemove", function(event) {
//  event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().
function animate() {
 draw();
 requestAnimationFrame(animate);
}

animate();
}



//#3 submit new random color request button
function newRandomColorButton(){
  const newButton = document.getElementById("new-color")
  newButton.addEventListener("click", () => {
    const newHue = randomColor();
    const newBox = document.getElementById("random-color-box")
    newBox.style.background = newHue
  })
}

//function to add color to the slide bars
function addColorToBars(){
  const sliders = document.querySelectorAll('.slider')
  console.log(sliders)
  sliders.forEach(slider => {
    slider.addEventListener("click", function(){
    console.log("works!")
    if(slider.id == "myRangeRed"){
      console.log("red")
    }
    if(slider.id == "myRangeGreen"){
      console.log("green")
    }
    if(slider.id == "myRangeBlue"){
      console.log("blue")
    }
  })
})
}
  //then function to use that function to add the Red, Green, and Blue seperately 


//function to add guess color to the dom
function addUserColorComboToDiv(){

}

//-submit guess button

//function to give results (e.g. how close each value was to the random one) and add it to the dom


