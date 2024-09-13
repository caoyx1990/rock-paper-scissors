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
    locales: [{ code: 'en', name: 'English' },
      { code: 'zh', name: '中文' },
      { code: 'hi', name: 'हिन्दी' },
      { code: 'de', name: 'Deutsch' },
      { code: 'pl', name: 'Polski' }],
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
        },
        hi: {
          welcome: 'स्वागत है',
          title: 'रॉक पेपर सिज़र्स',
          subtitle: 'AI के साथ रॉक-पेपर-सिज़र्स खेलें',
          metaTitle: 'रॉक पेपर सिज़र्स गेम',
          metaDescription: "एक AI के खिलाफ रॉक पेपर सिज़र्स खेलें जो आपकी चालों से सीखता है। मशीन लर्निंग के खिलाफ अपनी रणनीति का परीक्षण करें!",
          metaKeywords: "रॉक पेपर सिज़र्स, रॉक पेपर सिज़र्स गेम, रॉक पेपर सिज़र्स AI, AI के साथ रॉक पेपर सिज़र्स, रॉक पेपर सिज़र्स AI गेम",
  
          gameStart: 'गेम शुरू करें',
          youWin: 'आप जीते',
          youLose: 'आप हारे',
          draw: 'ड्रॉ',
  
          score: 'स्कोर',
          human: 'मानव',
          ai: 'AI',
          rock: 'रॉक',
          paper: 'पेपर',
          scissors: 'सिज़र्स',
          reset: 'रीसेट',
          gameCount: 'कुल गेम',
          draws: "ड्रॉ",
          aiTaunt: "ओह, इतना कमजोर!",
          random: "रैंडम",
  
          tips: 'टिप्स',
          what: 'यह गेम क्या है?',
          thisIs: 'AI रॉक पेपर सिज़र्स में आपका स्वागत है - एक ट्विस्ट के साथ क्लासिक गेम!',
          thisGame: "हमारा स्मार्ट AI आपकी चालों से सीखता है, रोमांचक तरीकों से आपको चुनौती देने के लिए अपनी रणनीति को अनुकूलित करता है। क्या आप इसे चकमा दे सकते हैं?",
          builtWith: 'सुचारू, प्रतिक्रियाशील अनुभव के लिए Nuxt.js और Tailwind CSS का उपयोग किया गया है।',
  
          how: 'कैसे खेलें',
          step1: 'रॉक ✊, पेपर ✋, या सिज़र्स ✌️ चुनकर शुरू करें।',
          step2: 'खेलते रहें और देखें कि क्या आप AI की पसंद में पैटर्न देख सकते हैं।',
          step3: 'अलग-अलग रणनीतियाँ आजमाएँ! यहाँ कुछ विचार हैं:',
          pattern1: 'कई बार एक ही विकल्प चुनें',
          pattern2: 'दो विकल्पों के बीच बदलते रहें',
          pattern3: 'तीन चालों का क्रम इस्तेमाल करें',
          pattern4: 'रैंडम तरीके से मिक्स करें',
          step4: 'देखें कि AI कैसे आपकी शैली के अनुसार ढलता है। क्या आप एक कदम आगे रह सकते हैं?',
          challenge: 'क्या आप सोचते हैं कि आप हमारे AI को हरा सकते हैं? कोशिश करें और मजे करें!',
          shareScore: "स्कोर शेयर करें",
          shareScoreTwitter: "Twitter पर शेयर करें",
          shareScoreReddit: "Reddit पर शेयर करें",
          shareText: "मैंने अभी AI के साथ रॉक पेपर सिज़र्स खेला! मेरा स्कोर: {scoreHuman}, AI स्कोर: {scoreAI}, {gameCount} गेम के बाद। क्या आप AI को हरा सकते हैं?"
        },
  
        de: {
          welcome: 'Willkommen',
          title: 'Schere, Stein, Papier',
          subtitle: 'Spiele Schere-Stein-Papier mit KI',
          metaTitle: 'Schere, Stein, Papier Spiel',
          metaDescription: "Spiele Schere, Stein, Papier gegen eine KI, die aus deinen Zügen lernt. Teste deine Strategie gegen maschinelles Lernen!",
          metaKeywords: "Schere Stein Papier, Schere Stein Papier Spiel, Schere Stein Papier KI, Schere Stein Papier mit KI, Schere Stein Papier KI-Spiel",
  
          gameStart: 'Spiel starten',
          youWin: 'Du gewinnst',
          youLose: 'Du verlierst',
          draw: 'Unentschieden',
  
          score: 'Punktestand',
          human: 'Mensch',
          ai: 'KI',
          rock: 'Stein',
          paper: 'Papier',
          scissors: 'Schere',
          reset: 'Zurücksetzen',
          gameCount: 'Gesamtspiele',
          draws: "Unentschieden",
          aiTaunt: "Oh, so schwach!",
          random: "Zufällig",
  
          tips: 'Tipps',
          what: 'Was ist dieses Spiel?',
          thisIs: 'Willkommen bei KI Schere, Stein, Papier - ein klassisches Spiel mit einer Wendung!',
          thisGame: "Unsere intelligente KI lernt aus deinen Zügen und passt ihre Strategie an, um dich auf spannende Weise herauszufordern. Kannst du sie überlisten?",
          builtWith: 'Entwickelt mit Nuxt.js & Tailwind CSS für ein reibungsloses, reaktionsschnelles Erlebnis.',
  
          how: 'Wie man spielt',
          step1: 'Beginne, indem du Stein ✊, Papier ✋ oder Schere ✌️ wählst.',
          step2: 'Spiele weiter und versuche, Muster in den Entscheidungen der KI zu erkennen.',
          step3: 'Probiere verschiedene Strategien aus! Hier sind einige Ideen:',
          pattern1: 'Wähle mehrmals die gleiche Option',
          pattern2: 'Wechsle zwischen zwei Optionen',
          pattern3: 'Verwende eine Drei-Zug-Sequenz',
          pattern4: 'Mische es zufällig',
          step4: 'Beobachte, wie sich die KI an deinen Stil anpasst. Kannst du einen Schritt voraus bleiben?',
          challenge: 'Denkst du, du kannst unsere KI schlagen? Versuch es und hab Spaß!',
          shareScore: "Punktestand teilen",
          shareScoreTwitter: "Auf Twitter teilen",
          shareScoreReddit: "Auf Reddit teilen",
          shareText: "Ich habe gerade Schere, Stein, Papier mit KI gespielt! Mein Punktestand: {scoreHuman}, KI-Punktestand: {scoreAI}, nach {gameCount} Spielen. Kannst du die KI schlagen?"
        },
  
        pl: {
          welcome: 'Witaj',
          title: 'Kamień, Papier, Nożyce',
          subtitle: 'Graj w kamień-papier-nożyce z AI',
          metaTitle: 'Gra Kamień, Papier, Nożyce',
          metaDescription: "Zagraj w Kamień, Papier, Nożyce przeciwko AI, które uczy się z twoich ruchów. Przetestuj swoją strategię przeciwko uczeniu maszynowemu!",
          metaKeywords: "kamień papier nożyce, gra kamień papier nożyce, kamień papier nożyce AI, kamień papier nożyce z AI, gra kamień papier nożyce AI",
  
          gameStart: 'Rozpocznij grę',
          youWin: 'Wygrywasz',
          youLose: 'Przegrywasz',
          draw: 'Remis',
  
          score: 'Wynik',
          human: 'Człowiek',
          ai: 'AI',
          rock: 'Kamień',
          paper: 'Papier',
          scissors: 'Nożyce',
          reset: 'Reset',
          gameCount: 'Liczba gier',
          draws: "Remisy",
          aiTaunt: "Och, tak słabo!",
          random: "Losowo",
  
          tips: 'Wskazówki',
          what: 'Co to za gra?',
          thisIs: 'Witaj w AI Kamień, Papier, Nożyce - klasycznej grze z twistem!',
          thisGame: "Nasza inteligentna AI uczy się z twoich ruchów, dostosowując swoją strategię, aby rzucić ci wyzwanie w ekscytujący sposób. Czy potrafisz ją przechytrzyć?",
          builtWith: 'Stworzone przy użyciu Nuxt.js i Tailwind CSS dla płynnego, responsywnego doświadczenia.',
  
          how: 'Jak grać',
          step1: 'Zacznij od wyboru Kamienia ✊, Papieru ✋ lub Nożyc ✌️.',
          step2: 'Graj dalej i zobacz, czy możesz zauważyć wzorce w wyborach AI.',
          step3: 'Wypróbuj różne strategie! Oto kilka pomysłów:',
          pattern1: 'Wybieraj tę samą opcję wielokrotnie',
          pattern2: 'Naprzemiennie wybieraj dwie opcje',
          pattern3: 'Użyj sekwencji trzech ruchów',
          pattern4: 'Mieszaj losowo',
          step4: 'Obserwuj, jak AI dostosowuje się do twojego stylu. Czy potrafisz być o krok do przodu?',
          challenge: 'Myślisz, że możesz pokonać naszą AI? Spróbuj i baw się dobrze!',
          shareScore: "Udostępnij wynik",
          shareScoreTwitter: "Udostępnij na Twitterze",
          shareScoreReddit: "Udostępnij na Reddicie",
          shareText: "Właśnie zagrałem w Kamień, Papier, Nożyce z AI! Mój wynik: {scoreHuman}, wynik AI: {scoreAI}, po {gameCount} grach. Czy potrafisz pokonać AI?"
        }
      }
    }
  }
}
