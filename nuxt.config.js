export default {
  ssr : true,
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
          subtitle: 'Play rock-paper-scissors with AI',
          metaTitle: 'Rock Paper Scissors Game',
          metaDescription: "Play Rock Paper Scissors against an AI that learns from your moves. Test your strategy against machine learning!",
          metaKeywords: "rock paper scissors, rock paper scissors game, rock paper scissors ai,rock paper scissors with AI, rock paper scissors AI game, rock paper scissors game with AI",

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
          gameCount: 'Total Games',
          draws: "Draws",
          aiTaunt: "Oh, so weak!",
          random: "Random",

          tips: 'Tips',
          what: 'What\'s This Game?',
          thisIs: 'Welcome to AI Rock Paper Scissors - a classic game with a twist!',
          thisGame: "Our smart AI learns from your moves, adapting its strategy to challenge you in exciting ways. Can you outsmart it?",
          builtWith: 'Using Nuxt.js & Tailwind CSS for a smooth, responsive experience.',

          how: 'How to Play',
          step1: 'Start by choosing Rock ✊, Paper ✋, or Scissors ✌️.',
          step2: 'Keep playing and see if you can spot patterns in the AI\'s choices.',
          step3: 'Try different strategies! Here are some ideas:',
          pattern1: 'Go for the same choice multiple times',
          pattern2: 'Alternate between two choices',
          pattern3: 'Use a three-move sequence',
          pattern4: 'Mix it up randomly',
          step4: 'Watch how the AI adapts to your style. Can you stay one step ahead?',
          challenge: 'Think you can beat our AI? Give it a try and have fun!',
          shareScore: "Share Score",
          shareScoreTwitter: "Share on Twitter",
          shareScoreReddit: "Share on Reddit",
          shareText: "I just played Rock Paper Scissors with AI! My score: {scoreHuman}, AI score: {scoreAI}, after {gameCount} games. Can you beat the AI?"
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
          draws: "平局",
          aiTaunt: "哦，太弱了！",
          random: "随机",
  
          what: '这是什么游戏？',
          thisIs: '欢迎来到AI石头剪刀布 - 经典游戏的创新版本！',
          thisGame: "我们的智能AI会从你的动作中学习，调整策略来挑战你。你能胜过它吗？",
          builtWith: '使用Nuxt.js和Tailwind CSS精心打造，带来流畅响应的体验。',

          how: '如何游戏',
          step1: ' 选择石头✊、布✋或剪刀✌️开始游戏。',
          step2: '持续游戏，看看你能否发现AI选择的模式。',
          step3: '尝试不同的策略！以下是一些想法：',
          pattern1: '连续使用相同的选择',
          pattern2: '在两个选择之间交替',
          pattern3: '使用三步序列',
          pattern4: '随机混合选择',
          step4: '观察AI如何适应你的风格。你能保持领先吗？',
          shareScoreTwitter: "在Twitter上分享",
          shareScoreReddit: "在Reddit上分享",
          challenge: '觉得能打败我们的AI吗？来试试看，祝你玩得开心！',
          shareScore: "分享得分",
          shareText: "我刚刚和AI玩了石头剪刀布！我的得分：{scoreHuman}，AI得分：{scoreAI}，共进行了{gameCount}局。你能打败AI吗？"
        }
      }
    }
  }
}
