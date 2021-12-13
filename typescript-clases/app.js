"use strict";
(() => {
    // CLASE EN TYPESCRIPT
    // Nombre de la Clase siempre la primera letra maysucula
    /*   class Avenger {
           
           nombre: string;
           equipo: string;
           nombreReal?: string;
           
           logro: number;
           tieneTiempo: boolean;
   
           constructor(nombre: string, equipo: string){
               this.nombre = nombre;
               this.equipo = equipo
           }
           
       }
   */
    class Avenger {
        /*
         nombre: string;
         equipo: string;
         nombreReal?: string;
         
         logro: number;
         tieneTiempo: boolean;
         */
        constructor(nombre, equipo, nombreReal, puedePelear = false, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const edxniel = new Avenger('Antman', 'Capitan');
    console.log(edxniel);
})();
