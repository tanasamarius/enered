(function() {
	
	var items= [
		{
			"title": "this is the title 1 ",
			"input1": "adelina",
			"input2": "adelina",
			"input3": "1234",
		},
		{
			"title": "this is the title 2 ",
			"input1": "adelina2",
			"input2": "adelina2",
			"input3": "146356544",
		},
		{
			"title": "this is the title 3",
			"input1": "adelina3",
			"input2": "adelina3",
			"input3": "1276575634",
		}
	];

	// <div class="item col-md-3">
	// 			<h1 class="text-center">Title</h1>
	// 			<input class="form-control" name="name" type="text">
	// 			<input class="form-control" name="prenume" type="text">
	// 			<input class="form-control" name="parola" type="password">
	// 			<button class="btn btn-warning">Give me data</button>
	// 			<p>Inputs results:</p>
	// 		</div>


	document.getElementById('add').addEventListener('click', function(){


		 function createElements(){
		 	for(var i = 0; i < items.length; i++){
			 	var divBox = document.createElement('div');
			 	divBox.setAttribute('class', 'item col-md-3');

			 	var title = document.createElement('h1');
			 	title.setAttribute('class', 'text-center')
			 	var titleText = document.createTextNode(items[i].title);
			 	title.append(titleText);

			 	var name = document.createElement('input');
			 	name.setAttribute('class', 'form-control');
			 	name.setAttribute('type', 'text');
			 	name.setAttribute('name', 'name');
			 	name.setAttribute('value', items[i].input1);

			 	var prenume = document.createElement('input');
			 	prenume.setAttribute('class', 'form-control');
			 	prenume.setAttribute('type', 'text');
			 	prenume.setAttribute('name', 'prenume');
			 	prenume.setAttribute('value', items[i].input2);

			 	var password = document.createElement('input');
			 	password.setAttribute('class', 'form-control');
			 	password.setAttribute('type', 'password');
			 	password.setAttribute('name', 'password');
			 	password.setAttribute('value', items[i].input3);

			 	var button = document.createElement('button');
			 	button.setAttribute('class', 'btn btn-warning');
			 	buttonText = document.createTextNode('Give me data');
			 	button.append(buttonText);

			 	var paragraph = document.createElement('p');
			 	var paragraphText = document.createTextNode('Inputs results: ')
			 	paragraph.append(paragraphText);

			 	divBox.append(title);	
			 	divBox.append(name);
			 	divBox.append(prenume);
			 	divBox.append(password);
			 	divBox.append(button);
			 	divBox.append(paragraph);

			 	document.getElementsByClassName('container')[0].append(divBox);
			 	
		 	}

		}

		 createElements();

		 function results(){
			 var buttons = document.getElementsByClassName('btn-warning');
			 	for(var i = 0; i < buttons.length; i++){
			 		buttons[i].addEventListener('click', function(){
					var inputs = this.parentElement.getElementsByTagName('input');
					var textNode = this.parentElement.getElementsByTagName('p')[0].innerHTML = 'name: ' + inputs[0].value + ' password: ' + inputs[1].value;

			 	});
			 }
		}	 	
		results()
	});	
	document.getElementsByClassName('footer')[0].addEventListener('click', function(){
    var hideMenu = this.parentElement.getElementsByClassName('footer-info')[0];
    if(hideMenu.style.display == 'block'){
      hideMenu.style.display = 'none';
    }else{
      hideMenu.style.display = 'block';
    }
  });


})();