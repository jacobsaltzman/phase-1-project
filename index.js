document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  getRandomColor();
});

//function to grab json/api data

function getRandomColor(){
var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : ["N","N","N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
    console.log(palette)
    return palette
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));
//console.log(data )
}


//function to grab random color and its associated RGB and add it to the dom

//function for all three event listeners
  //-hover color change
function changeColorOnHover(){
  
}

  //-arrow keys to turn the dial and move from Red, Green and Blue
  //-submit guess button

//function to add guess color to the dom

//function to give results (e.g. how close each value was to the random one) and add it to the dom