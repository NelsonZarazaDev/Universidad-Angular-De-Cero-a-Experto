import { Component } from '@angular/core';
import { HijoDecoradorComponent } from "./hijo-decorador/hijo-decorador.component";

@Component({
  selector: 'app-padre-decorador',
  imports: [HijoDecoradorComponent],
  templateUrl: './padre-decorador.component.html',
  styleUrl: './padre-decorador.component.css'
})
export class PadreDecoradorComponent {
  mensajePadre:string = 'Mensaje desde el componente padre'
}
