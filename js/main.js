console.log("video_04========================================================");
var colors = ['red', 'blue'];

//=====================================================================
//normal way
for (var index = 0; index < colors.length; index++) {
	var element = colors[index];
	console.log(element);
}			 


//=====================================================================
//array helpers
//KEY WORDS ==>> iterater function
//PROS ==>> less code
colors.forEach(function(color) {
	console.log(color);
});

//array helpers and after for each calling another function
colors.forEach(function(color) {
	console.log(color);
},hasitha());

function hasitha() {
	console.log("hasitha");
}


console.log("video_05========================================================");

var numbers = [1, 2, 3, 4];




var sum = 0; 
numbers.forEach(function(element) {
	sum += element;
});	
console.log(sum);


//using a function inside forEach
function adder(element) {
	sum += element;
}
var sum = 0;
numbers.forEach(adder);	
console.log(sum);

var output = document.getElementById('output');
output.innerHTML += `Application`;
