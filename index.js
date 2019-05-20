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