<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
    <p>
      {{ a1 }}<span class="displaynone">obfuscation</span>{{ a2 }}<span class="displaynone">preventing</span>{{ a3 }}<span class="displaynone">spam</span>{{ a4 }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      h1: {
        SV: 'Kontakt',
        EN: 'Contact',
        JP: 'コンタクト'
      },
      p1: {
        SV: 'Om det är något som är oklart, om ni vill hålla tal, om ni har några funderingar kring presentlistan, eller om det är något annat som är oklart, så kan ni kontakta Toastmaster Erik Ferm på följande mail:',
        EN: 'If you have any questions, if you would like to do a speech, if you have any questions regrading the presents, please contact Toastmaster Erik Ferm at the following mail:',
        JP: '何かのご不明な点のある方、スピーチしたい方、プレゼントについてのご質問のある方、とりあえずなんかあったらトーストマスター（エリック）に以下のメールまでご連絡ください！（大丈夫、日本語できるやつ）：'
      },
      a1: 'Sussie',
      a2: 'Magne',
      a3: 'Wedding@',
      a4: 'gmail.com'
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
</style>
