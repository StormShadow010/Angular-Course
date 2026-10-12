import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  counterSignal = signal<number>(0);
  //Actualizar valor de la señal
  increaseBy(value: number): void {
    this.counterSignal.update((current) => current + value);
  }
  decreaseBy(value: number): void {
    this.counterSignal.update((current) => current - value);
  }
  //Resetear valor de la señal
  resetCounter(): void {
    this.counterSignal.set(0);
  }
}
