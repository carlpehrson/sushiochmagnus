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
        sv: 'Kontakt',
        en: 'Contact'
      },
      p1: {
        sv: 'Om det är något som är oklart, om ni vill hålla tal, om ni har några funderingar kring presentlistan, eller om det är något annat som är oklart, så kan ni kontakta Toastmaster Erik Ferm på följande mail:',
        en: 'English'
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
