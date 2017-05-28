import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent }   from './Home-screen/home-screen.component';
import {ProfilScreenComponent} from './profil-screen/profil-screen.component';
import {GameScreenComponent} from './game-screen/game-screen.component'; 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeScreenComponent },
  {path: 'profil', component: ProfilScreenComponent },
  {path: 'game', component:GameScreenComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}