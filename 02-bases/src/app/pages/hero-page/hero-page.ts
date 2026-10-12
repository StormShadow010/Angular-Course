import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-hero-page',
  styleUrl: './hero-page.css',
  templateUrl: './hero-page.html',
})
export class HeroPage {
  name = signal<string>('Iron man');
  age = signal<number>(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizeName = computed(() => this.name().toUpperCase());

  changeHero(): void {
    this.name.set('Spider-Man');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Iron man');
    this.age.set(45);
  }

  changeAge(value: number): void {
    this.age.set(value);
  }
}
