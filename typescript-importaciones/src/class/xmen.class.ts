

export class Xmen{

    constructor(
        public nombre: string,
        public clave: string,
        public grupo: string
    ){}
    
    imprimir(){
        console.log(`${this.nombre} - ${this.clave} - ${this.grupo}`);
    }
}