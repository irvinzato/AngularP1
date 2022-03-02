import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Para trabajar con formularios reactivos se debe hacer su importacion en app.module.ts

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!: FormGroup;    //propiedad utilizada en nuestro formulario 

  constructor(private readonly fb: FormBuilder) {   //Esto es para poder utilizar el FormBuilder

   }

  ngOnInit() {
    this.contactForm = this.initForm();      //igualo mi propiedad al resultado del metodo
    this.onPathValue();
    //this.onSetValue();
  }

  onPathValue(): void {     //  Permite escoger determinados valores
    this.contactForm.patchValue({name : 'Irving' });
  }

  onSetValue(): void {     // Este metodo nos obliga a setear TODAS las propiedades de nuestro formulario(Por eso nos arroja un error)
    this.contactForm.setValue({comment : 'Vamos a aprender mas' });
  }

  onSubmit(): void{
    console.log("Form ---", this.contactForm.value);
  }

  initForm(): FormGroup{ //Aqui declararemos las propiedades que tendra nuestro formulario, lo haremos con form builder
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],     //El primer valor sera el de por defecto, despues de la coma viene la parte de las Validaciones y debemos exportar Validators que tambien viene de AngularForms y con . vienen todos los metodos que podemos validar en el formulario
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]]
    })
  }

}
