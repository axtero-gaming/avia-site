import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToMakePageComponent } from './components/how-to-make-page';
import { MainPageComponent } from './components/main-page';
import { ModelPageComponent } from './components/model-page/model-page.component';
import { NotFoundPageComponent } from './components/not-found-page';

const routes: Routes = [
  {
    path: 'models',
    component: MainPageComponent,
  },
  {
    path: 'models/:slug',
    component: ModelPageComponent,
  },
  {
    path: 'how-to-make',
    component: HowToMakePageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'models',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRouter { }
