import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page';
import { ModelPageComponent } from './components/model-page/model-page.component';

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
    component: MainPageComponent,
  },
  {
    path: 'achivements',
    component: MainPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'models',
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
