"use strict";

System.register([], function (_export, _context) {
	"use strict";

	var numbers, DoubleNumbers;
	return {
		setters: [],
		execute: function () {
			console.log("video_07==(MAP)==================================================");

			numbers = [1, 2, 3];
			DoubleNumbers = numbers.map(function (number) {
				return number * 2;
			});

			console.log(numbers);
			console.log(DoubleNumbers);

			console.log("video_08==(MAP more COMPLEX)=====================================");
		}
	};
});
//# sourceMappingURL=main.js.map
