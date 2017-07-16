import { linkAttrs } from './index';
const rootLink = '../assets/web/';

export default {
  id: 6,
  cat: 'work',
  slug: 'web',
  intro: {
    title: 'More',
    desc: 'Assorted sites, primarily in hospitality',
    style: {},
  },
  rows: [{
      style: {
        background: `url(${rootLink}bg.svg) center/cover`,
        color: '#31b0bd',
      },
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h2>The<br> Recruitment Room</h2>
        <p>Recuitment Agency Site.</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at <a href="http://www.minerva-creative.com/" ${linkAttrs} >Minerva Creative</a></p>
        <h4>The Toolkit</h4>
        <p>Wordpress | Foundation</p>
        <h4>View <a href="http://therecruitmentroom.co.uk/" ${linkAttrs} >Live Site</a></h4>
        `,
      }, {
        type: 'image',
        class: 'content-overlap',
        value: `${rootLink}recruitment.jpg`,
      }]
    }, {
      style: {
        color: '#4c0f11',
        'background-color': '#ddab0f',
        background: `url(${rootLink}paper_tile_yellow.jpg)`,
      },
      content: [{
        type: 'image',
        class: 'content-overlap',
        value: `${rootLink}arcane.jpg`,
      }, {
        type: 'text',
        class: 'intro-text',
        value: `
        <h2>Arcane Bar</h2>
        <p>Cocktail Bar in Manchester</p>
        <h4>The Role</h4>
        <p>Senior Web Developer (freelance)</p>
        <h4>The Toolkit</h4>
        <p>Wordpress | <a href="http://bulma.io/" ${linkAttrs} >Bulma</a></p>
        <h4>View <a href="http://www.minerva-creative.com/" ${linkAttrs} >Live Site</a></h4>
        `,
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
        <h2>Villa Romana</h2>
        <p>Italian Restaurant in Liverpool.</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at <a href="http://www.minerva-creative.com/" ${linkAttrs} >Minerva Creative</a></p>
        <h4>The Toolkit</h4>
        <p>Wordpress | Bootstrap</p>
        <h4>View <a href="http://www.villaromanaliverpool.co.uk/" ${linkAttrs} >Live Site</a></h4>
        `,
      }, {
        type: 'image',
        class: 'content-overlap',
        value: `${rootLink}villa.jpg`,
      }]
    }, {
      style: {
        'background-color': '#eee',
        color: '#BB7726',
      },
      content: [{
        type: 'image',
        class: 'content-overlap',
        value: `${rootLink}cuzina.jpg`,
      }, {
        type: 'text',
        class: 'intro-text',
        value: `
        <h2>Cuzina</h2>
        <p>Greek Restaurant in Nottingham</p>
        <h4>The Role</h4>
        <p>Senior Web Developer at <a href="http://www.minerva-creative.com/" ${linkAttrs} >Minerva Creative</a></p>
        <h4>The Toolkit</h4>
        <p>Wordpress | Foundation</p>
        <h4>View <a href="http://cuzina.co.uk/" ${linkAttrs} >Live Site</a></h4>
        `,
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
