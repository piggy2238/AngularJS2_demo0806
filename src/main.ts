import { bootstrap } from '@angular/platform-browser-dynamic';//套用版型
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
//啟動Angular