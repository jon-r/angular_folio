import { linkAttrs } from './index';
const rootLink = '../assets/ico/';


export default {
  id: 3,
  cat: 'play',
  slug: 'ico',
  intro: {
    title: 'SVG Inconography',
    desc: 'Bespoke SVG | CSS3 Animations',
    icon: '',
    style: {
      'background-color': '#fff',
      'color': '#9ac437',
    },
  },
  rows: [
    {
      class: 'text-row',
      content: [{
        type: 'image',
        value: `${rootLink}logo.png`,
      }, {
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
      }]
    }, {
      class: 'image-row',
      content: [{
        type: 'svg',
        value: `${rootLink}rem-logo.svg`,
      }, {
        type: 'svg',
        class: 'flex-double',
        value: `${rootLink}ridings-ico.svg`,
      }],
    }, {
      class: 'image-row row-collapse',
      content: [{
        type: 'svg',
        value: `${rootLink}pro-icons.svg`,
      }, {
        type: 'svg',
        value: `${rootLink}charlie-sign-anim.svg`,
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
      class: 'row-gallery image-row',
      content: [{
        type: 'svg',
        value: `${rootLink}monitor_anim.svg`,
      }, {
        type: 'svg',
        value: `${rootLink}screen.svg`,
      }, {
        type: 'svg',
        value: `${rootLink}tablet.svg`,
      }, {
        type: 'svg',
        value: `${rootLink}iphone.svg`,
      }],
    }, {
      class: 'image-row',
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
