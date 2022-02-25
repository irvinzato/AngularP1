import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cities: string[] = ['Ciudad de Mexico', 'Estado de Mexico', 'Toluca'];
  selection!: string;

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
}
