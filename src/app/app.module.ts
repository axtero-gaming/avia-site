import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRouter } from './app.router';
import { FortawesomeModule } from './shared/fortawesome.module';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './components/app';

// Services
import { DOMHelper } from '@core/dom.helper';
import { MainPageComponent } from './components/main-page';
import { BannerComponent } from './components/banner';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouter,
    FortawesomeModule,
    SharedModule,
  ],
  declarations: [
    // Components
    AppComponent,
    MainPageComponent,
    BannerComponent,
  ],
  providers: [
    DOMHelper,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
