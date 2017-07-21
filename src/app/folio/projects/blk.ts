

export const linkAttrs = 'target="_blank" rel="nofollow"';
// shared accross the other projects

const rootLink = '../assets/blk/';

export default {
  id: 1,
  cat: 'play',
  slug: 'blk',
  intro: {
    title: 'Blackjack Vue.js',
    desc: 'Vue.js | ES6 | Games Development',
    icon: `${rootLink}card-pop.svg`,
    style: {
      color: '#f9a825',
      background: 'linear-gradient(#2a5a30, #152e18)',
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}vuejs.svg`,
      }, {
        type: 'text',
        class: 'intro-text row-collapse',
        value: `
        <h3 class="header-3" >The Project</h3>
        <p>A web app game of Blackjack. Fully playable for up to 5 players.</p>
        <h3 class="header-3" >The Role</h3>
        <p>Personal project. Learning Vue.js.</p>
        <h3 class="header-3" >The Toolkit</h3>
        <ul>
          <li>Javascript framework = Vue.js with Vuex and ES6</li>
          <li>Built with webpack - postCSS and babel</li>
        </ul>
        `,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'text-center',
        value: `
        <h3 class="header-3">View source on
          <a href="https://github.com/jon-r/jr_blackJackVue" ${linkAttrs} >Github</a>
        </h3>
        `,
      }, {
        type: 'text',
        class: 'text-center',
        value: `
        <h3 class="header-3">View
          <a href="https://jon-richards.com/blackjack/" ${linkAttrs} >Live Game</a>
        </h3>
        `,
      }],
    }, {

      class: 'blackjack-row hide-small',
      content: [{
        type: 'iframe',
        height: '75%',
        value: '//jon-richards.com/blackjack/?demo',
      }],
    }, {
      class: 'text-row align-tops',
      content: [{
        type: 'text',
        value: `
        <p>My goal was to learn Vue.js by actually making something with it. The project was built with ES6,
        and I used a number of modern JavaScript features such as the
        <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator" ${linkAttrs} >
        spread operator</a>,
        <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" ${linkAttrs} >
        arrow functions</a> and
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" ${linkAttrs} >
        promises</a>.
        For backwards compatability I also used webpack with Babel and postCSS.</p> <p>The Visuals are all
        custom made SVG elements. Animations are built with almost entirely CSS only transitions, with a
        few javascript triggers.</p>
        `,



      }, {
        type: 'text',
        class: 'stats-box',
        value: `
        <h4 class="header-4">Bundle Gzip Size</h4>
        <div class="font-super" style="color:#2a5a30">47kb</div>
        <span>without google fonts
          <a href="https://fonts.google.com/?selection.family=Roboto" ${linkAttrs} >Roboto</a></span>
          &
          <a href="https://material.io/icons/" ${linkAttrs} >Material Icons</a>
        </span>
        `,
      }],
    }, {
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        type: 'image',
        height: '75%',
        class: 'content-overlap',
        value: `${rootLink}results.png`,
      }],
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>I decided to build blackjack for a few reasons. Card games have only a few moving parts for a start.
        Blackjack has a fairly simple set of rules and a typical round only lasts a few minutes.</p>
        <p>Despite the simple rules, there were still a few tricky moments in programming the gameplay, with
        betting and special player actions.</p>
        <p>In Blackjack a player is allowed to ‘split’ a pair into two hands. By paying an extra bet his two
        cards become two independent hands. Because of this rule, special edge cases had to be made in the
        ‘win/lose’ conditions that treated the hands independently from each other, and bets had to be adjusted
        too (losing one hand doesn’t knock the player out instantly)</p>
        `,
      }],
    }, {
      style: {
        background: `url(${rootLink}table-print.svg) right/contain no-repeat, url(${rootLink}/noise.png) #2a5a30`,
      },
      content: [{
        type: 'image',
        height: '62.5%',
        class: 'no-expand',
        value: `${rootLink}tokens.svg`,
      }],
    }, {
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        type: 'image',
        height: '13%',
        class: 'image-shadow',
        value: `${rootLink}ctrls.png`,
      }],
    }, {
      content: [{
        type: 'image',
        height: '107%',
        class: 'image-shadow flex-double',
        value: `${rootLink}options.png`,
      }, {
        type: 'image',
        height: '85%',
        class: 'image-shadow',
        value: `${rootLink}hand.png`,
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};


// ideally make a version that is in the middle of a game?
// some styled iframe to seperate the site? perhaps some screen
