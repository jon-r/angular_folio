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
    return setTimeout(bootsrapNagging, 100);
  }

  loaderFrame.classList.add('going');

  setTimeout(jr_bootstrap, 500);

  // loaderFrame.addEventListener('transitionend', jr_bootstrap);

  return true;
})();

function jr_bootstrap() {
    loaderFrame.innerHTML = '';
    platformBrowserDynamic().bootstrapModule(AppModule);

}
