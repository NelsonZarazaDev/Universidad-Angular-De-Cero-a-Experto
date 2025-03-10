import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { ListadoProductoComponent } from "./listado-producto/listado-producto.component";
import { HijoComponent } from "./hijo/hijo.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, InterpolacionComponent, PadreComponent, ListadoProductoComponent, HijoComponent, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mundo desde angular';
}
