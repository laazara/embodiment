<template>
  <div>
    <div class="pa2 pt1-m maxw-xxxsuper ml-au mr-au relative">
      <div class="maxw-xsuper dark ">
        <h5 class="fs-2 lh0 fwb mb3-m o-70 ff-inria-serif fs1">
          <a class="layout tfu tdx mr1" href="/guides">Guide</a>
          <span class="mr1">/</span>
          <a class="layout tfu tdx" href="/guides/#fatty-acids-and-hair-care">Fatty Acids and Hair Care</a>
        </h5>
      </div>
    </div>

    <div class="maxw-xxxsuper ml-au mr-au pl2 pr2 dark">
      <div v-if="page">
        <div class="maxw-xsuper dark ml-au mr-au mb3">
          <div class="mb2 bwl4 bca-layout bsa-solid pl2">
            <h1 class="fs1 lh1 fs3-m lh3-m mb1 mb0-m neutrald ff-prata-m">
              {{ page['Common Name'] }} and Hair Care
            </h1>
            <h2 class="fs0 lh0 fs2-m lh2-m fw3 maxw-xsuper">{{ page['Introduction'] }}</h2>
          </div>
        </div>

        <div v-if="page.image">
          <div class="h-xxbig h-xxxbig-m relative mb2">
            <img :src="page.image" class="absolute t0 l0 w-100 h-100 of-cover bxsh-black"
              :alt="page.caption || page.image.replace('-', ' ')" />
          </div>
        </div>

        <div v-if="page.created || page.updated" class="maxw-xsuper dark ml-au mr-au mb3 lh0">
          <div v-if="page.updated" class="fs-3 ls2 tfu mb0">Published Update: {{ page.updated | formatDate }}</div>
          <div v-else-if="page.created" class="fs-3 ls2 tfu mb0">Published: {{ page.created | formatDate }}</div>
          <div v-if="readTimeStats" class="fs-3 ls2 tfu">{{ readTimeStats.text }}</div>
        </div>

        <div class="maxw-xsuper ml-au mr-au s-article">
          <blockquote>
            <p>
              <strong>Notice:</strong> We at <a href="/">Embodiment Shop</a>, are very interested in how hair
              formulations affect hair condition. This article about {{ page['Common Name'] }} is part
              of the series about fatty acids in hair. We hope to continuously update these articles as we
              learn more and discover more scientific research and data. We hope our findings prove useful 
              and please, do contact us to leave any feedback about our information.
            </p>

          </blockquote>


          <h2>Basic informattion about {{ page['Common Name'] }}</h2>
          <p>
            {{ page['Common Name'] }} 
            {{ page['Systematic Name'] ? `also known by it's systematic name as ${page['Systematic Name']},` : '' }}
            is a {{ page.lipidLengthText }} length
            {{ page['Mono/Poly'].trim() === '-' ? '' : page['Mono/Poly'].trim() }}{{ page['Sat/UnSat'].toLowerCase() }}
            fatty acid.
            <span v-if="!Number.isNaN(page['Boil temp']) && !Number.isNaN(page['Melting temp'])">
              It's also a {{ page.roomTempState }} at room temperature.
              With a {{ page.boilingPointLevel }} boiling point, it makes it
              {{ page.warmWeatherAdjective }} for warmer weather and with
              a {{ page.meltingPointLevel }} melting point, it's
              {{ page.coldWeatherAdjective }} for cold weather.
            </span>
          </p>
          <!-- Maybe this can be in a diagram too as in:
            For warm weather/ For cold weather/ For temperate weather (room temperature) -->

          <!-- {{ page['Common Name'] }} and Origins -->
          <div v-if="page['Comes from']">
            <h2>Where does {{ page['Common Name'] }} come from?</h2>

            <p>{{ page['Comes from'] }}</p>
          </div>

          <!-- {{ page['Common Name'] }} and Frizz -->
          <div v-if="page['Frizz taming'].trim().length > 10">
            <h2>How does {{ page['Common Name'] }} affect frizz and flyaways?</h2>
            <p v-if="page['Frizz taming'].trim().length === 0">
              We're still investigating {{ page['Common Name'] }} and its effects on frizz.
              <span todo="@todo" v-if="0 === 1">However, seeing as it has a similar molecular structure to {{ page['Common Name']
              }},
                we can say it may (not) have a positive effect on those flyaways.
              </span>
            </p>
            <p v-else v-html="page['Frizz taming']" />
          </div>

          <!-- {{ page['Common Name'] }} and Breakages -->
          <div v-if="page.Breakage.length > 10">
            <h2>How does {{ page['Common Name'] }} improve hair strength and prevent hair breakages?</h2>
            <p>
              <nuxt-link to="/guides/strong-hair">Hair strength</nuxt-link> 
              is the ability to have fewer split ends, 
              elastic hair that can be pulled and spring back into 
              place and is less likely  to break during hair care.
            </p>
            <p>{{ page.Breakage }}</p>
          </div>

          <div v-if="page['Extraction method']">
            <h2>How is {{ page['Common Name'] }} extracted?</h2>
            {{  page['Extraction method'] }}
          </div>
          
          <!-- {{ page['Common Name'] }} and Resources -->
          <h2>Resources</h2>
          <p v-if="page.Resources" v-html="page.Resources" />
          <p v-else>
            Currently we're lacking resources and citations for {{ page['Common Name'].toLowerCase() }},
            but will be updating this page in the future.
          </p>

        </div>

        <div v-if="page.updated && page.created" class="maxw-xsuper dark ml-au mr-au mb3 lh0">
          <span class="h3 db"></span>
          <div class="fs-3 ls2 tfu mb0">Originally published: {{ (page.created | formatDate) }}</div>
        </div>
      </div>
      <div v-else class="s-article mb3">
        Ooops. It looks like this guide does not exist.
      </div>
    </div>

  </div>
