import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-HeroDetail',
  templateUrl: './HeroDetail.component.html',
  styleUrls: ['./HeroDetail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero :Hero; // 接收父组件传递的数据要定义Input装饰器
  constructor() { }

  ngOnInit() {
  }

}
