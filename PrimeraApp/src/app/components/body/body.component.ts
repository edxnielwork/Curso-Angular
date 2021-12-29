import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
 
    mostrar = true;

    frase: any= {
        mensaje:"Un gran poder requiere un gran responsabilidad",
        autor: "Petter Parker Ben"
    }

    personajes: string [] = ['Deadpool','SpiderMan','Iron Man','Hulk'];
   
   

}