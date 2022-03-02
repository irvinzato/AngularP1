import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cities: string[] = ['Ciudad de Mexico', 'Estado de Mexico', 'Toluca'];
  selection!: string;
  criterio: string= '';

  name!: string;
  title: string = 'Usando interpolacion';

  addCity(city: string): void{
    this.cities.push(city);
  }

  cityClick(city: string): void{
    console.log('Evento del li',city);
    this.selection = city;
  }

  clearCity(): void {
    this.selection = null;
  }

  counterRender(): boolean {          //Metodo para saber cuando esta renderizando angular, con el cambio en el componente de cada hijo se evita renderizar cuando es inecesario
    console.log('Renderice en app');
    return true;
  }

}
