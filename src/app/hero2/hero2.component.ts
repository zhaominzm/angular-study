import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero):void{
    this.selectedHero = hero;   
  }

}
