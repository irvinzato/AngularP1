import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
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

}
