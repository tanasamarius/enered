(function(){
  var radioBoxes = document.getElementsByClassName('inputs');
  for(i = 0; i < radioBoxes.length; i++){
    radioBoxes[i].addEventListener('click', function(){
      var counter = this.getAttribute('data-radio');
      document.getElementsByTagName('h1')[0].innerHTML = 'you have click input' + counter;
      var imgs = document.getElementsByClassName('popup')[0].getElementsByTagName('img');
      for(var i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
      }
      imgs[counter - 1].style.display = 'block';
      document.getElementsByClassName('popup')[0].style.display = 'block';
    });
  }
  setInterval(function(){
    for(i = 0; i < radioBoxes.length; i++){
      if(radioBoxes[i].checked){
        if(i == radioBoxes.length -1) {
          radioBoxes[0].click();
          i++;
        }else{
          radioBoxes[i + 1].click();
          i++;
        }
      }
    }
  },1000);

  


})();