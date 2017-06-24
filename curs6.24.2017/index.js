(function(){

	var data = {
		'user' : 'marius',
		'address' : 'pe langa garibaldi',
		'age' : '14',
		'email' : 'marius@marius.com',
		"ocupation" : ['lineage', 'exalted', 'dota mai now']
	}
	function addData() {
		document.getElementById('username').value = data.user;
		document.getElementById('age').value = data.age;
		document.getElementById('address').value = data.address;
		document.getElementById('email').value = data.email;
		for(var i = 0; i < 3; i++){
			document.getElementsByClassName('ocupation')[i].value = data.ocupation[i];
		}
	}
	addData();


	document.getElementsByClassName('btn-success')[0].addEventListener('click', function(){
		getDataFromPage();

	});

	function getDataFromPage() {
		var formData = {};
		console.log(formData);
		formData.username = document.getElementById('username').value;
		formData.address = document.getElementById('address').value;
		formData.email = document.getElementById('email').value;
		formData.age = document.getElementById('age').value;
		formData.ocupation = [];
		for (var i = 0 ; i < 3 ; i++){
			formData.ocupation.push(document.getElementsByClassName('ocupation')[i].value);
		}
		console.log(formData);
	}
		//java script model
	function sendData() {
		var xhr = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById('demo').innerHTML = xhttp.responseText;
			}
		};


		//jquet model
		$.ajax({
			method: "POST",
			url: "http//blabal.com",
			data: formData
		});

	}
})();