import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-output',
  imports: [],
  templateUrl: './hijo-output.component.html',
  styleUrl: './hijo-output.component.css',
})
export class HijoOutputComponent {
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    //Emitir el evento con un mensaje(Se emite una cadena string)
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }
}
