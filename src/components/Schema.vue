<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
    <b-container>
      <b-row v-for="item in timeline" :key="item.id">
        <b-col cols="2"><p><b>{{ item.h1 }}</b></p></b-col>
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
        SV: 'Schema',
        EN: 'Schedule',
        JP: 'スケジュール'
      },
      p1: {
        SV: 'Bröllopet kommer att hållas på Bro Hof Slott den 30e Juni 2018. Vigseln börjar 15:30 vilket följs av mingel och fördrink, middag, tårta och efterfest. Hela spektaklet slutar klockan 00:50, men de som känner sig färdiga tidigare eller har småbarn får avvika när ni behöver ^^',
        EN: 'The wedding will be held at Bro Hof Slott the 30th of June. The Ceremony will begin at 15:30 followed by drinks and appetisers, dinner, cake, and an afterparty. For those not yet fallen, the party ends at 00:50 where we will go together by bus stopping once at Bro Station, and continue to Görvälns Slott for those staying at the hotel. ',
        JP: '結婚式は6月30日にBro Hof Slottに開催します！式は15：30に始まり、その後は披露宴、ケーキ、2次会、バーベキューなどです。夜中の00：50に終わりまして、そこからは一緒にバス乗って、Bro Stationで帰る人を降ろして、泊まる人は一緒にGörvälns Slottまで行きます。'
      },
      timeline: [
        {
          h1: '14:50',
          p1: {
            SV: 'Bilar avgår från Bro Station till Bro Hof Slott',
            EN: 'Cars leaves Bro Station going to Bro Hof Slott',
            JP: 'Bro StationからBro Hof Slottへの車が出発'
          }
        },
        {
          h1: '15:30',
          p1: {
            SV: 'Vigsel startar på gräsmattan under eken (inomhus på övervåningen vid regn)',
            EN: 'Wedding ceremony begins under the large oak (indoors in case of rain)',
            JP: '結婚式がオークの下の芝で始まる（雨の場合は城の2階で）'
          }
        },
        {
          h1: '16:00',
          p1: {
            SV: 'Vigseln slutar. Bröllopsparet tar bröllopsbilder och gästerna minglar under tiden.',
            EN: 'End of ceremony. Bride and groom takes wedding pictures while the guests mingle with drinks and appetisers.',
            JP: '式終了。新郎新婦は写真を撮っている間に、ゲストは話したり飲んだりする。'
          }
        },
        {
          h1: '17:30',
          p1: {
            SV: 'Middagen börjar på övervåningen.',
            EN: 'Dinner begins at the second floor of the castle',
            JP: '披露宴は2階で始まる。'
          }
        },
        {
          h1: '20:00',
          p1: {
            SV: 'Tårta och avec följt av bröllopsdans.',
            EN: 'Wedding cake, avec, wedding dance',
            JP: 'ケーキ、飲み物、新郎新婦のダンス'
          }
        },
        {
          h1: '21:00',
          p1: {
            SV: 'Middagen avslutas och efterfesten börjar!',
            EN: 'Food is over, party is not!',
            JP: '披露宴終了、2次会開始！'
          }
        },
        {
          h1: '23:00',
          p1: {
            SV: 'Efterfesten fortsätter och vickning serveras.',
            EN: 'Party continues with snacks / light meal.',
            JP: '夜中軽食、2次会が続く。'
          }
        },
        {
          h1: '00:50',
          p1: {
            SV: 'Festen avslutas och buss åker via Bro Station för de som åker hem, vidare till Görvälns Slott för de som övernattar.',
            EN: 'Party is over, bus via Bro Station for those going home, continuing to Görvälns Slott for those staying at the hotel.',
            JP: '2次会終了、バスでBro Station軽油でGörvälns Slottまで行って泊まる。'
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
