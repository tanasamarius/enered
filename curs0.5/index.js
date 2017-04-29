(function() {


	document.getElementById('submitButton').addEventListener('click', function() {
		var formCheck = false;
		if(document.getElementById('userName').value == '') {
			document.getElementById('userName').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('userName').parentElement.classList.remove('has-error');
		}

		if(document.getElementById('email').value == '') {
			document.getElementById('email').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('email').parentElement.classList.remove('has-error');
		}

		 if(document.getElementById('password').value == '') {
			document.getElementById('password').parentElement.classList.add('has-error');
			formCheck = true;
		} else {
			document.getElementById('password').parentElement.classList.remove('has-error');
		}

		if(formCheck) {
			alert('nu ai completat tate campurile');
		} else {
			var myObject = {
				username : document.getElementById('userName').value,
				email : document.getElementById('email').value,
				password : document.getElementById('password').value

			}
			console.log(myObject);
			var myObject = JSON.stringify(myObject);
			console.log(myObject);
			myObject = JSON.parse(myObject);
			console.log(myObject);

			
		}



	});


	document.getElementById('getData').addEventListener('click', function() {
		getData();
		var animate = document.getElementsByClassName('animate');
		for(var i = 0 ; i < animate.length ; i++) {
			animate[i].style.display = "block";
		}
	});

	function getData() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      createElements(JSON.parse(xhr.responseText));
		    }
		};
		xhr.open("GET", "http://swapi.co/api/people/", true);
		xhr.send();
	}



	function createElements(bigData) {
		for(var i = 0 ; i < bigData.results.length ; i++) {
			createPerson(bigData.results[i]);
			console.log();
		}
	}


	function createPerson(personData) {
		var divPerson = document.createElement('div');
		divPerson.setAttribute('class', 'person');
		//append to sw-list
		var name = document.createElement('h3');
		name.setAttribute('class', 'name');
		var textName = document.createTextNode(personData.name);
		//append text to element
		name.append(textName);
		divPerson.append(name);
		console.log(personData);



		var age = document.createElement('p');
		age.setAttribute('class', 'age');
		var textAge = document.createTextNode(personData.birth_year);
		//append text to element
		age.append(textAge);
		divPerson.append(age);





		var skin = document.createElement('p');
		skin.setAttribute('class', 'skin');
		var textSkin = document.createTextNode(personData.skil);
		//append text to element
		skin.append(textSkin);
		divPerson.append(skin);




		var eye = document.createElement('p');
		eye.setAttribute('class', 'eye');
		var textEye = document.createTextNode(personData.eye_color);
		//append text to element
		eye.append(textEye);
		divPerson.append(eye);




		var hair = document.createElement('p');
		hair.setAttribute('class', 'hair');
		var textHair = document.createTextNode(personData.hair_color);
		//append text to element
		hair.append(textHair);
		divPerson.append(hair);




		var eye_color = document.createElement('p');
		eye_color.setAttribute('class', 'eye_color');
		var textEye_color = document.createTextNode(personData.eye_color);
		//append text to element
		eye_color.append(textEye_color);
		divPerson.append(eye_color);






		var mass = document.createElement('p');
		mass.setAttribute('class', 'mass');
		var textMass = document.createTextNode(personData.mass);
		//append text to element
		mass.append(textMass);
		divPerson.append(mass);

		document.getElementsByClassName('sw-list')[0].append(divPerson);
	

	}








})();