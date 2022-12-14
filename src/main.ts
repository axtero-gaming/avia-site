import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'reflect-metadata';

import './libs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production === true) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((error) => {
    console.error(error);
  });
