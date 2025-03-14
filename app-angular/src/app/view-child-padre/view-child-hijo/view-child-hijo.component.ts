import { Component } from '@angular/core';


@Component({
  selector: 'app-view-child-hijo',
  imports: [],
  templateUrl: './view-child-hijo.component.html',
  styleUrl: './view-child-hijo.component.css',
})
export class ViewChildHijoComponent {
  mensaje:string ='Mensaje desde el componente hijo'

  cambiarMensaje(nuevoMensaje:string){
    this.mensaje=nuevoMensaje;
  }
}
