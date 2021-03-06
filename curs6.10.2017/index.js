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
			"tags" : ["tag2", "cl213111111111111111111ient" , "presentation", "aegis", "company"],
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
		{
			"id": 21313,
			"previewImg" : "slides/1.jpg",
			"title" : "Template Client6757",
			"timestamp" : "12h",
			"tags" : ["tag2", "kgafkjg" , "presentation", "aegis", "company"],
			"size" : "3245134"
		},
		{
			"id": 11,
			"previewImg" : "slides/1.jpg",
			"title" : "Template Client 23131",
			"timestamp" : "2h",
			"tags" : ["tag2", "client" , "presentation", "aegis", "company", "zmbrtz"],
			"size" : "945134"
		},
		{
			"id": 613,
			"previewImg" : "slides/1.jpg",
			"title" : "Template Client 23131",
			"timestamp" : "2h",
			"tags" : ["tag2", "ppt" , "presentation", "aegis", "company", "ablehe"],
			"size" : "8513421"
		},
		{
			"id": 54678,
			"previewImg" : "slides/1.jpg",
			"title" : "Template for company fees",
			"timestamp" : "7h",
			"tags" : ["tag1", "fee" , "presentation", "dentsu", "aegis", "ppt", "financial", "client"],
			"size" : "545172"
		},
		{
			"id": 78798,
			"previewImg" : "slides/1.jpg",
			"title" : "Template Welcome",
			"timestamp" : "29h",
			"tags" : ["tag767", "client" , "presentation", "dentsu", "aegis", "financial"],
			"size" : "7245134"
		}	

	]
}
	
	function createElements(data) {
		for(var i = 0; i < data.length; i++){
			var wrapperDiv = document.createElement('div');
			wrrraperDiv.setAttribute('class', 'frames col-md-3');
			var wrrraperImg = document.createElement('div');
			wrrraperImg.setAttribute('class', 'image-box');
			var wrapperText = document.createElement('div');
			wrapperText.setAttribute('class', 'text');

			//create image wrapper elements;
			var img = document.createElement('img');
			img.setAttribute('src', 'frame.jpg');
			hoverBox = document.createElement('div');
			hoverBox.setAttribute('class', 'hover-box');
			var label = document.createElement('label');
			var inputCheckbox = document.createElement('input');
			inputCheckbox.setAttribute('type', 'checkbox');
			inputCheckbox.setAttribute('data-size', value[i].size);
			var lebelText = document.createTextNode('Select for download');

			//create first

			label.append(inputCheckbox);
			label.append(labelText);
			hoverBox.append(label);
			wrapperImg.append(img);
			wrapperImg.append(hoverBox);

			wrapperDiv.append(wrrraperImg);
			document.getElementsByClassName('row')[0].append(wrapperDiv);
			
		}
	}
	createElements(data.items);
})();