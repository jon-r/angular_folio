const fileRoot = '../assets/ico/';

export default {
  id: 3,
  cat: 'play',
  slug: 'ico',
  intro: {
    title: 'SVG Inconography',
    desc: 'Bespoke SVG | CSS3 Animations',
    icon: `${fileRoot}investments-isas.svg`,
    style: {
      'background-color': '#fff',
      'color': '#9ac437',
    },
  },
  rows: [{
    style: {
      // 'background-color': '#336699',
    },
    content: [{
      type: 'text',
      class: 'intro-text',
      value: `
      <h4>The Project</h4>
      <p>A variety of SVGs that I either animated, or hand coded.</p>
      <h4>The Tools</h4>
      <p>Illustrator | SVGOMG | Brackets</p>
      `,
    }, {
      type: 'image',
      class: 'overhang',
      value: 'some text',
    }]
  }, {
    content: [{
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
