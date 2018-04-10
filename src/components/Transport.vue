<template>
  <div class="pagecontent">
    <h1>{{ sv.h1 }}</h1>
    <p>{{ sv.p1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'Transport',
  data () {
    return {
      sv: {
        h1: 'Transport',
        p1: 'För er som vill åka själva med bil eller taxi går det självklart bra. För er som vill åka samlat kommer vi att anordna buss som åker från Bro Station klockan 15:00 till Bro Hof. Efter festens slut finns möjlighet att ta buss till Bro Station, och de som övernattar tillsammans med oss följer med samma buss vidare till Görvälns Slott.'
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
