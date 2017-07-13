import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const loaderFrame = document.getElementById('js_preLoader');

(function bootsrapNagging() {

  if (!loaderFrame.dataset.ready) {
    return setTimeout(bootsrapNagging, 50);
  }

  loaderFrame.classList.add('going');

//  setTimeout(() => {
//    loaderFrame.innerHTML = '';
//  }, 500);

  // jr_bootstrap();
  setTimeout(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  }, 400);


//  loaderFrame.addEventListener('transitio', () => {
//    console.log(loaderFrame, 'animationend');
//
//  });

  return true;
})();

// function jr_bootstrap() {
//  platformBrowserDynamic().bootstrapModule(AppModule);
// }
