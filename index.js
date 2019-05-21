new Vue({
    el: '#app',
    data () {
      return {
        message: 'UltraSole',
        soles: null,
      }
    },
    mounted () {
      fetch(
        'https://script.google.com/macros/s/AKfycbzXZXE6twyHpRaZAfOgb0S1hc0EcpxrcCwleHqFZXUj_FvgXeMu/exec',
      )
        .then(res => res.json())
        .then(
        result => {
          this.soles = result
        },
        error => {
  
        },
      );
    }
  })


jQuery(function($){
// シート１
$('#auto').click(function(){
  $('#auto').css({
    'background-color': '#4169e1'
  });
  $('#manual').css({
    'background-color': '#9daee0'
  });
  $('#autoseat').css({
    'display':'inline'
  });
  $('#manualseat').css({
    'display':'none'
  });
});

$('#manual').click(function(){
  $('#auto').css({
    'background-color': '#9daee0'
  });
  $('#manual').css({
    'background-color': '#4169e1'
  });
  $('#autoseat').css({
    'display':'none'
  });
  $('#manualseat').css({
    'display':'inline'
  });
});

$('#left').click(function(){
  $('#left').css({
    'color':'#4169e1'
  });
  $('#center').css({
    'color':'#858585'
  });
  $('#right').css({
    'color':'#858585'
  });
  $('#seat1').css({
    'display':'inline'
  });
  $('#seat2').css({
    'display':'none'
  });
  $('#seat3').css({
    'display':'none'
  });
});

$('#center').click(function(){
  $('#left').css({
    'color':'#858585'
  });
  $('#center').css({
    'color':'#4169e1'
  });
  $('#right').css({
    'color':'#858585'
  });
  $('#seat1').css({
    'display':'none'
  });
  $('#seat2').css({
    'display':'inline'
  });
  $('#seat3').css({
    'display':'none'
  });
});

$('#right').click(function(){
  $('#left').css({
    'color':'#858585'
  });
  $('#center').css({
    'color':'#858585'
  });
  $('#right').css({
    'color':'#4169e1'
  });
  $('#seat1').css({
    'display':'none'
  });
  $('#seat2').css({
    'display':'none'
  });
  $('#seat3').css({
    'display':'inline'
  });
});


// シート２
$('#mylist').click(function(){
  $('.input').css({
    'display':'none'
  });
  $('.mylist2').css({
    'display':'inline'
  });
});


});