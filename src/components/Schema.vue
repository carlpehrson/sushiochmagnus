<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
    <b-container>
      <b-row v-for="item in timeline" :key="item.id">
        <b-col cols="2"><h2>{{ item.h1 }}</h2></b-col>
        <b-col><p>{{ item.p1[$router.app.lang] }}</p></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Schema',
  data () {
    return {
      h1: {
        sv: 'Tid och Plats',
        en: 'Schedule'
      },
      p1: {
        sv: 'Bröllopet kommer att hållas på Bro Hof Slott den 30e Juni 2018. Vigseln börjar 15:30 vilket följs av mingel och fördrink, middag, tårta och efterfest. Hela spektaklet slutar klockan 00:50, men de som känner sig färdiga tidigare eller har småbarn får avvika när ni behöver ^^',
        en: 'English text here'
      },
      timeline: [
        {
          h1: '15:00',
          p1: {
            sv: 'Buss avgår från Bro Station till Bro Hof Slott',
            en: 'Bus'
          }
        },
        {
          h1: '15:30',
          p1: {
            sv: 'Vigsel startar på gräsmattan under eken (inomhus på övervåningen vid regn)',
            en: 'Ceremony'
          }
        },
        {
          h1: '16:00',
          p1: {
            sv: 'Vigseln slutar. Bröllopsparet tar bröllopsbilder och gästerna minglar under tiden.',
            en: 'End of ceremony'
          }
        },
        {
          h1: '17:30',
          p1: {
            sv: 'Middagen börjar på övervåningen.',
            en: 'Foood!'
          }
        },
        {
          h1: '20:00',
          p1: {
            sv: 'Tårta och avec följt av bröllopsdans.',
            en: 'Cake!'
          }
        },
        {
          h1: '21:00',
          p1: {
            sv: 'Middagen avslutas och efterfesten börjar.',
            en: 'No moar food, party though!'
          }
        },
        {
          h1: '23:00',
          p1: {
            sv: 'Efterfesten fortsätter och vickning serveras.',
            en: 'Snacks!'
          }
        },
        {
          h1: '00:50',
          p1: {
            sv: 'Festen avslutas och buss avgår till Görvälns Slott för övernattning.',
            en: 'No moar party, time to go home bruh.'
          }
        }
      ]
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
