<template>
  <div class="max-w-5xl mx-auto flex-col px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flex justify-end" style="float: right;">
      <div class="flex flex-col items-end absolute">
        <button
          @click="shareScore('twitter')"
          class="p-2 mb-2 text-blue-400 hover:text-blue-500 transition duration-300 rounded-full hover:bg-blue-100"
          :title="$t('shareScoreTwitter')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </button>
        <button
          @click="shareScore('reddit')"
          class="p-2 text-orange-500 hover:text-orange-600 transition duration-300 rounded-full hover:bg-orange-100"
          :title="$t('shareScoreReddit')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center text-center mt-6 lg:mt-10">
      <!-- <div class="flex justify-end w-full p-4">
        <nuxt-link
          class="inline-flex items-center px-4 py-2 text-white duration-500 bg-indigo-500 rounded-md hover:bg-indigo-600"
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
        >
          <span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline w-6 h-6 translate"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span class="ml-2">English</span>
        </nuxt-link>
        
        <nuxt-link
          class="inline-flex items-center px-4 py-2 text-white duration-500 bg-indigo-500 rounded-md hover:bg-indigo-600"
          v-if="$i18n.locale !== 'zh'"
          :to="switchLocalePath('zh')"
        >
          <span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline w-6 h-6 translate"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span class="ml-2">中文</span>
        </nuxt-link>
      </div> -->
      <div class="p-4">
        <h1 class="text-2xl sm:text-3xl font-bold text-indigo-500">{{ $t('title') }}</h1>
        <h2 class="text-sm sm:text-base text-indigo-500">{{ $t('subtitle') }}</h2>
      </div>
      <div class="p-4">
        <h2 class="text-xl sm:text-2xl font-semibold text-indigo-500">
          {{ $t('score') }}
        </h2>
        <div class="flex items-center mt-4 justify-center">
          <div class="w-1/2 border-r border-indigo-500 px-2">
            <p class="text-lg font-semibold text-green-600 bg-green-100 rounded-full px-4 py-2 inline-block shadow-md">
              <span class="text-xl font-bold">{{ scoreHuman }}</span>
            </p>
            <!-- <p class="text-2xl sm:text-3xl text-indigo-500">{{ scoreHuman }}</p> -->
            <p class="mt-2 sm:mt-4 text-base sm:text-lg flex items-center justify-center">
              <span class="emoji mr-2" aria-hidden="true">🥵</span>
              <span>{{ $t('human') }}</span>
            </p>
            <p class="mt-2 sm:mt-4 flex items-center justify-center">
              <span class="emoji mr-2" v-html="chosenEmoji(chosenByHuman)"></span>
              <span class="text-sm sm:text-base">{{ showChosenByHuman }}</span>
            </p>
          </div>
          <!-- <div class="w-1/2 px-2">
            <p class="text-2xl sm:text-3xl text-indigo-500">{{ scoreAI }}</p>
            <p class="mt-2 sm:mt-4 text-base sm:text-lg flex items-center justify-center">
              <span class="emoji mr-2" aria-hidden="true">🤖</span>
              <span>{{ $t('ai') }}</span>
            </p>
            <p class="mt-2 sm:mt-4 flex items-center justify-center">
              <span class="emoji mr-2" v-html="chosenEmoji(chosenByAI)"></span>
              <span class="text-sm sm:text-base">{{ showChosenByAI }}</span>
            </p>
          </div> -->
          <div class="w-1/2 px-2 relative">
            <p class="text-lg font-semibold text-red-600 bg-red-100 rounded-full px-4 py-2 inline-block shadow-md">
              <span class="text-xl font-bold">{{ scoreAI }}</span>
            </p>
            <!-- <p class="text-2xl sm:text-3xl text-indigo-500">{{ scoreAI }}</p> -->
            <p class="mt-2 sm:mt-4 text-base sm:text-lg flex items-center justify-center">
              <span class="emoji mr-2" aria-hidden="true">🤖</span>
              <span>{{ $t('ai') }}</span>
            </p>
            <p class="mt-2 sm:mt-4 flex items-center justify-center">
              <span class="emoji mr-2" v-html="chosenEmoji(chosenByAI)"></span>
              <span class="text-sm sm:text-base">{{ showChosenByAI }}</span>
            </p>
            <div v-if="aiDominance" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div class="bg-indigo-500 text-white p-2 rounded-lg shadow-lg relative">
                <p class="text-sm">{{ $t('aiTaunt') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-6 text-2xl font-bold">
          <p v-if="this.winner === 'human'" class="text-indigo-500">
            {{ $t('youWin') }}
          </p>
          <p v-else-if="this.winner === 'AI'" class="text-red-500">
            {{ $t('youLose') }}
          </p>
          <p v-else-if="this.winner === 'draw'" class="text-blue-500">
            {{ $t('draw') }}
          </p>
          <p v-else class="text-gray-700">{{ $t('gameStart') }}</p>
        </div>
        <div class="mt-4">
          <div class="flex flex-wrap items-center justify-center">
            <button
              @click="humanInput(1)"
              class="w-24 sm:w-32 h-16 sm:h-20 px-2 sm:px-4 py-1 sm:py-2 m-1 sm:m-2 text-white duration-500 bg-indigo-500 rounded hover:bg-indigo-600 flex flex-col items-center justify-center"
            >
              <span class="text-xl sm:text-2xl">✊</span>
              <span class="mt-1 text-sm sm:text-base">{{ $t('rock') }}</span>
            </button>
            <button
              @click="humanInput(2)"
              class="w-24 sm:w-32 h-16 sm:h-20 px-2 sm:px-4 py-1 sm:py-2 m-1 sm:m-2 text-white duration-500 bg-indigo-500 rounded hover:bg-indigo-600 flex flex-col items-center justify-center"
            >
            <span class="text-xl sm:text-2xl">✋</span>
              <span class="mt-1 text-sm sm:text-base">{{ $t('paper') }}</span>
            </button>
            <button
              @click="humanInput(3)"
              class="w-24 sm:w-32 h-16 sm:h-20 px-2 sm:px-4 py-1 sm:py-2 m-1 sm:m-2 text-white duration-500 bg-indigo-500 rounded hover:bg-indigo-600 flex flex-col items-center justify-center"
            >
            <span class="ttext-xl sm:text-2xl">✌️</span>
              <span class="mt-1 text-sm sm:text-base">{{ $t('scissors') }}</span>
            </button>
            <!-- <button
              @click="randomInput"
              class="w-24 sm:w-32 h-16 sm:h-20 px-2 sm:px-4 py-1 sm:py-2 m-1 sm:m-2 text-white duration-500 bg-yellow-500 rounded hover:bg-yellow-600 flex flex-col items-center justify-center"
            >
              <span class="text-xl sm:text-2xl">🎲</span>
              <span class="mt-1 text-sm sm:text-base">{{ $t('random') }}</span>
            </button> -->
          </div>
          <div>
            <button
              @click="resetScore"
              class="px-4 py-2 m-2 text-indigo-500 border rounded"
            >
            {{ $t('reset') }}
            </button>
          </div>
          <div class="mt-8 flex items-center justify-center">
            <p class="text-lg font-semibold text-indigo-600 bg-indigo-100 rounded-full px-4 py-2 inline-block shadow-md">
              <span class="mr-2">🎮</span>{{ $t('gameCount') }}: <span class="text-xl font-bold">{{ gameCount }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 border-t border-indigo-200 pt-4">
      <button @click="toggleRules" class="flex items-center justify-between w-full px-4 py-2 bg-indigo-100 rounded-t-lg focus:outline-none">
        <span class="text-lg font-semibold text-indigo-600">{{ $t('tips') }}</span>
        <svg :class="{'transform rotate-180': showTips}" class="w-5 h-5 text-indigo-600 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-show="showTips" class="bg-indigo-50 p-4 rounded-b-lg">
        <div class="prose prose-sm sm:prose lg:prose-xl">
          <h2>{{ $t('what') }}</h2>
          <div>
            <p>{{ $t('thisIs') }}</p>
            <p>{{ $t('thisGame') }}</p>
            <p>{{ $t('builtWith') }}</p>
          </div>
        </div>

        <div class="mt-4 prose lg:prose-xl">
          <h2>{{ $t('how') }}</h2>
          <div>
            <ol>
              <li>{{ $t('step1') }}</li>
              <li>{{ $t('step2') }}</li>
              <li>
                {{ $t('step3') }}
                <ul>
                  <li>{{ $t('pattern1') }}</li>
                  <li>{{ $t('pattern2') }}</li>
                  <li>{{ $t('pattern3') }}</li>
                  <li>{{ $t('pattern4') }}</li>
                </ul>
              </li>
              <li>{{ $t('step4') }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-auto py-4 text-center text-gray-600 text-xs sm:text-sm">
      <p>Copyright © {{ new Date().getFullYear() }} Rock Paper Scissors Game</p>
    </footer>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.$t('title'),
      meta: [
      { hid: 'description', name: 'description', content: this.$t('metaDescription') },
        { hid: 'keywords', name: 'keywords', content: this.$t('metaKeywords') },
        { hid: 'og:title', property: 'og:title', content: this.$t('title') },
        { hid: 'og:description', property: 'og:description', content: this.$t('metaDescription') },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('metaDescription') }
      ],
      link: [
        { rel: 'canonical', href: process.env.BASE_URL  || 'https://rockpaperscissors-game.org' },
        { rel: 'icon', type: 'image/x-icon', href: '/rock-paper-scissors.png' }
      ],
      script: [
        { src: '//unpkg.com/brain.js' },
        { hid: 'jsonld', type: 'application/ld+json', json: this.structuredData },
        { 
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7341901814327769',
          async: true,
          crossorigin: 'anonymous'
        },
        {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-PBGXZ31PKB',
        async: true
        },
        {
          hid: 'gtag-init',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PBGXZ31PKB');
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ]
    }
  },
  data() {
    return {
      showTips: false,
      pattern: [],
      scoreHuman: 0,
      scoreAI: 0,
      chosenByHuman: 0,
      chosenByAI: 0,
      winner: '', // human or AI or draw
      gameCount: 0,
      patternLength: 10,
    }
  },
  computed: {
    aiDominance() {
      return this.scoreAI - this.scoreHuman >= 10;
    },
    showChosenByHuman() {
      return this.stringOf(this.chosenByHuman)
    },
    showChosenByAI() {
      return this.stringOf(this.chosenByAI)
    }
  },
  methods: {
    randomInput() {
      const randomChoice = Math.floor(Math.random() * 3) + 1;
      this.humanInput(randomChoice);
    },
    toggleRules() {
      this.showTips = !this.showTips;
    },
    chosenEmoji(chosen) {
      switch (chosen) {
        case 1:
          return '✊';
        case 2:
          return '✋';
        case 3:
          return '✌️';
        default:
          return '';
      }
    },
    async humanInput(rockOrPaperOrScissors) {
      this.chosenByHuman = rockOrPaperOrScissors
      this.gameCount++
      await this.whatShouldAIAnswer()
      this.whoIsTheWinner()
    },
    prepareData() {
      if (this.pattern.length < 1) {
        for (let index = 1; index <= this.patternLength; index++) {
          this.pattern.push(Math.floor(Math.random() * 3) + 1)
        }
      }
    },
    updatePattern() {
      if (this.gameCount !== 0) {
        this.pattern.shift()
        this.pattern.push(this.chosenByHuman)
      }
    },
    async whatShouldAIAnswer() {
      this.prepareData()
      const net = new brain.recurrent.LSTMTimeStep()
      net.train([this.pattern], { iterations: 100, log: true })
      const humanWillChose = net.run(this.pattern)
      console.log(humanWillChose)
      this.updatePattern()

      const roundedHumanWillChose = Math.round(humanWillChose)
      console.log('human will chose: ' + roundedHumanWillChose)
      this.chosenByAI = 1 <= roundedHumanWillChose && roundedHumanWillChose <= 3 ? (roundedHumanWillChose % 3) + 1 : 1
    },
    whoIsTheWinner() {
      if (this.chosenByHuman === this.chosenByAI) {
        this.winner = 'draw'
      } else if (
        (this.chosenByHuman === 1 && this.chosenByAI === 3) ||
        (this.chosenByHuman === 3 && this.chosenByAI === 2) ||
        (this.chosenByHuman === 2 && this.chosenByAI === 1)
      ) {
        this.winner = 'human'
        this.scoreHuman++
      } else {
        this.winner = 'AI'
        this.scoreAI++
      }
    },
    resetScore() {
      this.pattern = []
      this.scoreHuman = 0
      this.scoreAI = 0
      this.chosenByHuman = 0
      this.chosenByAI = 0
      this.winner = ''
      this.gameCount = 0
    },
    stringOf(integer) {
      switch (integer) {
        case 1:
          return this.$t('rock')
        case 2:
          return this.$t('paper')
        case 3:
          return this.$t('scissors')

        default:
          return ''
      }
    },
    shareScore() {
      const text = this.$t('shareText', {
        scoreHuman: this.scoreHuman,
        scoreAI: this.scoreAI,
        gameCount: this.gameCount
      });
      const url = 'https://rockpaperscissors-game.org'; // Replace with your actual URL
      if (platform === 'twitter') {
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      } else if (platform === 'reddit') {
        shareUrl = `https://reddit.com/submit?title=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank');
      }
    },
    structuredData() {
      return {
        "@context": "https://schema.org",
        "@type": "Game",
        "name": this.$t('title'),
        "description": this.$t('metaDescription'),
        "numberOfPlayers": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 1
        },
        "gameItem": [
          {
            "@type": "Thing",
            "name": this.$t('rock')
          },
          {
            "@type": "Thing",
            "name": this.$t('paper')
          },
          {
            "@type": "Thing",
            "name": this.$t('scissors')
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
.emoji {
  font-size: 1.5em;
  animation: pulse 2s infinite;
}

@media (min-width: 640px) {
  .emoji {
    font-size: 1.5em;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>