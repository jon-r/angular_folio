import { linkAttrs } from './blk';
const rootLink = '../assets/web/';

export default {
  id: 6,
  cat: 'work',
  slug: 'web',
  intro: {
    title: 'Wordpress Development',
    desc: 'Assorted sites I worked on as primary developer',
    icon: `${rootLink}monitor-2.svg`,
    style: {
      background: '#23282d',
      color: '#ddd',
    },
  },
  rows: [{
      class: 'flex-reverse',
      style: {
        background: `url(${rootLink}bg.svg) right/cover`,
        color: '#31b0bd',
      },
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h2 class="header-2" >The<br> Recruitment Room</h2>
        <p>Recuitment Agency Site.</p>
        <h4 class="header-4" >The Role</h4>
        <p>Senior Web Developer at <a href="http://www.minerva-creative.com/" ${linkAttrs} >Minerva Creative</a></p>
        <h4 class="header-4" >The Toolkit</h4>
        <p>Wordpress | Foundation</p>
        <h4 class="header-4" >View <a href="http://therecruitmentroom.co.uk/" ${linkAttrs} >Live Site</a></h4>
        `,
      }, {
        type: 'image',
        height: '127%',
        class: 'image-shadow',
        value: `${rootLink}recruitment.jpg`,
      }]
    }, {
      style: {
        color: '#4c0f11',
        'background-color': '#ddab0f',
        background: `url(${rootLink}paper_tile_yellow.jpg)`,
      },
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h2 class="header-2" >Arcane Bar</h2>
        <p>Cocktail Bar in Manchester</p>
        <h4 class="header-4" >The Role</h4>
        <p>Senior Web Developer (freelance)</p>
        <h4 class="header-4" >The Toolkit</h4>
        <p>Wordpress | <a href="http://bulma.io/" ${linkAttrs} >Bulma</a></p>
        <h4 class="header-4" >View <a href="http://arcanebar.com/" ${linkAttrs} >Live Site</a></h4>
        `,
      }, {
        type: 'image',
        height: '127%',
        class: 'image-shadow',
        value: `${rootLink}arcane.jpg`,
      }]
    }, {
      class: 'flex-reverse',
      style: {
        'background-color': '#eee',
        color: '#BB7726',
      },
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h2 class="header-2" >Cuzina</h2>
        <p>Greek Restaurant in Nottingham</p>
        <h4 class="header-4" >The Role</h4>
        <p>Senior Web Developer at <a href="http://www.minerva-creative.com/" ${linkAttrs} >Minerva Creative</a></p>
        <h4 class="header-4" >The Toolkit</h4>
        <p>Wordpress | Foundation</p>
        <h4 class="header-4" >View <a href="http://cuzina.co.uk/" ${linkAttrs} >Live Site</a></h4>
        `,
      }, {
        type: 'image',
        height: '127%',
        class: 'image-shadow',
        value: `${rootLink}cuzina.jpg`,
      }]
    }, {
      style: {
        'background-color': '#CF5446',
        color: '#fdf3eb',
      },
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h2 class="header-2" >Villa Romana</h2>
        <p>Italian Restaurant in Liverpool.</p>
        <h4 class="header-4" >The Role</h4>
        <p>Senior Web Developer at <a href="http://www.minerva-creative.com/" ${linkAttrs} >Minerva Creative</a></p>
        <h4 class="header-4" >The Toolkit</h4>
        <p>Wordpress | Bootstrap</p>
        <h4 class="header-4" >View <a href="http://www.villaromanaliverpool.co.uk/" ${linkAttrs} >Live Site</a></h4>
        `,
      }, {
        type: 'image',
        height: '127%',
        class: 'image-shadow',
        value: `${rootLink}villa.jpg`,
      }]
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};

/*
    RECROOM
    ARCANE
    CUZINA
    VILLA
*/
