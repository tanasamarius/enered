(function(){
	document.getElementsByClassName('user-control')[0].getElementsByClassName('btn')[0].addEventListener('click', function(){
		var dropMenu = this.parentElement.getElementsByClassName('dropdown-menu')[0];
		if(dropMenu.style.display == 'block'){
			dropMenu.style.display = 'none';
		}else{
			dropMenu.style.display = 'block';
		}
	});
	document.getElementsByClassName('user-control')[0].getElementsByClassName('dropdown-menu')[0].getElementsByClassName('loggin-button')[0].addEventListener('click', function (){
		var dropAccMenu = this.parentElement.getElementsByClassName('login-submenu')[0];
		if(dropAccMenu.style.display == 'block'){
			dropAccMenu.style.display = 'none';
		}else{
			dropAccMenu.style.display = 'block';
		}
	});




})();