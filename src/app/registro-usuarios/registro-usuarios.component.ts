import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Agrega esta importación


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {
  

  onSubmit() {
    // Aquí puedes agregar la lógica para procesar el formulario, como enviar los datos al servidor.
  }
}

