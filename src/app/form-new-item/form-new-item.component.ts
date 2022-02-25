import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush     //Con esta estrategia angular no nos pintara de manera inecesaria la pantalla
})
export class FormNewItemComponent implements OnInit {

  @Input() className: string = "primary";   //Se puede probar con las clases de boostrap para mayor facilidad
  @Input() label!: string;

  @Output() newItemEvent = new EventEmitter<string>();   //Este eventEmitter debe estar desde @angular/core
  
  constructor() { }

  ngOnInit() {
  }

  onAddNewItem(item: string){
    console.log(item);
    this.newItemEvent.emit(item);           //metodo de eventEmitter(.emit) para mandar lo que queramos, en este caso queremos que llegue al padre app-component
  }

  /*METODO PARA CONTROLAR RENDERIZACION EN PANTALLA DE ANGULAR
  USADO SOLO PARA HACER PRUEBAS Y EVITAR QUE PINTE A CADA RATO*/
  counterRender(): boolean {          //Metodo para saber cuando esta renderizando angular, con el cambio en el componente de cada hijo se evita renderizar cuando es inecesario
    console.log('Renderice en app');
    return true;
  }
}
