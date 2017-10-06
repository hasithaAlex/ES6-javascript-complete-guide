"use strict";

System.register([], function (_export, _context) {
	"use strict";

	var numbers, DoubleNumbers, cars, prices;
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

			cars = [{ model: 'Toyota', price: 100000 }, { model: 'Yamaha', price: 210000 }, { model: 'Lambogini', price: 30000000 }];
			prices = cars.map(function (car) {
				return car.price;
			});


			console.log(prices);
		}
	};
});
//# sourceMappingURL=main.js.map
