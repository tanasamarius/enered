(function(){
	var data = {
		"items": [
			{
				"id": 4132,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Welcome",
				"timestamp" : "5h",
				"tags" : ["tag343", "welcome" , "presentation"],
				"size" : "2245134"
			},
			{
				"id": 131313,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Client",
				"timestamp" : "2h",
				"tags" : ["tag2", "client" , "presentation", "aegis", "company"],
				"size" : "32451341"
			},
			{
				"id": 34321,
				"previewImg" : "slides/1.jpg",
				"title" : "Template Client31231",
				"timestamp" : "4h",
				"tags" : ["tag2", "ghifaghafg" , "presentation", "aegis", "company"],
				"size" : "541341"
			},	
		]
	}
// 	function createElements(data) {
// 		for(var i = 0 ; i < data.length; i++){
// 			var boxDiv = document.createElement('div');
// 			var titleH1 = document.createElement('h1');
// 			var titluH1Text = document.createTextNode(data[i].title);


// 			var addedP = document.createElement('p');

// 			var addI = document.createElement('i');
// 			var addIText = document.createTextNode('Added :');

// 			var addSpan = document.createElement('span');
// 			var addSpanText = document.createTextNode(data[i].timestamp);

// 			var addI2 = document.createElement('i');
// 			var addI2Text = document.createTextNode(' Ago');




// 			titleH1.append(titluH1Text);
// 			boxDiv.append(titleH1);

// 			boxDiv.append(addedP);
// 			addedP.append(addI);
// 			addI.append(addIText);
// 			addIText.append(addSpan);
// 			addSpan.append(addSpanText);
// 			addIText.append(addI2);
// 			addI2.append(addI2Text);






// 			document.getElementsByClassName('create-boxes')[0].append(boxDiv);

// 		}
// 	}
// 	createElements(data.items);
		
	function createElements() {

		for(var i = 0; i < data.items.length; i++){
			var boxDiv = document.createElement('div');
			boxDiv.setAttribute('class', 'box');

			var heading = document.createElement('h1');
			heading.setAttribute('class', 'text-center');
			var headingText = document.createTextNode(data.items[i].title);
			heading.append(headingText);


			var paragraph = document.createElement('p');
			paragraph.setAttribute('class', 'text-left');
			var italic = document.createElement('i');
			var italicAdded = document.createTextNode('added ');
			var italicAgo = document.createTextNode(' ago');
			var span = document.createElement('span');
			var spanText = document.createTextNode(data.items[i].timestamp);
			console.log(paragraph);


			span.append(spanText);
			italic.append(italicAdded);
			italic.append(span);
			italic.append(italicAgo);
			paragraph.append(italic);

			var tagsDiv = document.createElement('div');
			tagsDiv.setAttribute('class', 'tags');
			var spanTitle = document.createElement('span');
			var spanTitleText = document.createTextNode('tags : ');
			spanTitle.append(spanTitleText);
			tagsDiv.append(spanTitle);

			for(var j = 0; j < data.items[i].tags.length; j++) {
				var spanTag = document.createElement('span');
				spanTag.setAttribute('class', 'tags-box');
				var spanTagText = document.createTextNode(data.items[i].tags[j]);
				spanTag.append(spanTagText);
				tagsDiv.append(spanTag);


				var sizeTitle = document.createElement('span');
				var sizeTitleText = document.createTextNode('Size : ');
				sizeTitle.append(sizeTitleText);
				var sizeValue = document.createElement('span');
				var sizeValueText = document.createTextNode((parseInt(data.items[i].size) / 1048576).toFixed(2));
				sizeValue.append(sizeValueText);

				
				boxDiv.append(heading);
				boxDiv.append(paragraph);
				boxDiv.append(tagsDiv);
				boxDiv.append(sizeTitle);
				boxDiv.append(sizeValue);

				document.getElementsByClassName('create-boxes')[0].append(boxDiv);
			}
		}


	}
	createElements();
	






})();

