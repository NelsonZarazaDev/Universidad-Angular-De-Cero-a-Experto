import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-decorador',
  imports: [],
  templateUrl: './hijo-decorador.component.html',
  styleUrl: './hijo-decorador.component.css'
})
export class HijoDecoradorComponent {
  // se usa !: para indicar que se va a inicializar desde el componente padre
  // !: Operador non-null assertion
  @Input() mensaje!:string;
}
