<template>
  <div class="pagecontent">
    <h1>{{ h1[$router.app.lang] }}</h1>
    <p>{{ p1[$router.app.lang] }}</p>

    <p>
      {{ h2[$router.app.lang] }}
      <ul>
        <li v-for="item in list[$router.app.lang]" :key="item.id">
          {{ item }}
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      h1: {
        sv: 'Nu var det dags!',
        en: 'It is time!'
      },
      p1: {
        sv: 'Bröllopet närmar sig med stormsteg och vi ser jättemycket fram emot att ni ska komma och dela vår dag med oss! På denna sida kan ni hitta all viktig information om dagen. Tanken är att all information ni behöver ska finnas tillgänglig på denna hemsida. Nedan följer viktig information.',
        en: 'Eng'
      },
      h2: {
        sv: 'Vi behöver att ni senast 30e April meddelar oss:',
        en: 'Notify us before April 30th:'
      },
      list: {
        sv: [
          'Om ni tar er ut själva eller vill åka med buss från Bro Station 15:00',
          'Om ni vill bo kvar tillsammans med oss på Görvälns Slott efteråt och hur många enkel/dubbelrum ni behöver (och då åker vi tillsammans med buss efter festens slut)',
          'Eventuella allergier',
          'Om ni främst dricker alkoholfritt eller alkoholhaltigt (man får dricka av båda alternativen men för kökets skull behöver ni meddela vilket ni föredrar mest)'
        ],
        en: [
          'one',
          'two',
          'three',
          'four'
        ]
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
