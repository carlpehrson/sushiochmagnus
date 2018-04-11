<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>
  </div>
</template>

<script>
export default {
  name: 'Transport',
  data () {
    return {
      h1: {
        sv: 'Transport',
        en: 'Transport'
      },
      p1: {
        sv: 'För er som vill åka själva med bil eller taxi går det självklart bra. För er som vill åka samlat kommer vi att anordna buss som åker från Bro Station klockan 15:00 till Bro Hof. Efter festens slut finns möjlighet att ta buss till Bro Station, och de som övernattar tillsammans med oss följer med samma buss vidare till Görvälns Slott.',
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
