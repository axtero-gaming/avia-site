import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page';

const routes: Routes = [
  {
    path: 'models',
    component: MainPageComponent,
  },
  {
    path: 'model/:slug',
    component: MainPageComponent,
  },
  {
    path: 'how-to-make',
    component: MainPageComponent,
  },
  {
    path: 'achivements',
    component: MainPageComponent,
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
