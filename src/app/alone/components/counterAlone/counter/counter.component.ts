import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input()
  public counter: number = 10;

  increment(): void {
    this.counter++
  }
  decrement(): void {
    this.counter--
  }
}
