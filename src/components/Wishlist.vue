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
        JP: 'ウィッシュリスト（外国人のみ）'
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
