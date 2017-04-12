// add an event listener to #click-me
// store inputs as variables using .value method
// (max-age - age) * drinks per day * 365
// output answers for the user to see

//1
document.querySelector ('click-me').online = function () {
 	//2
 	var currentAge = document.querySelector('#age').value;
 	var maxAge = document.querySelector('#max-age').value;
 	var favoriteDrink = document.querySelector('#item').value;
 	var drinksPerDay = document.querySelector('#num-per-day').value;
//3
currentAge = parseInt(currentAge);
maxAge = parstInt(maxAge);
drinksPerDay = parseInt(drinksPerDay);

var drinksLeft = (maxAge - currentAge) * drinksPerDay * 365
 
document.querySelector('#solution').innerHTML = drinksLeft;
document.querySelector('#drinksLeft').innerHTML = favoriteDrink;
}

//document.querySelector('#solution')
//document.querySelector('#drink')