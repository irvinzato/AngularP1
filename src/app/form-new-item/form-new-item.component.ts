import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css']
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

}
