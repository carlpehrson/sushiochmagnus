<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
  </div>
</template>

<script>
export default {
  name: 'Accomodation',
  data () {
    return {
      h1: {
        SV: 'Boende',
        EN: 'Accomodation',
		JP: '宿泊'
      },
      p1: {
        SV: 'Vi har bokat boende på Görvälns Slott natten mellan lördag och söndag så att alla som vill kan stanna över natten och äta frukost tillsammans med oss morgonen efter. Meddela om ni vill stanna över natten och om ni vill ha ett enkelrum (1090 SEK) eller dubbelrum (1595 SEK) senast den 30e April. Betalning för rummen sker på plats samma dag. Incheckningen till hotellet sker vid lunch på lördagen, alternativt på natten efter festen. För de som vill finns möjlighet att sova där redan natten innan. Kontakta i detta fall Görvälns Slott på +46 8 120 002 00 eller hello@gorvalnsslott.se.',
        EN: 'In order to spend as much time as possible with you guys we have booked a hotel so that everyone can have breakfast together the morning after the wedding. There are single rooms (1090 SEK) and double rooms (1590 SEK). Payment for the rooms can be done when you check in on the Saturday, either at lunch or at night after the party. For those who want to you can always stay the night before the wedding as well (if you arrive early in Sweden for example). Contact Görvälns Slott at +46 8 120 002 00 or hello@gorvalnsslott.se and let them know how many nights you are staying, and let them know it is for Sussie and Magne's wedding.',
		JP: '皆さんと一緒に過ごせる時間を延ばすために、2次会が終わったらホテルを予約していますので翌日の朝食を一緒に食べられます！シングルルームは1090クローネ（～13700円）、ダブルルームは1590クローネ（～20000円）です。支払いは当日の昼、もしくは夜の2次会の後でどちらでもオッケーです。ご希望の方は前日も泊まれます。予約は確実ではないので、部屋の確保は各自予約をしてください。連絡先は「+46 8 120 002 00」、または「hello@gorvalnsslott.se」でお願いします！予約する時に「マグネとスッスィーの結婚式」を言って＾＾'
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
