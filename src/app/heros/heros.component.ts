import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {  
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero:Hero;

  constructor(private heroService: HeroService) { }
  // constructor参数同时做了2件事:声明了一个私有heroService属性；把它标记为一个 HeroService
  
  getHeroes():void{
    // 调用服务的方法获取数据
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  ngOnInit() {
    //
    this.getHeroes();
  }

}
