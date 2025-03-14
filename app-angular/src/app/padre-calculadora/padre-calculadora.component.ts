import { Component } from '@angular/core';
import { HijoCalculadoraComponent } from './hijo-calculadora/hijo-calculadora.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre-calculadora',
  imports: [HijoCalculadoraComponent, FormsModule],
  templateUrl: './padre-calculadora.component.html',
  styleUrl: './padre-calculadora.component.css',
})
export class PadreCalculadoraComponent {
  numeroA: number = 0;
  numeroB: number = 0;
  resultado: number = 0;

  recibirSuma(sumaHijo: number) {
    this.resultado = sumaHijo;
  }
}
