(function() {
	console.log(window.location.href);

	var planetID = window.location.href.split('?')[1];
	console.log(planetID);

	function loadPlanet() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      createPlanet(JSON.parse(xhr.responseText));
		    }
		};
		xhr.open("GET", "http://swapi.co/api/planets/" + planetID , true);
		xhr.send();
	}


	function createPlanet(bigData) {

		console.log(bigData);
		var name  = document.createElement('h3');
		name.setAttribute('class', 'name');
		var textName = document.createTextNode(bigData.name);
		name.append(textName);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(name);


		var climate  = document.createElement('p');
		climate.setAttribute('class', 'name');
		var textclimate = document.createTextNode("climate: " + bigData.climate);
		climate.append(textclimate);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(climate);

		var created  = document.createElement('p');
		created.setAttribute('class', 'name');
		var textcreated = document.createTextNode("created: " + bigData.created);
		created.append(textcreated);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(created);

		var diameter  = document.createElement('p');
		diameter.setAttribute('class', 'name');
		var textdiameter = document.createTextNode("diameter: " + bigData.diameter);
		diameter.append(textdiameter);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(diameter);

		var edited  = document.createElement('p');
		edited.setAttribute('class', 'name');
		var textedited = document.createTextNode("edited: " + bigData.edited);
		edited.append(textedited);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(edited);

		var gravity  = document.createElement('p');
		gravity.setAttribute('class', 'name');
		var textgravity = document.createTextNode("gravityu: " + bigData.gravity);
		gravity.append(textgravity);name
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(gravity);

		var orbital_period  = document.createElement('p');
		orbital_period.setAttribute('class', 'name');
		var textorbital_period = document.createTextNode("orbital_period: " + bigData.orbital_period);
		orbital_period.append(textorbital_period);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(orbital_period);

		var population  = document.createElement('p');
		population.setAttribute('class', 'name');
		var textpopulation = document.createTextNode("population: " + bigData.population);
		population.append(textpopulation);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(gravity);

		var rotation_period  = document.createElement('p');
		rotation_period.setAttribute('class', 'name');
		var textrotation_period = document.createTextNode("rotation_period: " + bigData.rotation_period);
		rotation_period.append(textrotation_period);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(rotation_period);

		var terrain  = document.createElement('p');
		terrain.setAttribute('class', 'name');
		var textterrain = document.createTextNode("terrain: " + bigData.terrain);
		terrain.append(textterrain);
		//get container from html page
		var container = document.getElementsByClassName('container')[0];
		// append request content to container from html
		container.append(terrain);

	}


	loadPlanet();

	document.getElementById('backToIndex').addEventListener('click', function() {
		window.location.href = "index.html";
	});








})();