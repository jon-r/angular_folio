import { linkAttrs } from './index';
const rootLink = '../assets/blk/';

export default {
  id: 1,
  cat: 'play',
  slug: 'blk',
  intro: {
    title: 'Blackjack JS',
    desc: 'Javascript ES6 | Games Development',
    style: {
      'background-color': '#004a28',
      'color': '#f9a825',
    },
  },
  rows: [
    {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h4>The Project</h4>
        <p>A web app game of Blackjack. Fully playable for up to 5 players.</p>
        <h4>The Role</h4>
        <p>Personal project. Learning Vue.js.</p>
        <h4>The Toolkit</h4>
        <ul>
          <li>Javascript framework = Vue.js with Vuex and ES6</li>
          <li>Built with webpack - postCSS and babel</li>
        </ul>
        `,
      }, {
        type: 'image',
        value: `${rootLink}logo.png`,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'text-center',
        value: `
        <h4>View source on
          <a class="nav-link" href="https://github.com/jon-r/jr_blackJackVue" ${linkAttrs} >Github</a>
        </h4>
        `,
      }],
    }, {
      style: {
        'padding-top': '120px',
        'padding-bottom': '120px',
        background: `url(${rootLink}ipad-bg.svg) center 64px /1440px 900px no-repeat`,
      },
      content: [{
        type: 'iframe',
        class: 'iframe-1024',
        value: 'http://jon-richards.com/blackjack-2/',
      }],
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>My goal was to learn Vue.js by actually making something with it. The project was built with ES6,
        and I used a number of modern JavaScript features such as the [spread] operator, [arrow] functions
        and [promises]. For backwards compatability I also used webpack with Babel and postCSS.</p>
        <p>The Visuals are all custom made SVG elements. Animations are built with almost entirely CSS only
        transitions, with a few javascript triggers.</p>
        `,
      }],
    }, {
      class: 'row-gallery',
      content: [{
        type: 'image',
        value: `${rootLink}logo.png`,
      }, {
        type: 'image',
        value: `${rootLink}logo.png`,
      }, {
        type: 'image',
        value: `${rootLink}logo.png`,
      }, {
        type: 'image',
        value: `${rootLink}logo.png`,
      }],
    }, {
      content: [{
        type: 'svg',
        value: `${rootLink}chip.svg`,
      }, {
        type: 'svg',
        value: `${rootLink}table-print.svg`,
      }, {
        type: 'image',
        class: 'flex-double',
        value: `${rootLink}logo.png`,
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
    },
  ]
};