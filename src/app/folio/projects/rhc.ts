import { linkAttrs } from './index';
const rootLink = '../assets/rhc/';

export default {
  id: 4,
  cat: 'work',
  slug: 'rhc',
  intro: {
    title: 'Red Hot Chilli',
    desc: 'Catering Equipment E-Catalogue',
    icon: `${rootLink}monitor-2.svg`,
    style: {
      background: 'linear-gradient(#af1d1d, #640202)',
      color: '#f2f2f2',
    },
  },
  rows: [
    {
      class: 'text-row',
      content: [ {
        type: 'text',
        class: 'intro-text',
        value: `
        <h4>The Project</h4>
        <p>Online E-catalogue to sell refurbished commercial catering equipment.</p>
        <h4>The Role</h4>
        <p>Full stack web design and development. In-house.</p>
        <h4>The Toolkit</h4>
        <ul>
          <li>WordPress (bespoke theme/plugin development)</li>
          <li>MySQL and Microsoft Access database</li>
          <li>Amazon AWS Hosting</li>
          <li>Illustrator SVG icons</li>
        </ul>
        <h4>View
          <a href="http://redhotchilli.catering/" ${linkAttrs} >live site</a>
        </h4>
        `,
      }]
    }, {
      style: {
        background: 'linear-gradient(to right, #20252d 25%, #5a6372 75%)',
      },
      content: [{
        type: 'image',
        class: 'frame-9-16 content-overlap',
        value: `${rootLink}first-hd.jpg`,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>The Website at Red Hot Chilli is an online catalogue, using a custom-made CMS system built
        around the WordPress database functions. The site’s frontend is a responsive, fully featured
        design with a very lightweight footprint.</p>
        `,
      }],
    }, {
      style: {
        backgroundColor: '#640202',
      },
      class: 'row-collapse',
      content: [{
        class: 'frame-2-1 image-shadow',
        type: 'image',
        value: `${rootLink}detail.jpg`,
      }, {
        class: 'frame-2-1 image-shadow',
        type: 'image',
        value: `${rootLink}style-guide.png`,
      }],
    }, {
      style: {
        backgroundColor: '#640202',
      },
      content: [{
        class: 'frame-ultra image-shadow',
        type: 'image',
        value: `${rootLink}home.jpg`,
      }, {
        class: 'frame-ultra image-shadow',
        type: 'image',
        value: `${rootLink}category.jpg`,
      }]
    },   {
      class: 'text-row align-tops',
      content: [{
        type: 'text',
        value: `
        <p>Product info was recorded on an existing Access database. I needed to modify some parts
        of the product table to include website specific information, such as “live on site”, but
        mostly the table remained untouched, and little redevelopment was needed on existing Access
        forms.</p>
        <p>The core function of the CMS is to convert the database into user friendly output. This
        included clear specs and descriptions. A large number of customers still prefer measurements
        in feet and inches, so I have made sure to include a simple mm to feet/inch converter.</p>
        `,
      }, {
        type: 'iframe',
        class: 'frame-3-2',
        value: '//codepen.io/inspironix/embed/preview/oXqezg/?height=600&theme-id=light&default-tab=result&embed-version=2',
      }],
    }, {
      class: 'row-collapse',
      content: [{
        type: 'svg',
        class: 'frame-1-4',
        value: `${rootLink}rhc-icons.svg`,
      }],
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>The custom backend consists of a number of separate PHP modules that combine to create the
        shop catalogue environment. While each component can work independently, the more complex
        functions rely on a library of core variables. For example, the navigation relies on unique
        page references, and the category pages rely on pre-assigned filters.</p>
        `,
      }],
    }, {
      class: 'row-collapse',
      style: {
        backgroundColor: '#640202',
      },
      content: [{
        type: 'image',
        class: 'frame-9-16 image-shadow',
        value: `${rootLink}modular.jpg`,
      }]
    }, {
      class: 'row-collapse',
      style: {
        backgroundColor: '#640202',
      },
      content: [{
        type: 'image',
        class: 'frame-9-16 image-shadow',
        value: `${rootLink}shop_flow.jpg`,
      }]
    }, {
      style: {
        backgroundColor: '#640202',
      },
      content: [{
        type: 'image',
        class: 'frame-9-16 image-shadow',
        value: `${rootLink}shop_compile.jpg`,
      }]
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]

};