</template>
  
<script>
import readingTime from 'reading-time'
import marked from 'marked'

export default {
  methods: {
    
  },
  async asyncData({ $content, params }) {
    let page = false
    
    try {
      let pages = await $content(`embodiment-fatty-acids`).fetch()

      // @todo - duplication
      page = pages.body.find(page => {
        let link = page['Common Name']
          .toLowerCase()
          .trim()
          .replace(' ', '-')

        return params.article === link

      })

      page.lipidLength = page['Lipid Numbers']
        .match(/C(\d+):/)[1]
      page.lipidLengthText = page.lipidLength >= 14 ? 'long' : 'short'

      // Merriam-Webster defines a temperature range of 15 to 25 °C (59 to 77 °F) as 
      // suitable for long term human occupancy and laboratory experimentation.
      // https://sciencenotes.org/what-is-room-temperature/
      page.roomTempState = page['Melting temp'] < 15 ? 'liquid' : 'solid'

      page.boilingPointLevel = (page['Boil temp'] > 40) ? 'high' : 'low'
      page.meltingPointLevel = (page['Melting temp']) < 0 ? 'low' : 'high'

      page.warmWeatherAdjective = page.boilingPointLevel === 'high' ? 'great' : 'not so good'
      page.coldWeatherAdjective = page.meltingPointLevel === 'low' ? 'great' : 'not so good'

      page['Frizz taming'] = marked.parse(page['Frizz taming'])
      page['Extrction method'] = marked.parse(page['Extraction method'])
      page.Resources = marked.parse(page.Resources)
      page.created = page.created || 'Tue 25 April 2023'

      console.log({ page: pages.body[0].Resources })
      console.log({ page, params })
    } catch (e) { }

    // @todo
    // const readTimeStats = readingTime(text.text);

    return {
      page,
      //   readTimeStats
    }
  },
  head() {
    let description = `We take a look at ${this.page['Common Name']}, a fatty acid and whether it's beneficial for hair care.`
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page['Common Name'] + 'and Hair Care'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.Introduction || description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.image || 'https://embodimentshop.com/images/embodiment-share.jpg'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.page.Introduction || description
        }
      ]
    }
  }
}
</script>
