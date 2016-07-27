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

var kkeys = [], awesome = "67,65,76,65,66,82,79";
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( awesome ) >= 0 ) {

    $(document).unbind('keydown',arguments.callee);
    $("body").addClass("awesome");
    $('#awesome').siblings('audio').trigger('play');
    //(myAudioObject).loop = true
  }

});
