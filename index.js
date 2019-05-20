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

var auto = $(document.getElementById('auto'));
var manual = $(document.getElementById('manual'));

$('#auto').click(function(){
  $('#auto').css({
    'background-color': '#4169e1'
  });
  $('#manual').css({
    'background-color': '#9daee0'
  });
});

$('#manual').click(function(){
  $('#auto').css({
    'background-color': '#9daee0'
  });
  $('#manual').css({
    'background-color': '#4169e1'
  });
});