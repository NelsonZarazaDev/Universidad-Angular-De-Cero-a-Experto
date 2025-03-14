import { Component, ViewChild } from '@angular/core';
import { ViewChildHijoComponent } from './view-child-hijo/view-child-hijo.component';

@Component({
  selector: 'app-view-child-padre',
  imports: [ViewChildHijoComponent],
  templateUrl: './view-child-padre.component.html',
  styleUrl: './view-child-padre.component.css',
})
export class ViewChildPadreComponent {
  @ViewChild(ViewChildHijoComponent) viewChildHijoComponent !: ViewChildHijoComponent;

  cambiarMensajeHijo() {
    this.viewChildHijoComponent.cambiarMensaje('Mensaje actualizado desde el componente padre')
  }
}
