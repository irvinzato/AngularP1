import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush     //Con esta estrategia angular no nos pintara de manera inecesaria la pantalla
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {

  //Decorador @Input(), el padre le manda los datos al hijo(en el html)
  @Input() color!: string;
  @Input() label!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {         //Se ve cuando hay un input o output
    console.log('Esto hay en changes: ', changes);
  }

  ngOnInit(): void {                //Se ejecuta siempre y es el primero si OnChanges no existe, sirve para hacer llamados a APIS
    console.log('onInit:');
  }
  
  ngOnDestroy(): void {             //Siempre que se destruye el componente
    console.log('onDestroy:');
  }

  /*METODO PARA CONTROLAR RENDERIZACION EN PANTALLA DE ANGULAR
  USADO SOLO PARA HACER PRUEBAS Y EVITAR QUE PINTE A CADA RATO
  SE APLICA CUANDO HAY INPUT O OUTPUTS QUE PUEDEN MODIFICAR LA VISTA*/
  counterRender(): boolean {          //Metodo para saber cuando esta renderizando angular, con el cambio en el componente de cada hijo se evita renderizar cuando es inecesario
    console.log('Renderice en app');
    return true;
  }

}
