import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { HomeScreenComponent }   from './home-screen/home-screen.component';
import {NavigationComponent} from './core/navigation/navigation.component';
import { AppRoutingModule }     from './app-routing.module';
import { ProfilScreenComponent } from './profil-screen/profil-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MypPipe } from './chess-board/myp.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavigationComponent,
    ProfilScreenComponent,
    GameScreenComponent,
    ChessBoardComponent,
    MypPipe,
     
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

