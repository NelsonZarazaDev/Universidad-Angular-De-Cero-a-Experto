import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-data-binding',
  imports: [FormsModule],
  templateUrl: './two-data-binding.component.html',
  styleUrl: './two-data-binding.component.css',
})
export class TwoDataBindingComponent {
  saludar ='Saludo inicial'
}
