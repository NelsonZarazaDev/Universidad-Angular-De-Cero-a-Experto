import { Component } from '@angular/core';
import { HijoOutputComponent } from "./hijo-output/hijo-output.component";

@Component({
  selector: 'app-padre-output',
  imports: [HijoOutputComponent],
  templateUrl: './padre-output.component.html',
  styleUrl: './padre-output.component.css'
})
export class PadreOutputComponent {
  mensaje:string='';
  // Mensaje emitido por el hijo
  recibirNotificacion(mensajeHijo:string){
    this.mensaje=mensajeHijo;
  }
}
