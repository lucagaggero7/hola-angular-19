import { Component } from '@angular/core';
import { LibrosComponent } from '../libros/libros.component';

@Component({
  selector: 'app-usuario',
  imports: [LibrosComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  username = "Stefano";
  isLoggedIn = false;
  libroFav = ''

  getFavorite(nombreLibro : string)
  {
    this.libroFav = nombreLibro;
  }

  greet()
  {
    alert("Hola!")
  }
}
