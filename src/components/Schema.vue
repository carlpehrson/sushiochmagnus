<template>
  <div class="pagecontent">
    <h1>{{ sv.h1 }}</h1>
    <p>{{ sv.p1 }}</p>
    <b-container>
      <b-row v-for="item in sv.timeline" :key="item.id">
        <b-col cols="2"><h2>{{ item.h1 }}</h2></b-col>
        <b-col><p>{{ item.p1 }}</p></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Schema',
  data () {
    return {
      sv: {
        h1: 'Tid och Plats',
        p1: 'Bröllopet kommer att hållas på Bro Hof Slott den 30e Juni 2018. Vigseln börjar 15:30 vilket följs av mingel och fördrink, middag, tårta och efterfest. Hela spektaklet slutar klockan 00:50, men de som känner sig färdiga tidigare eller har småbarn får avvika när ni behöver ^^',
        timeline: [
          {
            id: 1,
            h1: '15:00',
            p1: 'Buss avgår från Bro Station till Bro Hof Slott'
          }, {
            id: 2,
            h1: '15:30',
            p1: 'Vigsel startar på gräsmattan under eken (inomhus på övervåningen vid regn)'
          }, {
            id: 3,
            h1: '16:00',
            p1: 'Vigseln slutar. Bröllopsparet tar bröllopsbilder och gästerna minglar under tiden.'
          }, {
            id: 4,
            h1: '17:30',
            p1: 'Middagen börjar på övervåningen.'
          }, {
            id: 5,
            h1: '20:00',
            p1: 'Tårta och avec följt av bröllopsdans.'
          }, {
            id: 6,
            h1: '21:00ish',
            p1: 'Middagen avslutas och efterfesten börjar.'
          }, {
            id: 7,
            h1: '23:00',
            p1: 'Efterfesten fortsätter och vickning serveras.'
          }, {
            id: 8,
            h1: '00:50',
            p1: 'Festen avslutas och buss avgår till Görvälns Slott för övernattning.'
          }
        ]
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
