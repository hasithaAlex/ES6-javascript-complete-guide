'use strict';

System.register([], function (_export, _context) {
	"use strict";

	var colors, index, element, numbers, sum, sum, output;


	function hasitha() {
		console.log("hasitha");
	}

	//using a function inside forEach
	function adder(element) {
		sum += element;
	}
	return {
		setters: [],
		execute: function () {
			console.log("video_04========================================================");
			colors = ['red', 'blue'];


			//=====================================================================
			//normal way
			for (index = 0; index < colors.length; index++) {
				element = colors[index];

				console.log(element);
			}

			//=====================================================================
			//array helpers
			//KEY WORDS ==>> iterater function
			//PROS ==>> less code
			colors.forEach(function (color) {
				console.log(color);
			});

			//array helpers and after for each calling another function
			colors.forEach(function (color) {
				console.log(color);
			}, hasitha());console.log("video_05========================================================");

			numbers = [1, 2, 3, 4];
			sum = 0;

			numbers.forEach(function (element) {
				sum += element;
			});
			console.log(sum);sum = 0;

			numbers.forEach(adder);
			console.log(sum);

			output = document.getElementById('output');

			output.innerHTML += 'Application';
		}
	};
});
//# sourceMappingURL=main.js.map
