import { linkAttrs } from './blk';
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
        <h3 class="header-3">The Toolkit</h3>
        <ul>
          <li>Illustrator (preparing and tidying vector illustrations)</li>
          <li>Brackets code editor. Manually cleaning up SVG’s, and styling/animating them with CSS</li>
          <li><a href="https://jakearchibald.github.io/svgomg/" ${linkAttrs} >SVGOMG</a> online configurable
            optimisation and minification of SVG’s.</li>
        </ul>
        `,
      }]
    }, {
      style: {
        backgroundColor: '#B2DFDB',
      },
      class: 'row-collapse flex-mobile',
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}rem-logo.svg`,
        alt: 'Rembrandt House',
        caption: 'Website Animations'
      }, {
        type: 'image',
        class: 'flex-double',
        height: '50%',
        value: `${rootLink}ridings-ico.svg`,
        alt: 'Ridings Wealth',
      }],
    }, {
      class: 'flex-mobile',
      style: {
        backgroundColor: '#B2DFDB',
      },
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}pro-icons.svg`,
        alt: 'Pro Install AV',
      }, {
        type: 'image',
        height: '100%',
        value: `${rootLink}amb-icon.svg`,
        alt: 'Ambiente Tapas',
      }, {
        type: 'image',
        height: '100%',
        value: `${rootLink}charlie-sign-anim.svg`,
        alt: 'Charlie Chapati',
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
      class: 'text-row row-collapse',
      content: [{
        class: 'stats-box',
        type: 'text',
        value: `
        <div >
          <h4 class="header-4">&lt;JR&gt; Logo Gzip Size</h4>
          <div class="font-super" style="color:#0e4c46">524 bytes</div>
          <span>218b without animation</span>
        </div>
        `,
      }, {
        type: 'image',
        height: '36%',
        value: `${rootLink}jr-logo.min.svg`,
        alt: 'JR Web',
      }],
    }, {
      class: 'flex-mobile',
      style: {
        backgroundColor: '#B2DFDB',
      },
      content: [{
        type: 'image',
        height: '75%',
        value: `${rootLink}monitor_anim.svg`,
        alt: 'iMac Loader',
        caption: 'Mockups and the weather'
      }, {
        class: 'hide-small',
        type: 'iframe',
        height: '75%',
        value: '//codepen.io/inspironix/embed/MpBXYG/?height=265&theme-id=light&default-tab=result&embed-version=2',
      }, {
        type: 'image',
        height: '75%',
        value: `${rootLink}screen.svg`,
        alt: 'Responsive Web Mockup',
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};
