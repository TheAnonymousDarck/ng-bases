import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  set setName(v: string) {
    this.name = v;
  }

  set setAge(v: number) {
    this.age = v;
  }


  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroe(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 35
  }
}


