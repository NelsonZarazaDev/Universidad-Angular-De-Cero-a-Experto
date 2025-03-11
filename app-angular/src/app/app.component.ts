import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { ListadoProductoComponent } from "./listado-producto/listado-producto.component";
import { HijoComponent } from "./hijo/hijo.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { TwoDataBindingComponent } from "./two-data-binding/two-data-binding.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { LocalReferenceComponent } from "./local-reference/local-reference.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, InterpolacionComponent, PadreComponent, ListadoProductoComponent, HijoComponent, EventBindingComponent, ReplicadorComponent, TwoDataBindingComponent, CalculadoraComponent, ComponenteIfComponent, LocalReferenceComponent, ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mundo desde angular';
}
