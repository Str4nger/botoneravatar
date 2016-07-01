$(function () {
  $('.sonido button').on('click', function () {
      $('audio').trigger('stop');
      $(this).siblings('audio').trigger('play');
  });
});

document.addEventListener('play', function(e){
    var audios = $('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            // Pausa y vuelve a cero, como un stop
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
}, true);
