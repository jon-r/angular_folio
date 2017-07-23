import { linkAttrs } from './blk';
const rootLink = '../assets/rhc/';

export default {
  id: 4,
  cat: 'work',
  slug: 'rhc',
  intro: {
    title: 'Red Hot Chilli',
    desc: 'Catering Equipment E-Catalogue',
    icon: `${rootLink}rhc-monitor.png`,
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
        <h3 class="header-3">The Project</h3>
        <p>Online E-catalogue to sell refurbished commercial catering equipment.</p>
        <h3 class="header-3">The Role</h3>
        <p>Full stack web design and development. In-house.</p>
        <h3 class="header-3">The Toolkit</h3>
        <ul>
          <li>WordPress (bespoke theme/plugin development)</li>
          <li>MySQL and Microsoft Access database</li>
          <li>Amazon AWS Hosting</li>
          <li>Illustrator SVG icons</li>
        </ul>
        <h3 class="header-3">
          View <a href="http://redhotchilli.catering/" ${linkAttrs} >live site</a>
        </h3>
        `,
      }]
    }, {
      style: {
        background: 'linear-gradient(to right, #20252d 25%, #5a6372 75%)',
      },
      content: [{
        type: 'image',
        height: '56.28%',
        class: 'content-overlap',
        value: `${rootLink}first-hd.jpg`,
        alt: 'Red Hot Chilli',
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
      }, {
        type: 'text',
        class: 'stats-box',
        value: `
        <div class="font-super" style="color:#640202">1000+</div>
        <span>Unique Products listed per year.</span>
        `,
      }],
    }, {
      style: {
        backgroundColor: '#640202',
      },
      class: 'row-collapse',
      content: [{
        class: 'image-shadow',
        height: '187%',
        type: 'image',
        value: `${rootLink}detail.jpg`,
        alt: 'Products Page',
      }, {
        class: 'image-shadow',
        type: 'image',
        height: '189%',
        value: `${rootLink}style-guide.png`,
        alt: 'Style Guide',
      }],
    }, {
      style: {
        backgroundColor: '#640202',
      },
      content: [{
        class: 'image-shadow',
        type: 'image',
        height: '263%',
        value: `${rootLink}home.jpg`,
        alt: 'Home Page',
      }, {
        class: 'image-shadow',
        type: 'image',
        height: '247%',
        value: `${rootLink}category.jpg`,
        alt: 'Procut Categories',
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
        class: 'hide-small',
        height: '150%',
        value: '//codepen.io/inspironix/embed/oXqezg/?height=600&theme-id=light&default-tab=result&embed-version=2',
      }],
    }, {
      class: 'row-collapse',
      content: [{
        type: 'image',
        height: '18%',
        value: `${rootLink}rhc-icons.svg`,
        alt: 'Shop Icons',
        caption: 'Shop Icons',
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
        color: '#f2f2f2'
      },
      content: [{
        type: 'image',
        class: 'image-shadow',
        height: '56.28%',
        value: `${rootLink}modular.jpg`,
        alt: 'Modular Plugin Layout',
        caption: 'Although build on a Wordpress site, the CMS is an entirely bespoke toolkit.'
      }]
    }, {
      class: 'row-collapse',
      style: {
        backgroundColor: '#640202',
      },
      content: [{
        type: 'image',
        class: 'image-shadow',
        height: '56.28%',
        value: `${rootLink}shop_flow.jpg`,
        alt: 'Function Process',
      }]
    }, {
      style: {
        backgroundColor: '#640202',
      },
      content: [{
        type: 'image',
        class: 'image-shadow',
        height: '56.28%',
        value: `${rootLink}shop_compile.jpg`,
        alt: 'Compiling Content',
      }]
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]

};
