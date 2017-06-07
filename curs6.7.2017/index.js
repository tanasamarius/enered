(function(){
	var buttons = document.getElementById('menubars').getElementsByTagName('a');
	for(var i = 0 ; i < buttons.length ; i++) {
		buttons[i].addEventListener('click', function() {
			var position = parseInt(this.getAttribute('data-img'));
			var images = document.getElementsByClassName('imgShow');
			for(var i = 0 ; i < images.length ; i++) {
				images[i].style.display = "none";
			}
			images[position].style.display = "block";
			event.preventDefault();
			return false;
		});
	}
})();