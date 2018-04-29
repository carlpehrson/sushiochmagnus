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
        SV: 'Dryck och Allergier',
        EN: 'Food and Allergies',
        JP: '飲み物・アレルギー'
      },
      p1: {
        SV: 'Det kommer att finnas både alkoholfritt och alkoholhaltiga dryckesalternativ. Ni får självklart dricka från båda utbuden men meddela oss innan om ni främst dricker alkoholfritt eller alkoholhaltigt så mängderna kan planeras. Meddela även om ni har några allergier så att köket kan ordna annan mat vid behov.',
        EN: 'For the dinner and the afterparty there will be both alcohol and alcohol-free drinks. In order for the kitchen to plan ahead and prepare the correct amounts of the different options, please inform us on whether or not you prefer alcohol or alcohol-free drinks. You are free to drink from both options, but we need know what your main choice is ^^',
        JP: '披露宴にも2次会にもアルコールもアルコールなしの飲み物もあります。両方飲んでも結構ですが、準備のためにメインで飲むのを事前に連絡ください。アレルギーある方も連絡ちょうだい！'
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
