import { linkAttrs } from './index';
const rootLink = '../assets/cam/';


export default {
  id: 4,
  cat: 'work',
  slug: 'cam',
  intro: {
    title: 'CAMMS',
    desc: 'SAAS Corporate Site &amp; Software Portfolio',
    icon: `${rootLink}monitor-2.svg`,
    style: {
      color: '#fff',
      background: 'linear-gradient(to right, #055492 50%, #143B53)'
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [ {
        type: 'text',
        class: 'intro-text',
        value: `
        <h4>The Project</h4>
        <p>A corporate ‘brochure’ website for an international SAAS company.</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at [Minerva creative]</p>
        <h4>The Toolkit</h4>
        <p>WordPress | Foundation</p>
        `,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'text-center',
        value: `
        <h4>View
          <a href="https://www.cammsgroup.com/" ${linkAttrs} >live site</a>
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
        <p>The task was a complete modernisation of the existing CAMMS site. The original site was
        overflowing with text-only content, and our role was to present this information to the
        customers in a site that was clearer for the user and easier to maintain by the team at CAMMS.</p>
        <p>The project was built under a short timescale, from concept to deployment in three months.</p>
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
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <p>My role as lead developer was to oversee production of a number of highly modular and
        customisable templates. CAMMS offers a large number of software solutions, tools, and services
        at varying levels of detail. This information is presented on the site with only a few, highly
        flexible templates.</p>
        <p>I also animated all SVG icons on the site, and an interactive map showcasing the company’s
        international offices.</p>
        `,
      }],
    }, {
      class: 'row-gallery image-row',
      content: [{
        type: 'svg',
        value: `${rootLink}ico-chat.svg`,
      }, {
        type: 'svg',
        value: `${rootLink}ico-finance.svg`,
      }, {
        type: 'svg',
        value: `${rootLink}ico-screen.svg`,
      }, {
        type: 'image',
        class: 'flex-triple',
        value: `${rootLink}logo.png`,
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};
