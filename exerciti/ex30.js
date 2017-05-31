(function(){
function generateTable(endOfLine){
	for(var i = 0 ; i < 13; i++){
		var row = document.createElement('div');
		row.setAttribute('class', 'row');
		var box = document.createElement('div');
		box.setAttribute('class', 'box');
		var number = document.createTextNode(i);
		box.append(number);
		row.append(box);
		for(j = 0 ; j < endOfLine ; j++){
			var box = document.createElement('div');
			box.setAttribute('class', 'box');
			var number = document.createTextNode( i * j);
			box.append(number);
			row.append(box);
		}
		document.getElementById('table').append(row);
	}			


}
	generateTable(15);
})();