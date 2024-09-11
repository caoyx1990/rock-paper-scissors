export default {
  ssr : true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/rock-paper-scissors.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  webfontloader: {
    google: {
      families: [
        'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
      ]
    }
  },
  server: {
    port: 8000,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          title: 'Rock Paper Scissors',
          subtitle: 'With Artificial Intellegence',
          metaDescription: "Play Rock Paper Scissors against an AI that learns from your moves. Test your strategy against machine learning!",
          metaKeywords: "rock paper scissors, rock paper scissors game, rock paper scissors with AI, strategy game",

          gameStart: 'Start Game',
          youWin: 'You Win',
          youLose: 'You Lose',
          draw: 'Draw',

          score: 'Score',
          human: 'Human',
          ai: 'AI',
          rock: 'Rock',
          paper: 'Paper',
          scissors: 'Scissors',
          reset: 'Reset',
          gameCount: 'Game count',

          tips: 'Tips',
          what: 'What is this?',
          thisIs:
            'This is a paper scissors rock game created using artificial intelligence.',
          thisGame:
            "This game can read the players' patterns to determine the next steps for 'AI' will take in order to win.",
          builtWith: 'Built with Nuxt JS & Tailwind CSS framework.',

          how: 'How to play',
          step1: 'You can start the game by selecting "rock", "scissors" or "paper".',
          step2: 'Choose continuously until you create a pattern.',
          step3: 'Examples of patterns:',
          pattern1: 'Rock, rock, rock, rock, etc.',
          pattern2: 'Rock, scissors, rock, scissors, etc.',
          pattern3: 'Rock, scissors, paper, rock, scissors, paper, etc.',
          pattern4: 'Paper, paper, paper, paper, etc.',
          step4: 'See that you will lose.',
        },
        zh: {
          welcome: '欢迎',
          title: '石头剪刀布',
          subtitle: '人工智能版',
          metaDescription: "与能从你的动作中学习的 AI 玩石头剪刀布。测试你的策略对抗机器学习！",
          metaKeywords: "石头剪刀布, AI 游戏, 机器学习游戏, 策略游戏",
  
          gameStart: '开始游戏',
          youWin: '你赢了',
          youLose: '你输了',
          draw: '平局',
  
          score: '得分',
          human: '人类',
          ai: '人工智能',
          rock: '石头',
          paper: '布',
          scissors: '剪刀',
          reset: '重置',
          gameCount: '游戏次数',
  
          what: '这是什么？',
          thisIs: '这是一个使用人工智能创建的石头剪刀布游戏。',
          thisGame: '这个游戏可以读取玩家的模式，以确定"人工智能"将采取的下一步行动以获胜。',
          builtWith: '使用 Nuxt JS 和 Tailwind CSS 框架构建。',
  
          how: '如何玩',
          step1: '你可以通过选择"石头"、"剪刀"或"布"来开始游戏。',
          step2: '持续选择直到形成一个模式。',
          step3: '模式示例：',
          pattern1: '石头、石头、石头、石头等。',
          pattern2: '石头、剪刀、石头、剪刀等。',
          pattern3: '石头、剪刀、布、石头、剪刀、布等。',
          pattern4: '布、布、布、布等。',
          step4: '看看你会输。',
        }
      }
    }
  }
}
