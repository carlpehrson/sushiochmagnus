<template>
  <div class="pagecontent">
    <h1>{{ sv.h1 }}</h1>
    <p>{{ sv.p1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'Food',
  data () {
    return {
      sv: {
        h1: 'Dryck och Allergier',
        p1: 'Det kommer att finnas både alkoholfritt och alkoholhaltiga dryckesalternativ. Ni får självklart dricka från båda utbuden men meddela oss innan om ni främst dricker alkoholfritt eller alkoholhaltigt så mängderna kan planeras. Meddela även om ni har några allergier så att köket kan ordna annan mat vid behov.'
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
