<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d8099.065390054341!2d17.624248545899466!3d59.503658456086654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x465fa5b9e394e683%3A0x3d961d2a891ea694!2sBro+station!3m2!1d59.511421999999996!2d17.6359101!4m3!3m2!1d59.495443699999996!2d17.625407!5e0!3m2!1sen!2sse!4v1525200563257" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
  <!-- https://www.google.com/maps/dir/Bro+station/59.4954437,17.625407/@59.5036585,17.6242485,15z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x465fa5b9e394e683:0x3d961d2a891ea694!2m2!1d17.6359101!2d59.511422!1m0!3e0?hl=en-US -->
</template>

<script>
export default {
  name: 'Transport',
  data () {
    return {
      h1: {
        SV: 'Transport',
        EN: 'Transport',
        JP: '交通・移動'
      },
      p1: {
        SV: 'För er som vill åka själva med bil eller taxi går det självklart bra. För er som vill åka samlat kommer vi att anordna buss som åker från Bro Station klockan 15:00 till Bro Hof. Efter festens slut finns möjlighet att ta buss till Bro Station, och de som övernattar tillsammans med oss följer med samma buss vidare till Görvälns Slott.',
        EN: 'Those of you who want to travel by car or taxi are free to do so. For those who need a ride there will be a bus going from Bro Station at 14:50. After the party is over there will be a bus going via Bro Station (for those going home) ending at Görvälns Slott (for those staying the night). ',
        JP: '自分で車やタクシーで行く人はそれで結構です。一緒に行く方はBro Stationから14：50発のバスに乗りますのでそれまでBro Stationに着てください。2次会の後に00：50発のバスに乗って、Bro Station軽油でGölvälns Slott（ホテル）まで行きます。'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagecontent {
  width: 100%;
  float: left;
  padding: 0em 2em 0em 2em;
  position: relative;
}
</style>
