(()=>{

    interface XMEN {
        nombre: string,
        edad: number,
        poder?: string
    }

    const enviarMision = (xmen: XMEN)=> {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const regresarAlCuartel = (xmen: XMEN)=> {
        console.log(`Regresar  a ${xmen.nombre} al cuartel`);
    }

    const deadpool: XMEN={
        nombre: 'Daniel',
        edad: 26
    }

    enviarMision( deadpool );
    regresarAlCuartel( deadpool );

})();

 