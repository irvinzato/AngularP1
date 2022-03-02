import { FilterPipe } from './pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CitiesComponent } from './cities/cities.component';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    CitiesComponent,
    FilterPipe,
    ContactComponent,
    ContactReactiveComponent,
         //Debemos declarar en este modulo el PIPE que realizamos
  ],
  imports: [
    BrowserModule,
    FormsModule,               //Para que funcine ngModel debemos importar esto
    ReactiveFormsModule,
         //Para que identifique las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
