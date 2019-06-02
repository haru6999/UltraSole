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

// anychart.onDocumentLoad(function() {
//   // create chart and set data
//   // as Array of Arrays
//   var chart = anychart.line()
//   chart.data({header: ["#", "前側", "後側"],
//     rows:[
//     ["Winter", t.value, 7],
//     ["Spring", 7, 9],
//     ["Summer", 9, 12],
//     ["Fall", 12, 15]
//   ]});
//   chart.title("AnyChart: Multi-Series Array of Arrays");
//   chart.legend(true);
//   chart.container("container").draw();
// });


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


// シート２
$('#mylist').click(function(){
  $('.input').css({
    'display':'none'
  });
  $('.mylist2').css({
    'display':'inline'
  });
});

$('#mylistBack').click(function(){
  $('.input').css({
    'display':'inline'
  });
  $('.mylist2').css({
    'display':'none'
  });
});

// シート３
$('').click(function(){
  $('#gravity1').css({
    'display':'none'
  });
  $('#gravity2').css({
    'display':'inline'
  });
});

$('#gravity2').click(function(){
  $('#gravity1').css({
    'display':'inline'
  });
  $('#gravity2').css({
    'display':'none'
  });
});

});