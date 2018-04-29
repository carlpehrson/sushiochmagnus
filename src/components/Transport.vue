<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
  </div>
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
