// <div class="box">
// 				<h1 class="text-center">This is a heading</h1>
// 				<input type="text" class="form-control">
// 				<a href="javascript:void(o)" class="btn btn-primary">Do something</a>
// 			</div>


(function(){
	var imgArray = ['https://s-media-cache-ak0.pinimg.com/736x/2c/d3/f4/2cd3f4ab274100b27954b0a8bf253509.jpg', 'https://www.hittesti.com/wp-content/uploads/2016/04/panda-desiigner-testo-traduzione.jpg', 'http://www.much.com/wp-content/uploads/2016/05/lilkimmainopanda.jpg']
	function createElementsJs(elementsLength) {
		for(var i = 0; i < elementsLength; i++){
			// create div class="box"
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class', 'box');
			// create h1 class="text-center" -> this is a heading
			var heading = document.createElement('h1');
			heading.setAttribute('class', 'text-center');
			var headingH1Text = document.createTextNode('this is a heading');
			heading.append(headingH1Text);
			// create input class="form-control" type='text'
			var input = document.createElement('input');
			input.setAttribute('class', 'form-control');
			input.setAttribute('type', 'text');
			// create anchor class=btn btn-primary , href="javascript:void(0)" -> do something
			var anchorButton = document.createElement('a');
			anchorButton.setAttribute('class', 'btn btn-primary');
			anchorButton.setAttribute('href', 'javascrpt:void(0)');
			var anchorText = document.createTextNode('do something');
			anchorButton.append(anchorText);

			boxDiv.append(heading);
			boxDiv.append(input);
			boxDiv.append(anchorButton);

			document.getElementsByClassName('js-create')[0].append(boxDiv);

		}

	}
	function createElementsJquery(elementsLength) {
		for(var i = 0; i < elementsLength; i++) {
			var box = $('<div class="box"> <h1 class="text-center">This is a heading</h1><input type="text" class="form-control"><a href="javascript:void(o)" class="btn btn-primary">Do something</a></div>');
			document.getElementsByClassName('jquery-create')[0].append(box[0]);
		}
	}
	function createPanda(elementsLength) {
		for(var i = 0; i < elementsLength; i++) {
			var img = $('<div class="box-img text-center"><img src="' + imgArray[i] + '" class="img-responsive img-circle"></div>')
			document.getElementsByClassName('custom-create')[0].append(img[0]);
		}
	}
	function createPandaJs(elementsLength) {
		for(var i = 0; i < elementsLength; i++) {
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class', 'box-img text-center');
			var img = document.createElement('img');
			img.setAttribute('class', 'img-responsive img-circle');
			img.setAttribute('src', imgArray[i]);

			boxDiv.append(img);	
			document.getElementsByClassName('custom-create')[0].append(boxDiv);
		}
	}
	

	createElementsJs(3);
	createElementsJquery(3);
	createPanda(3);
    createPandaJs(3);

})();