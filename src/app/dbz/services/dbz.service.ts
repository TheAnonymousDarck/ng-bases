import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
  ];

  addCharacter(character: Character): void {
    const newCaracter: Character = { id: uuid(), ...character };
    this.characters.push(character);
    // console.log('MainPage', character);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id != id);
    // console.log('MainPage', character);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index);
  // console.log('MainPage', character);
  // }

}
