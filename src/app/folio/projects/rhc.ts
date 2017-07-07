const fileRoot = '../assets/rhc/';

export default {
  id: 2,
  cat: 'work',
  slug: 'rhc',
  intro: {
    title: 'Red Hot Chilli',
    desc: 'Catering Equipment E-Catalogue',
    icon: `${fileRoot}monitor-2.svg`,
    style: {
      'background-image': 'linear-gradient(#af1d1d, #640202)',
      'color': '#f2f2f2',
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
      <p>MySQL | AWS</p>
      <h4>The Role</h4>
      <ul>
        <li>In-house work (initially a solo side project, progressing on to full scale design/development)</li>
        <li>Full Stack Design / Development</li>
        <li>Database build / Management</li>
        <li>Setup of Amazon S3 hosting + WAMP server</li>
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


// todo: better text styling? look at how bulma did it
