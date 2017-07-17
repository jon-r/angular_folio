import { linkAttrs } from './index';
const rootLink = '../assets/ico/';


export default {
  id: 3,
  cat: 'play',
  slug: 'ico',
  intro: {
    title: 'SVG Inconography',
    desc: 'Bespoke SVG elements that I have produced or animated',
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
        <h4>The Toolkit</h4>
        <ul>
          <li>Illustrator (preparing and tidying vector illustrations)</li>
          <li>Brackets code editor. Manually cleaning up SVG’s, and styling/animating them with CSS</li>
          <li>[SVGOMG] online configurable optimisation and minification of SVG’s.</li>
        </ul>
        `,
      }]
    }, {
      style: {
        backgroundColor: '#B2DFDB',
      },
      class: 'row-collapse',
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}rem-logo.svg`,
      }, {
        type: 'image',
        class: 'flex-double',
        height: '50%',
        value: `${rootLink}ridings-ico.svg`,
      }],
    }, {
      style: {
        backgroundColor: '#B2DFDB',
      },
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}pro-icons.svg`,
      }, {
        type: 'image',
        height: '100%',
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
      style: {
        backgroundColor: '#B2DFDB',
      },
      content: [{
        type: 'image',
        height: '75%',
        value: `${rootLink}monitor_anim.svg`,
      }, {
        type: 'iframe',
        height: '75%',
        value: '//codepen.io/inspironix/embed/preview/MpBXYG/?height=265&theme-id=light&default-tab=result&embed-version=2',
      }, {
        type: 'image',
        height: '75%',
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
