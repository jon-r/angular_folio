const fileRoot = '../assets/blk/';

export default {
  id: 1,
  cat: 'play',
  slug: 'blk',
  intro: {
    title: 'Blackjack Vue.js',
    desc: 'Vue.js | ES6 | Games Development',
    icon: `${fileRoot}card-pop.svg`,
    style: {
      color: '#f9a825',
      'background': 'linear-gradient(transparent, rgba(0,0,0,.1),rgba(0,0,0,.5)), url(../assets/noise.png), #2a5a30',
    },
  },
  rows: [{
    content: [{
      type: 'text',
      class: 'intro-text',
      value: `
      <h4>The Project</h4>
      <p>Javascript Blackjack card game. Build on the Vue.js framework</p>
      <h4>The Tools</h4>
      <p>Vue.js | ES6 | Webpack</p>
      <h4>The Role</h4>
      <ul>
        <li>Project in my free time. Learning Vue.js by doing.</li>
        <li>Javascript ES6 kit. making use of the latest javascript features</li>
        <li>Webpack. Producing a backwards compatible project with Babel and PostCSS</li>
      </ul>
      `,
    }, {
      type: 'image',
      class: 'overhang',
      value: 'some text',
    }]
  }, {
    content: [{
      type: 'iframe',
      class: 'iframe-4-3',
      value: '//jon-richards.com/blackjack-2',
    }]
  },
]
};


// ideally make a version that is in the middle of a game?
// some styled iframe to seperate the site? perhaps some screen
