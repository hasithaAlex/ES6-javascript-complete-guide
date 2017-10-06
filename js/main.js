
console.log("video_07==(MAP)==================================================");

var numbers = [1,2,3];
var DoubleNumbers = numbers.map(function (number) {
	return (number*2)
});
console.log(numbers);
console.log(DoubleNumbers);

console.log("video_08==(MAP more COMPLEX)=====================================");

var cars = [
	{model:'Toyota',price:100000},
	{model:'Yamaha',price:210000},
	{model:'Lambogini',price:30000000}
];

var prices = cars.map(function (car) {
	return car.price;
})

console.log(prices);
