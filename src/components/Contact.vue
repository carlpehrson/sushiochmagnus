<template>
  <div class="pagecontent">
    <h1>{{ sv.h1 }}</h1>
    <p>{{ sv.p1 }}</p>
    <p>
      {{ sv.a1 }}<span class="displaynone">obfuscation</span>{{ sv.a2 }}<span class="displaynone">preventing</span>{{ sv.a3 }}<span class="displaynone">spam</span>{{ sv.a4 }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      sv: {
        h1: 'Kontakt',
        p1: 'Om det är något som är oklart, om ni vill hålla tal, om ni har några funderingar kring presentlistan, eller om det är något annat som är oklart, så kan ni kontakta Toastmaster Erik Ferm på följande mail:',
        a1: 'Sussie',
        a2: 'Magne',
        a3: 'Wedding@',
        a4: 'gmail.com'
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
</style>
