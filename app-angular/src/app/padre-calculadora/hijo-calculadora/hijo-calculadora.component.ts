import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-calculadora',
  imports: [],
  templateUrl: './hijo-calculadora.component.html',
  styleUrl: './hijo-calculadora.component.css',
})
export class HijoCalculadoraComponent {
  @Input() numeroA!: number;
  @Input() numeroB!: number;
  @Output() suma = new EventEmitter<number>();

  enviarSuma() {
    this.suma.emit(this.numeroA+this.numeroB);
  }
}
