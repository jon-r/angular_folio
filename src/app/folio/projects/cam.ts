import { linkAttrs } from './index';
const rootLink = '../assets/cam/';


export default {
  id: 2,
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
      class: 'text-row push-right',
      content: [{
        type: 'text',
        value: `
        <h4 class="text-center" >View
          <a href="https://www.cammsgroup.com/" ${linkAttrs} >live site</a>
        </h4>
        `,
      }],
    }, {
      class: 'align-tops',
      style: {
        background: `url(${rootLink}bg-health.jpg) top/cover`,
        color: '#fff',
      },
      content: [{
        type: 'text',
        value: `
        <p>The task was a complete modernisation of the existing CAMMS site. The original site was
        overflowing with text-only content, and our role was to present this information to the
        customers in a site that was clearer for the user and easier to maintain by the team at CAMMS.</p>
        <p>The project was built under a short timescale, from concept to deployment in three months.</p>
        `,
      }, {
        type: 'image',
        class: 'content-overlap frame-2-1',
        value: `${rootLink}home.jpg`,
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
      style: {
        backgroundColor: '#2079bf',
      },
      class: 'row-gallery align-tops',
      content: [{
        class: 'frame-21-9',
        type: 'image',
        value: `${rootLink}about.jpg`,
      }, {
        class: 'frame-21-9',
        type: 'image',
        value: `${rootLink}solutions.jpg`,
      }, {
        class: 'frame-21-9',
        type: 'image',
        value: `${rootLink}budget.jpg`,
      }, {
        class: 'frame-21-9',
        type: 'image',
        value: `${rootLink}community.jpg`,
      }],
    }, {
      class: 'row-gallery',
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        class: 'frame-1-1',
        type: 'svg',
        value: `${rootLink}ico-chat.svg`,
      }, {
        class: 'frame-1-1',
        type: 'svg',
        value: `${rootLink}ico-finance.svg`,
      }, {
        class: 'frame-1-1',
        type: 'svg',
        value: `${rootLink}ico-screen.svg`,
      }, {
        class: 'flex-triple frame-1-3',
        type: 'image',
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
