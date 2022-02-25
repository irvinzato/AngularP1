import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush      //Con esta estrategia angular no nos pintara de manera inecesaria la pantalla
})
export class CitiesComponent implements OnInit {

  @Input() selection!: string;
  @Input() city!: string;

  @Output() eventoEnCity = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickLi(city: string): void {
    //hacer emmiter
    this.eventoEnCity.emit(city);
  }

  /*METODO PARA CONTROLAR RENDERIZACION EN PANTALLA DE ANGULAR
  USADO SOLO PARA HACER PRUEBAS Y EVITAR QUE PINTE A CADA RATO*/
  counterRender(): boolean {          //Metodo para saber cuando esta renderizando angular, con el cambio en el componente de cada hijo se evita renderizar cuando es inecesario
    console.log('Renderice en app');
    return true;
  }

}
