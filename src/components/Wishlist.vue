<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQhjcMrMDEowff0HVeLjtPMEVEnvlbRPAIRLA6tunn8FG9AYGPJNREFe5iFKVIB_FVxqyDRHtMW6KmP/pubhtml?widget=true&amp;headers=false"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  data () {
    return {
      h1: {
        SV: 'Önskelista',
        EN: 'Wishlist',
        JP: 'ウィッシュリスト'
      }
      p: {
        SV: 'Här har vi lagt in vår önskelista, men innan ni köper något här se till att ni följer den här processen:'
        EN: 'In Swedish tradition, getting married usually meant moving in together with your partner for the first time. This also meant that apart from having to buy your own place you also had to invest in household appliances, cutlery, plates etc. which could set you back quite much. Therefore, the guests on a wedding would usually buy things that the bride and groom wanted but could not afford themselves. <br><br>Nowadays, couples usually move in together long before the wedding but the tradition of a wishlist for things for the home remain. For those coming from abroad, you do not need to adhere to this. If you want to purchase something from the list, contact the bridesmaids at XXXXXX. If you would like to go with the Japanese tradtiion of giving money, we will not stop you. If you choose not to give anything that is perfectly fine too, we are just happy that you are able to join us for our wedding.'
        JP: 'スウェーデンでは昭和時代まで結婚する新郎新婦は初めて一緒に住むのは一般的でした。初めて一緒に住むと、マンションや一軒家を買うだけではなく、家の道具、キッチンの食器、家電機器などを買わなければならなかったので、初期投資が大変でした。そのため、日本みたいにお祝儀の習慣ではなく、結婚式に参加されるゲストは新郎新婦が欲しがっているものを買うのは一般的でした。<br><br>最近は数年一緒に住んでから結婚するのは一般的になりつつあるが、この習慣はまだ残っています。海外から来られる方々は特に何も買わなくても結構です。もしお祝儀などを渡したいならそれでもええし、何も上げなくても全然ええで！参加して頂くだけで十分うれしいです＾＾'
      }
      list: {
        SV: [
          'Skicka ett mail till denise.tang.swe@gmail.com och säg vad det är du tänker köpa från listan'
          'Vänta på bekräftelse! '
          'Efter att du fått bekräftelsen kan köpa det du ville köpa :)'
        ]
        EN: [
          'Send a mail to denise.tang.swe@gmail.com and let them know which item on the list you want to buy'
          'Wait for confirmation!'
          'After you have received confirmation that the item is still free, you may buy it :)'
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
span.displaynone {
  display: none;
}

iframe {
  width: 100%;
  height: 600px;
}
</style>
