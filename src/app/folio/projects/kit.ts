// OUT OF DATE

export default {
  id: 5,
  cat: 'play',
  slug: 'kit',
  intro: {
    title: 'Wordpress Toolkit',
    desc: 'Javascript | PHP',
    style: {},
  },
  rows: [{
    style: {
      'background-color': '#336699',
    },
    content: [{
      type: 'text',
      class: 'intro-text',
      value: `
      <h5>About</h5>
      <p>Learning Vue.JS by building BlackJack, the cardgame.</p>
      <h5>Tools</h5>
      <p>Vue.JS | ES6 | Webpack</p>
      `,
    }, {
      type: 'image',
      class: 'overhang',
      value: 'some text',
    }]
  }, {
    content: [{
      type: 'text',
      value: 'some text',
    }, {
      type: 'text|image|codepen',
      value: 'some text',
    }, {
      type: 'text|image|codepen',
      value: 'some text',
    }, {
      type: 'text|image|codepen',
      value: 'some text',
    }]
  }]
};
