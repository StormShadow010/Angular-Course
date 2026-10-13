import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  imports: [NgClass],
  selector: 'app-dragonball',
  styleUrl: './dragonball.css',
  templateUrl: './dragonball.html',
})
export class Dragonball {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9001 },
    { id: 2, name: 'Vegeta', powerLevel: 8500 },
    { id: 3, name: 'Piccolo', powerLevel: 7000 },
  ]);

  powerClasses(powerLevel: number) {
    return {
      'text-red-600 font-bold': powerLevel >= 9000,
      'text-orange-500': powerLevel >= 8000 && powerLevel < 9000,
      'text-gray-500': powerLevel < 8000,
    };
  }
}
