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
        SV: 'Nu var det dags!',
        EN: 'It is time!',
        JP: 'やっと決まった！'
      },
      p1: {
        SV: 'Bröllopet närmar sig med stormsteg och vi ser jättemycket fram emot att ni ska komma och dela vår dag med oss! Tanken är att all viktig information ni behöver innan dagen ska finnas tillgänglig på denna hemsida. Nedan följer viktig information.',
        EN: 'The day for our wedding is getting closer and we are so much looking forward to sharing this day together with you! This homepage is intended to give you all the necessary information before coming to the wedding. Some important information:',
        JP: '結婚が近づいてきていて、皆さんとご一緒にこの一日を過ごせるのをめちゃめちゃ楽しみにしています～！このホームページにてその日まですべての情報を載せようと思っているので、何かのご不明な点などがあればこのホームページで確認してください！以下に重要となる情報を述べています：'
      },
      h2: {
        SV: 'Vi behöver följande information innan den 30e april:',
        EN: 'Notify us before April 30th:',
        JP: '4月30日まで以下をご連絡ください！'
      },
      list: {
        SV: [
          'Om ni tar er ut själva till Bro Hof Slott till 15:00, eller om ni vill ha skjuts från Bro Station 14:50',
          'Om ni vill bo kvar tillsammans med oss på Görvälns Slott efteråt och hur många enkel/dubbelrum ni behöver',
          'Eventuella allergier',
          'Om ni främst dricker alkoholfritt eller alkoholhaltigt (man får dricka av båda alternativen men för kökets skull behöver ni meddela vilket ni föredrar mest)'
        ],
        EN: [
          'If you will find your own way out to Bro Hof Slott by 15:00 or if you need a lift from Bro Station at 14:50.',
          'If you would like to stay with us at Görvälns Slott that night and if so, how many single/double rooms you need.',
          'Allergies, if any.',
          'If you prefer alcohol or alcohol-free drinks. (You can have both, but we need to know which one you will be consuming the most in order for the kitchen to make correct preparations).'
        ],
        JP: [
          '自分でBro Hof Slottを15：00まで行くか、Bro Stationから迎えにきてほしいか（14：50）',
          '2次会の後に一緒にGörvälns Slottで泊まるかどうか、そして必要となる部屋（シングルかダブルか）',
          'アレルギーあり・なし',
          'アルコールあり・なし（両方飲んでもええけど、メインとなるやつを事前に連絡ちょうだい）'
        ]
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
