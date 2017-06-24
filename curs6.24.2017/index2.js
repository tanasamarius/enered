(function(){
	var data = {
		'user' : 'georgiana katrinel',
		'password' : '1231232',
		'city' : 'iasi',
		'country' : 'romania',
		'zipcode' : '700700',
		'description' : 'this is profile description all in all .loren ipsum'
	}
	

	function addData() {
		var splitText = data.user.split(' ');
		document.getElementById('usernamee').value = splitText[0];
		document.getElementById('usernamee2').value = splitText[1];
		document.getElementById('username').value = data.user;
		document.getElementById('password').value = data.password;
		document.getElementById('city').value = data.city;
		document.getElementById('country').value = data.country;
		document.getElementById('zipcode').value = data.zipcode;
		document.getElementById('description').value = data.description;
	}
	addData();
	document.getElementById('addData').addEventListener('click', function(){
	function getData() {
		var formData = {};
		formData.user = document.getElementById('username').value;
		formData.password = document.getElementById('password').value;
		formData.city = document.getElementById('city').value;
		formData.country = document.getElementById('country').value;
		formData.zipcode = document.getElementById('zipcode').value;
		formData.description = document.getElementById('description').value;

		console.log(data);
	}
	getData();
	});	

	var stringData = 'Marius / teddy / diana / Andrei';
	var resultArray = stringData.split('/');
	//console.log(resultArray);
	var reverseArray = resultArray.join('@');
	//console.log(reverseArray);

	


	

	
})();