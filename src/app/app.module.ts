import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { HomeScreenComponent }   from './home-screen.component';
import {NavigationComponent} from './navigation.component';
import { AppRoutingModule }     from './app-routing.module';

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
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

