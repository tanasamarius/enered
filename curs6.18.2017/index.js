(function(){
	var data = {
		"items": [
			{
				"title" : " this is the 1 item title",
				"description": "first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem "
			},
			{
				"title" : " this is the 2 item title",
				"description": "second description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem "
			},
			{
				"title" : " this is the 3 item title",
				"description": "third description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem description first description lorem ipsum sit dolor amet lorem "
			},	
		]
	}
	function createElements() {
		for(var i = 0; i < data.items.length ; i++){
			var divBox = document.createElement('div');
			divBox.setAttribute('class', 'box');
			var title = document.createElement('h1');
			var titleText = document.createTextNode(data.items[i].title);
			title.append(titleText);

			var description = document.createElement('p');
			var descriptionText = document.createTextNode(data.items[i].description);
			description.append(descriptionText);


			divBox.append(title);
			divBox.append(description);

			document.getElementsByClassName('description-box')[0].append(divBox);

		}
	}
	createElements();

	var items2 = [
		{
			"title": "this is the 1 form",
			"name": "marius",
			"password": "password",
			"submit": "Go to"
		},
		{
			"title": "this is the 2 form",
			"name": "mada",
			"password": "fsadfsa",
			"submit": "Submit"
		},
		{
			"title": "this is the 3 form",
			"name": "teddyu",
			"password": "gfdddfgfg",
			"submit": "Login"
		}

	];
	function createForm() {
		for(var i = 0 ; i < items2.length ; i++) {
			//div wrapper
			var formBox = document.createElement('div');
			formBox.setAttribute('class', 'box');
			//create title
			var title = document.createElement('h1');
			var titleText = document.createTextNode(items2[i].title)
			title.append(titleText);
			//create name input
			var nameInput = document.createElement('input');
			nameInput.setAttribute('type', 'text');
			nameInput.setAttribute('placeholder', 'name');
			nameInput.setAttribute('class', 'form-control');
			nameInput.setAttribute('value', items2[i].name);
			//create password input
			var passwordInput = document.createElement('input');
			passwordInput.setAttribute('type', 'password');
			passwordInput.setAttribute('placeholder', 'name');
			passwordInput.setAttribute('class', 'form-control');
			passwordInput.setAttribute('value', items2[i].password);
			//create button 
			var submitButton = document.createElement('button');
			submitButton.setAttribute('class', 'btn btn-success');
			var submitButtonText = document.createTextNode(items2[i].submit);
			submitButton.append(submitButtonText);

			formBox.append(title);
			formBox.append(nameInput);
			formBox.append(passwordInput);
			formBox.append(submitButton);

			document.getElementsByClassName('form-box')[0].append(formBox);

		}
		
	}
	createForm();
	function bindEvent() {
		var buttons = document.getElementsByTagName('button');
		for(var i = 0; i < buttons.length; i ++){
			buttons[i].addEventListener('click', function(){
				if(this.parentElement.getElementsByTagName('p').length > 0) {
					this.parentElement.removeChild(this.parentElement.lastChild);
				}
				var inputs = this.parentElement.getElementsByTagName('input');
				var textNode = document.createTextNode('name: ' + inputs[0].value + ' password: ' + inputs[1].value);
				var paragraph = document.createElement('p');
				paragraph.setAttribute('display', 'inline-block');
				paragraph.setAttribute('class', 'form-control');
				paragraph.append(textNode);
				this.parentElement.append(paragraph);
			});
		}
	}
	bindEvent();


})();