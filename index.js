new Vue({
  el: '#app',
  data () {
    return {
      message: 'MESH',
      values1: [],
      values2: [],
    }
   
  },
  
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbzXZXE6twyHpRaZAfOgb0S1hc0EcpxrcCwleHqFZXUj_FvgXeMu/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.values1= result
      },
      error => {

      },
    );
    fetch(
      'https://script.google.com/macros/s/AKfycbwAXqF2Idm69c508IcIu5CjW61LBplVkblIFrNVgMokNITl9VDM/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.values2 = result
      },
      error => {

      },
    );
  },
  
 
  
})

jQuery(function($){
$('#left').click(function(){
  $('#left').css({
    'color':'#f08b72'
  });
  $('#center').css({
    'color':'#FFFAFA'
  });
  $('#right').css({
    'color':'#FFFAFA'
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
    'color':'#FFFAFA'
  });
  $('#center').css({
    'color':'#f08b72'
  });
  $('#right').css({
    'color':'#FFFAFA'
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
    'color':'#FFFAFA'
  });
  $('#center').css({
    'color':'#FFFAFA'
  });
  $('#right').css({
    'color':'#f08b72'
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

// シート１
$('#about').click(function(){
  $('#top').css({
    'display':'none'
  });
  $('#detail').css({
    'display':'inline'
  });
});
$('#turn').click(function(){
  $('#top').css({
    'display':'inline'
  });
  $('#detail').css({
    'display':'none'
  });
});

// シート２
$('#turn21,#turn22,#turn23,#turn24').click(function(){
  $('#page2').css({
    'display':'inline'
  });
  $('#page21,#page22,#page23,#page24').css({
    'display':'none'
  });
});
$('#toPage21,#left22,#right24').click(function(){
  $('#page2').css({
    'display':'none'
  });
  $('#page21').css({
    'display':'inline'
  });
  $('#page22').css({
    'display':'none'
  });
  $('#page23').css({
    'display':'none'
  });
  $('#page24').css({
    'display':'none'
  });
});
$('#toPage22,#right21,#left23').click(function(){
  $('#page2').css({
    'display':'none'
  });
  $('#page21').css({
    'display':'none'
  });
  $('#page22').css({
    'display':'inline'
  });
  $('#page23').css({
    'display':'none'
  });
  $('#page24').css({
    'display':'none'
  });
});
$('#toPage23,#right22,#left24').click(function(){
  $('#page2').css({
    'display':'none'
  });
  $('#page21').css({
    'display':'none'
  });
  $('#page22').css({
    'display':'none'
  });
  $('#page23').css({
    'display':'inline'
  });
  $('#page24').css({
    'display':'none'
  });
});
$('#toPage24,#right23,#left21').click(function(){
  $('#page2').css({
    'display':'none'
  });
  $('#page21').css({
    'display':'none'
  });
  $('#page22').css({
    'display':'none'
  });
  $('#page23').css({
    'display':'none'
  });
  $('#page24').css({
    'display':'inline'
  });
});

// シート３
$('#gear').click(function(){
  $('#profile').css({
    'display':'none'
  });
  $('#configuration').css({
    'display':'inline'
  });
});

$('#topage3,#turn3').click(function(){
  $('#profile').css({
    'display':'inline'
  });
  $('#configuration').css({
    'display':'none'
  });
});


});

