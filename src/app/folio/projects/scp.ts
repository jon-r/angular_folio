import { linkAttrs } from './blk';
const rootLink = '../assets/scp/';


export default {
  id: 7,
  cat: 'work',
  slug: 'scp',
  intro: {
    title: 'Smart City Prestige',
    desc: 'Car Hire and Chauffeuring Wordpress Multisite',
    icon: `${rootLink}scp-monitor.png`,
    style: {
      color: '#978563',
      background: 'linear-gradient(#4c2d19, #2f1e13)'
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [ {
        type: 'text',
        class: 'intro-text',
        value: `
        <h3 class="header-3">The Project</h3>
        <p>A three part website for a luxury car hire in London.</p>
        <h3 class="header-3">The Role</h3>
        <p>Senior Web Developer at <a href="http://www.minerva-creative.com/" ${linkAttrs} >Minerva Creative</a></p>
        <h3 class="header-3">The Toolkit</h3>
        <p>WordPress Multisites | Bootstrap</p>
        `,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        value: `
        <h3 class="text-center header-3" >View
          <a href="http://smartcityprestige.com/" ${linkAttrs} >live site</a>
        </h3>
        `,
      }],
    }, {
      // class: 'align-tops',
      style: {
        background: `url(${rootLink}bg-blog.jpg) top/cover`,
        color: '#fff',
      },
      content: [{
        class: 'stats-box',
        type: 'text',
        value: `
        <div >
          <div class="font-super" style="color:#978563">3 Sites</div>
          <span>One master theme, 3 child color schemes</span>
        </div>
        `,
      }, {
        type: 'image',
        class: 'content-overlap',
        height: '151%',
        value: `${rootLink}about-us.jpg`,
      }],
    }, {
      class: 'text-row row-collapse',
      content: [{
        type: 'text',
        value: `
        <p>The task was to set up three sites in one, targetting the three different client areas.
        We built up the site around one core theme, and three mini-themes that were mainly color
        adaptations of the core. Plugin-wise the site was kept to a minimum. The majority of the
        heavy lifting was by Advanced Custom Fields <a href="https://www.advancedcustomfields.com/" ${linkAttrs} >(ACF)</a>
        </p>
        <p>The slider throughout the site was self coded for purpose, taking an ACF gallery, and
        outputting a responsive wordpress gallery that lazily loads images (to the correct srcset)
        on demand. As with the demo below, the slider will resize on demand, or a preset cap can be
        set to keep images consistent regardless of what is uploaded</p>
        `,
      }],
    }, {
      content: [{
        type: 'iframe',
        class: 'hide-small',
        height: '100%',
        value: '//codepen.io/inspironix/embed/zdYRPN/?height=557&theme-id=light&default-tab=result&embed-version=2',
      }]
    }, {
      style: {
        color: '#2f1e13',
        backgroundColor: '#f5f3ef',
      },
      content: [{
        type: 'image',
        height: '114%',
        class: 'image-shadow content-overlap',
        value: `${rootLink}prestige.jpg`,
        alt: 'Smart City Prestige',
      }, {
        type: 'image',
        height: '110%',
        class: 'image-shadow content-overlap',
        value: `${rootLink}corporate.jpg`,
        alt: 'Smart City Corporate',
      }, {
        type: 'image',
        height: '153%',
        class: 'image-shadow content-overlap',
        value: `${rootLink}weddings.jpg`,
        alt: 'Smart City Weddings',
      }],
    }, {
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        type: 'image',
        height: '164%',
        value: `${rootLink}wedding-cars.jpg`,
        alt: 'Wedding Cars',
        class: 'image-shadow',
      }, {
        class: 'image-shadow',
        type: 'image',
        height: '146%',
        value: `${rootLink}rolls-royce.jpg`,
        alt: 'Rolls Royce',
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};

// todo - SIMPLIFY MAP ??
