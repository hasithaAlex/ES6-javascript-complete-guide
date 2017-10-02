
var colors = ['red', 'blue'];

//normal way
for (var index = 0; index < colors.length; index++) {
	var element = colors[index];
	console.log(element);
}			 



//array helpers
//KEY WORDS ==>> iterater function
//PROS ==>> less code
colors.forEach(function(color) {
	console.log(color);
});

//array helpers with calling function
colors.forEach(function(color) {
	console.log(color);
},hasitha());

function hasitha() {
	console.log("hasitha");
}

var output = document.getElementById('output');
output.innerHTML += `testing`;
