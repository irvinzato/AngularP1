import { isGeneratedFile } from "@angular/compiler/src/aot/util";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'                  //nombre utilizado en el html donde lo queremos usar
})

export class FilterPipe implements PipeTransform{
    
    transform(values: string[], arg: string): string[] {
        let resultado: string[] = [];
        for(const value of values){                                     //con toLowerCase() comparo todo en minusculas
            if(value.toLowerCase().indexOf(arg.toLowerCase()) != -1){   //indexOf(arg) devuelve -1 si no encuentra el valor del argumento en el string
                resultado = [...resultado, value];   //resultado sera igual a lo que tenia resultado mas el value
            }
        }
        return resultado;
    }

}