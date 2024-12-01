import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-libros',
  imports: [],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(nombreLibro : string)
  {
    this.addFavoriteEvent.emit(nombreLibro);
  }

  libros = [
    {
      id: 1,
      nombre: 'Harry Potter'
    }
    ,
    {
      id: 2,
      nombre: 'El Señor de los Anillos'
    }
    ,
    {
      id: 3,
      nombre: 'Crepusculo'
    }
  ]
}
