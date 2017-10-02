'use strict';

System.register([], function (_export, _context) {
	"use strict";

	var colors, index, element, output;


	function hasitha() {
		console.log("hasitha");
	}

	return {
		setters: [],
		execute: function () {
			colors = ['red', 'blue'];


			//normal way
			for (index = 0; index < colors.length; index++) {
				element = colors[index];

				console.log(element);
			}

			//array helpers
			//KEY WORDS ==>> iterater function
			//PROS ==>> less code
			colors.forEach(function (color) {
				console.log(color);
			});

			//array helpers with calling function
			colors.forEach(function (color) {
				console.log(color);
			}, hasitha());output = document.getElementById('output');

			output.innerHTML += 'testing';
		}
	};
});
//# sourceMappingURL=main.js.map
