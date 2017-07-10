import { linkAttrs } from './index';
const rootLink = '../assets/rhc/';

export default {
  id: 2,
  cat: 'work',
  slug: 'rhc',
  intro: {
    title: 'Red Hot Chilli',
    desc: 'Catering Equipment E-Catalogue',
    icon: `${rootLink}monitor-2.svg`,
    style: {
      'background-image': 'linear-gradient(#af1d1d, #640202)',
      'color': '#f2f2f2',
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [{
        type: 'image',
        value: `${rootLink}logo.png`,
      }, {
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
        `,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'text-center',
        value: `
        <h4>View
          <a class="nav-link" href="http://redhotchilli.catering/" ${linkAttrs} >live site</a>
        </h4>
        `,
      }],
    }, {
      class: 'image-row',
      content: [{
        type: 'image',
        value: `${rootLink}logo.png`,
      }],
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>The Website at Red Hot Chilli is an online catalogue, using a custom-made CMS system built
        around the WordPress database functions. The site’s frontend is a responsive, fully featured
        design with a very lightweight footprint.</p>
        <p>The custom backend consists of a number of separate PHP modules that combine to create the
         shop catalogue environment. While each component can work independently, the more complex
         functions rely on a library of core variables. For example, the navigation relies on unique
         page references, and the category pages rely on pre-assigned filters.</p>
        `,
      }],
    }, {
      class: 'row-gallery image-row',
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
    }, {
      class: 'text-row',
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
      }],
    }, {
      class: 'row-gallery image-row',
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


// todo: better text styling? look at how bulma did it
