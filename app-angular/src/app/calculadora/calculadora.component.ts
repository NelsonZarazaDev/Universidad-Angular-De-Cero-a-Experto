import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  operadorA = 5;
  operadorB = 3;
  suma:number=0;

  sumar() {
    this.suma = this.operadorA + this.operadorB;
  }
}
