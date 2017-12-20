import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const loaderFrame = document.getElementById('ldFr');

(function bootstrapNagging() {

  if (!loaderFrame.dataset.ready) {
    return setTimeout(bootstrapNagging, 50);
  }

  loaderFrame.classList.add('going');

  return setTimeout(() => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  }, 400);
})();
