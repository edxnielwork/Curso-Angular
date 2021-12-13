(()=>{

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

        constructor( public nombre: string,
            public equipo: string,
            public nombreReal?: string,
            public puedePelear: boolean = false,
            public peleasGanadas: number=0,
             ){
     
        }
        
    }
    const edxniel = new Avenger('Antman','Capitan');

    console.log(edxniel);

})();

 