import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent }   from './home-screen.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeScreenComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}