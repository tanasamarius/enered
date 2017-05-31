(function(){
	
	


	document.getElementById('tto').addEventListener('click', function(){
		var exalts = document.getElementById('exalts').value;
		var pret = document.getElementById('pret').value;
		var tax = document.getElementById('tax').value;
		var taxpp = document.getElementById('taxpp').value;

		var totalprice = exalts * pret
		

		var total = ((exalts * pret) - (totalprice / 100) * tax) - taxpp;
		document.getElementById('total').value = total;
	})
})();