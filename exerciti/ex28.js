(function(){
	var sum = 0
		var total = prompt('how manny numbers you want to enter?')
		while(isNaN(total)===true){
    	total = prompt("please inser a number");
    	}
		var totalNum = parseInt(total);
		
	for(var  i = 0; i < totalNum;  i++) {
		var number = prompt('enter a number');
		while(isNaN(number)===true){
    	number = prompt("please inser a number");
    	}
		sum += parseInt(number);
		document.getElementById('text1').innerHTML += 'enter a number:' + number + '<br/>';
		
		
	}
		document.getElementById('text2').innerHTML += 'the total is:' + sum + '.';






})();