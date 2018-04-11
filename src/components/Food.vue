<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
  </div>
</template>

<script>
export default {
  name: 'Food',
  data () {
    return {
      h1: {
        sv: 'Dryck och Allergier',
        en: 'Food and Allergies'
      },
      p1: {
        sv: 'Det kommer att finnas både alkoholfritt och alkoholhaltiga dryckesalternativ. Ni får självklart dricka från båda utbuden men meddela oss innan om ni främst dricker alkoholfritt eller alkoholhaltigt så mängderna kan planeras. Meddela även om ni har några allergier så att köket kan ordna annan mat vid behov.',
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
