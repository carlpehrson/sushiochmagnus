<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>

    <h2>{{ h2[$router.app.lang] }}</h2>

    <p>
      {{ listHeader[$router.app.lang] }}
      <ul>
        <li v-for="item in list[$router.app.lang]" :key="item.id">
          {{ item }}
        </li>
      </ul>
    </p>

    <p>
      <b>{{ h3[$router.app.lang] }}</b>
      <br>
      {{ p2[$router.app.lang] }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Dresscode',
  data () {
    return {
      h1: {
        sv: 'Dresscode',
        en: 'Dresscode'
      },
      p1: {
        sv: 'Klädkod brukar ofta ge många frågetecken när man går på bröllop då ettiketten på senare år har ändrats. Vi har valt att använda den engelska klädkoden "Black Tie Optional".',
        en: 'Eng1'
      },
      h2: {
        sv: 'Okej, men vad betyder detta?',
        en: 'Eng2'
      },
      listHeader: {
        sv: 'Den korta versionen är:',
        en: 'Eng3'
      },
      list: {
        sv: ['För herrar: Mörk kostym, alternativt smoking', 'För damer: Festlig klänning (ej golvlång) alternativt kjol med topp'],
        en: ['Gents', 'Ladies']
      },
      h3: {
        sv: 'För männen',
        en: 'For the gents'
      },
      p2: {
        sv: 'Mörk kostym och smoking har traditionellt sett aldrig blandats utan har varit antingen eller. Vi har valt att använda den engelska definitionen "Black Tie Optional", vilket innebär mer frihet för både damer och herrar. För männen innebär detta att man antingen kan ha mörk kostym (grå/blå/svart) eller ha svart/mörk smoking.',
        en: 'Engrish'
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
