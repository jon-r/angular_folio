import { linkAttrs } from './index';
const rootLink = '../assets/ico/';


export default {
  id: 3,
  cat: 'play',
  slug: 'ico',
  intro: {
    title: 'SVG Inconography',
    desc: 'Bespoke SVG | CSS3 Animations',
    icon: `${rootLink}sapp-logo.svg`,
    style: {
      background: 'linear-gradient(#222, #000)',
      color: '#ff8c39',
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
      }]
    }, {
      class: 'image-row row-collapse',
      content: [{
        type: 'svg',
        class: 'frame-1-1',
        value: `${rootLink}rem-logo.svg`,
      }, {
        type: 'svg',
        class: 'flex-double frame-1-2',
        value: `${rootLink}ridings-ico.svg`,
      }],
    }, {
      class: 'image-row',
      content: [{
        type: 'svg',
        class: 'frame-1-1',
        value: `${rootLink}pro-icons.svg`,
      }, {
        type: 'svg',
        class: 'frame-1-1',
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
        class: 'frame-4-3',
        value: `${rootLink}monitor_anim.svg`,
      }, {
        type: 'iframe',
        class: 'frame-4-3',
        value: '//codepen.io/inspironix/embed/preview/MpBXYG/?height=265&theme-id=light&default-tab=result&embed-version=2',
      }, {
        type: 'svg',
        class: 'frame-4-3',
        value: `${rootLink}screen.svg`,
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};
