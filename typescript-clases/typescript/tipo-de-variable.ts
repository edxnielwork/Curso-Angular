(()=>{

    const sumar = (a: number, b: number): number => a + b;
    const nombre = (): string => 'Hola Daniel';
    const obtenerSalario = ():Promise<string> => {
        return new Promise( (resolve, reject)=>{
            resolve('Daniel Valencia');
        });
    }

    obtenerSalario().then(a=>console.log(a.toUpperCase))

})();

 