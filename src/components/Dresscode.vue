<template>
  <div class="pagecontent">
    <h1>{{ sv.h1 }}</h1>
    <p>{{ sv.p1 }}</p>

    <h2>{{ sv.h2 }}</h2>

    <p>
      {{ sv.listHeader }}
      <ul>
        <li v-for="item in sv.list" :key="item.id">
          {{ item }}
        </li>
      </ul>
    </p>

    <p>
      <b>{{ sv.h3 }}</b>
      <br>
      {{ sv.p2 }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Dresscode',
  data () {
    return {
      sv: {
        h1: 'Dresscode',
        p1: 'Klädkod brukar ofta ge många frågetecken när man går på bröllop då ettiketten på senare år har ändrats. Vi har valt att använda den engelska klädkoden "Black Tie Optional".',
        h2: 'Okej, men vad betyder detta?',
        listHeader: 'Den korta versionen är:',
        list: [
          'För herrar: Mörk kostym, alternativt smoking',
          'För damer: Festlig klänning (ej golvlång) alternativt kjol med topp'
        ],
        h3: 'För männen',
        p2: 'Mörk kostym och smoking har traditionellt sett aldrig blandats utan har varit antingen eller. Vi har valt att använda den engelska definitionen "Black Tie Optional", vilket innebär mer frihet för både damer och herrar. För männen innebär detta att man antingen kan ha mörk kostym (grå/blå/svart) eller ha svart/mörk smoking.'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*a {
  color: #42b983;
}*/
.pagecontent {
  width: 100%;
  float: left;
  padding: 0em 2em 0em 2em;
  position: relative;
}
</style>
