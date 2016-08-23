import { Injectable } from '@angular/core';
import { Button } from './button'
import { BUTTONS } from './button-list'

@Injectable()
export class ButtonService {

  getButtons(): Promise<Button[]> {
    return Promise.resolve(BUTTONS);
  }

//
//  move(int,x,y) {
//    this.posX = x;
//    this.posY = y;
//  }
//
//  set(int,x,y) {
//    this.animate = false;
//    this.posX = x;
//    this.posY = y;
//    setTimeout(() => {this.animate = true});
//  }
}
//
//import { Injectable } from '@angular/core';
//import { HEROES } from './mock-heroes';
//import { Hero } from './hero';
//
//@Injectable()
//export class HeroService {
//  getHeroes() {
//    return Promise.resolve(HEROES);
//  }
//
//  getHero(id: number): Promise<Hero> {
//    return this.getHeroes()
//      .then(heroes => heroes.find(hero => hero.id === id));
//  }
//}
