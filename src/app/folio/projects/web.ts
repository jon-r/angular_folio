const fileRoot = '../assets/web/';

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
      'background-color': '#31b0bd',
      background: `url(${fileRoot}bg.svg) center/cover`,
      color: '#fff',
    },
    content: [{
      type: 'image',
      class: 'overhang',
      value: 'some text',
    }, {
      type: 'text',
      class: 'intro-text',
      value: `
      <h3>The Recruitment Room</h3>
      <p>SLOPY BACKGROUND. (probably easiest to use svg)</p>
      <h5>Tools</h5>
      <p>Wordpress | Foundation</p>
      `,
    }]
  }, {
    style: {
      color: '#4c0f11',
      'background-color': '#ddab0f',
      background: `url(${fileRoot}paper_tile_yellow.jpg)`,
    },
    content: [{
      type: 'text',
      class: 'intro-text',
      value: `
      <h3>Arcane Bar</h3>
      <p>USE TEXTURE ON BG</p>
      <h5>Tools</h5>
      <p>Wordpress | Bulma CSS</p>
      `,
    }, {
      type: 'image',
      class: 'overhang',
      value: 'some text',
    }]
  }, {
    style: {
      'background-color': '#CF5446',
      color: '#fff',
    },
    content: [{
      type: 'image',
      class: 'overhang',
      value: 'some text',
    }, {
      type: 'text',
      class: 'intro-text',
      value: `
      <h3>Villa Romana</h3>
      <p>???</p>
      <h5>Tools</h5>
      <p>Wordpress | Bootstrap</p>
      `,
    }]
  }, {
    style: {
      'background-color': '#eee',
      color: '#BB7726',
    },
    content: [{
      type: 'text',
      class: 'intro-text',
      value: `
      <h3>Cuzina</h3>
      <p>pattern? or just logo?</p>
      <h5>Tools</h5>
      <p>Wordpress | Foundation</p>
      `,
    }, {
      type: 'image',
      class: 'overhang',
      value: 'some text',
    }]
  }]
};

/*
    RECROOM
    ARCANE
    CUZINA
    VILLA
*/
