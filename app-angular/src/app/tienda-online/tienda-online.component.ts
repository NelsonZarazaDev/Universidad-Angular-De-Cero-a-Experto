import { Component } from '@angular/core';
import { Producto } from './producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from '../listado-producto/producto/producto.component';

@Component({
  selector: 'app-tienda-online',
  imports: [FormsModule],
  templateUrl: './tienda-online.component.html',
  styleUrl: './tienda-online.component.css',
})
export class TiendaOnlineComponent {
  productos: Producto[] = [
    new Producto('Pantalon',130.0),
    new Producto('Camisa',80.0),
    new Producto('Playera',50.0),
  ];

  descripcionInput:string='';
  precioInput:number|null=null;

  agregarProducto(){
    if(this.descripcionInput.trim()==='' || this.precioInput===null || this.precioInput<=0){
      console.log('Debe ingresar una descripcion y un precio valido')
      return;
    }
    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto)
    // Limpiar campos del formualrio
    this.descripcionInput='';
    this.precioInput=null;
  }
}
