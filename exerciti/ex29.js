(function(){

	var rate = prompt('What is the rate of return?');
		while(isNaN(rate) === true || rate == '0'){
			rate = prompt('Sorry. That\'s not a valid input');
		}
		var sum = parseInt(rate);

		document.getElementById('text1').innerHTML = 'What is the rate of return?==' + rate;
		document.getElementById('text2').innerHTML = 'It will take ' + (72 / rate) + ' ' + 'years to double your initial investment';


})();