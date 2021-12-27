
function imprimirConsola( constructorClase: Function){
    console.log(constructorClase);
}


@imprimirConsola
export class Avengers{
    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number
    ){}

    mostrar(){
        console.log(`Hola como estas ${this.nombre} ${this.apellido} y tu edad es: ${this.edad}`);
    }
}