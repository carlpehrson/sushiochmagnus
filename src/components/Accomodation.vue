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
        sv: 'Boende',
        en: 'Accomodation'
      },
      p1: {
        sv: 'Vi har bokat boende på Görvälns Slott natten mellan lördag och söndag så att alla som vill kan stanna över natten och äta frukost tillsammans med oss morgonen efter. Meddela om ni vill stanna över natten och om ni vill ha ett enkelrum (1295 SEK) eller dubbelrum (1595 SEK) senast den 30e April. Betalning för rummen sker på plats samma dag. Incheckningen till hotellet sker vid lunch på lördagen. För de som vill finns möjlighet att sova där redan natten innan. Kontakta i detta fall Görvälns Slott på +46 8 120 002 00 eller hello@gorvalnsslott.se.',
        en: 'English text here'
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
