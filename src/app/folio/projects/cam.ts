const fileRoot = '../assets/cam/';

export default {
  id: 4,
  cat: 'work',
  slug: 'cam',
  intro: {
    title: 'CAMMS',
    desc: 'SAAS Corporate Site &amp; Software Portfolio',
    icon: `${fileRoot}monitor-2.svg`,
    style: {
      'color': '#fff',
      'background-image': 'linear-gradient(to right, #055492 50%, #143B53)'
    },
  },
  rows: [{
    style: {
      'background-color': '#336699',
    },
    content: [{
      type: 'text',
      class: 'intro-text',
      value: `
      <h4>The Project</h4>
      <p>Online catalogue for used catering equipment.</p>
      <h4>The Tools</h4>
      <p>Wordpress | Foundation</p>
      <h4>The Role</h4>
      <ul>
        <li>Senior Web Developer</li>
        <li>Agency Work (Minerva Creative)</li>
      </ul>
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
