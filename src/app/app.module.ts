import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { Hero2Component } from './hero2/hero2.component';
import { HeroDetailComponent } from './HeroDetail/HeroDetail.component';

@NgModule({
   declarations: [
      AppComponent,
      HerosComponent,
      Hero2Component,
      HeroDetailComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
