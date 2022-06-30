document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");

  getRandomColorFromAPI();
  randomColor();
  //arrowTrail();
  changeColorOnHover();
  newRandomColorButton();
  addColorToBarsAndDom();
  var newColorFromAPI = "";
  submitMatchGuess();
  getAnswers();
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
    function pasteToGlobalColor(){
      newColorFromAPI = `rbg(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`
    }
    pasteToGlobalColor();
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

//hover color change
function changeColorOnHover(){
  const banner = document.getElementsByClassName("banner")
  for (let i = 0; i < banner.length; i++){
  banner[i].addEventListener("mouseover", function (){
    let newColor = randomColor()
    banner[i].style.color = newColor
  })
  }
}

//submit new random color request button
function newRandomColorButton(){
  const newButton = document.getElementById("new-color")
  newButton.addEventListener("click", () => {
    const newHue = randomColor();
    const newBox = document.getElementById("random-color-box")
    newBox.style.background = newHue
  })
}

//function to add color to the slide bars
function addColorToBarsAndDom(){
  const sliders = document.querySelectorAll('.slider')
  sliders.forEach(slider => {
    slider.addEventListener("click", function(){
      const userColorBox = document.getElementById("user-color-box")
      const redInput = document.getElementById("myRangeRed")
      const greenInput = document.getElementById("myRangeGreen")
      const blueInput = document.getElementById("myRangeBlue")

      if(slider.id == "myRangeRed"){
        slider.style.background = `rgb(${slider.value}, 0, 0)`
        userColorBox.style.background = `rgb(${slider.value}, ${greenInput.value}, ${blueInput.value})`
        
      }
      if(slider.id == "myRangeGreen"){
        slider.style.background = `rgb(0, ${slider.value}, 0)`
        userColorBox.style.background = `rgb(${redInput.value}, ${slider.value}, ${blueInput.value})`

      }
      if(slider.id == "myRangeBlue"){
        slider.style.background = `rgb(0, 0, ${slider.value})`
        userColorBox.style.background = `rgb(${redInput.value}, ${greenInput.value}, ${slider.value})`
        
      }
      
  })
})
}
  



//-submit guess button

function submitMatchGuess(){
  const checkButton = document.getElementById("check")
  const userColorSelection = document.getElementById("user-color-box")
  const randomColorSelection = document.getElementById("random-color-box")
  checkButton.addEventListener("click", ()=>{
    if(randomColorSelection.style.background == userColorSelection.style.background){
      alert("Wow, same Hue!")
      const showGif = document.getElementById("winner")
      showGif.style.display = "block"
    }
    
  })
}

//secret cheat code

function getAnswers(){
  const userColorAnswer = document.getElementById("user-color-box")
  const randomColorAnswer = document.getElementById("random-color-box")
  randomColorAnswer.addEventListener("copy", ()=>{
    alert("You Copy Cat!")
  })
}



//functions to be added in later:

//function to give results (e.g. how close each value was to the random one) and add it to the dom


//arrow trail of colors
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

//score board and json.db communication

//sound effects

