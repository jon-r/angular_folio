import blk from './blk';
import ico from './ico';
import kit from './kit';
import rhc from './rhc';
import cam from './cam';
import web from './web';

export default  [ blk, ico, kit, rhc, cam, web ];

/*

Priority
- rhc
- cam
- blk
- web (single page sites)
    RECROOM
    ARCANE
    CUZINA
    VILLA
- ico

Later
- kit
    SLIDER
    RWD tabbed pagination (arcane book)
- billieJS
- portfolioception (the site)
- weatherapp (talk to will for getting 1-2 art pieces)
- barnes?
- dunalastair remix?

CONTENT
TODO stripped back down for most things
- description + siteshot/codepen
- 1-2 key features
- gallery

data to dos
TODO: clean up old data assets
TODO: bonus Consider into setting all this as a file not included in the main build?

code to dos
TODO: RWD needs considering
TODO: about page basics
  - consider non-template elements, outside the frame?, mimic cv layout?
TODO: stagger in animation. non-template animation
  -wait till the bg is in place to trigger the rest of page.
  - maybe use angular animationBuilder for the page slider
TODO: something on the home page. interactive logo? (eg superdeper simple hover effect).
  - comes to mind is < > expand and the content changes through assorted... things. looks like an old flipping clock?

*/
