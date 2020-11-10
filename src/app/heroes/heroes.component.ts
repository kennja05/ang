import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //lines below are auto generated, but seem to create
  //issues with using the list iterator *ngFor
  constructor() { }

  ngOnInit(): void {
  }
   
}