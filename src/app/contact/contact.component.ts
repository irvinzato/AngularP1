import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface contactForm{
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  model = {       //Quiero enlazarlo con mi formularios
    name: "",
    checkAdult: false,
    department: "",
    comment: ""
  }
  constructor() { }

  ngOnInit() {
  }

  /* onSubmit(values: any): void {
    console.log("Form value ", values); //imprimo lo que manda el formulario "contactForm.value" es lo que le mandaba
  } */

  onSubmit(form: NgForm): void{     //Ahora no imprimo un valor del formulario, imprimo todo el formulario
    console.log("Impresion del formulario: ", form);
  }

}
