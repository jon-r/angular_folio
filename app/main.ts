import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { ButtonService } from './shared/button.service';

platformBrowserDynamic().bootstrapModule(AppModule, [ButtonService]);
