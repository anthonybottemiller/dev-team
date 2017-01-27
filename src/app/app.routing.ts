import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeammateDetailComponent } from './teammate-detail/teammate-detail.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'teammates',
    component: TeamListComponent
  },
  {
    path: 'teammates/:id',
    component: TeammateDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
