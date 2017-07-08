import { linkAttrs } from './index';
const rootLink = '../assets/blk/';

export default {
  id: 3,
  cat: 'play',
  slug: 'ico',
  intro: {
    title: 'SVG Inconography',
    desc: 'Bespoke SVG | CSS3',
    style: {
      'background-color': 'red',
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
        <p>A presentation and live demo of a number of SVG elements that I have produced.</p>
        <h4>The Toolkit</h4>
        <ul>
          <li>Illustrator (preparing and tidying vector illustrations)</li>
          <li>Brackets code editor. Manually cleaning up SVG’s, and styling/animating them with CSS</li>
          <li>[SVGOMG] online configurable optimisation and minification of SVG’s.</li>
        </ul>
        `,
      }, {
        type: 'image',
        value: `${rootLink}logo.png`,
      }]
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
        <p>As well as animating designs in the agency, I also hand-coded a number of designs for my personal projects.</p>
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
    },
  ]
};
