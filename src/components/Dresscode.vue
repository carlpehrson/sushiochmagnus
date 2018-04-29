<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>

    <h2>{{ h2[$router.app.lang] }}</h2>

    <p>
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
        SV: 'Dresscode',
        EN: 'Dresscode',
        JP: '服装規定'
      },
      p1: {
        SV: 'Klädkod brukar ofta ge många frågetecken när man går på bröllop då ettiketten på senare år har ändrats. Vi har valt att använda den engelska klädkoden "Black Tie Optional".',
        EN: 'The dresscode often creates a lot of questions for the guests at a wedding. There are many different rules that can be applied, but we have chosen to go with the English definition of "Black Tie Optional".',
        JP: '服装規定は同じ国でも人によっていくつかありますので分からないところが多いと思います。今回の結婚式の服装規定は英語の「Black Tie Optional」でやります。'
      },
      h2: {
        SV: 'Okej, men vad betyder detta?',
        EN: 'Okay, so what does that mean?',
        JP: 'それええけど、どういう意味？'
      },
      p2: {
        SV: 'Black Tie Optional betyder mer eller mindre mörk kostym(mörkblå, mörkgrå, svart etc.), men om man vill får man även ha Smoking. För damer är det lite mer fritt, men helvitt, helsvart, och helrött är strikt undanbett. Detta betyder inte att dessa tre färger är helt förbjudna, men om större delen av din utstyrsel är i dessa färger bör du tänka om.',
        EN: 'Black Tie Optional is more or less what it sounds like: the code is generally interpreted as Dark Suit but if you want to you can also wear a Smoking (Tuxedo in simplified English). For the ladies the dresscode is a bit more open, but fully white, fully black, and fully red is strictly prohibited. This is not to say that any black, white, or red is forbidden, but using mainly these colours is.',
        JP: 'Black Tie Optionalを簡単にいうと、男性は黒・ネイビー・グレーなどのスーツを着てもええし、タクシードでもありです。女性はもう少し自由に選べられるが、真っ白、真っ赤、真っ黒は絶対禁止です。白、黒、赤自体は完全に禁じられていないけど、できるだけ避けてください。'
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
