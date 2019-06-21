import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable({ // 接收该服务的元数据对象，like@Componnet
  providedIn: 'root' // 用根注册器将服务注册为提供商
})
export class HeroService {
  getHeroes():Hero[]{ //返回数据
    return HEROES;
  }
  constructor() { }
}
