(function(){
   
function getEdad(){
    return 100+100+300;
}

    const nombre = "Daniel";
    const apellido = "Valencia";
    const edad = 26;

    // const salida = nombre + apellido + edad
    //const salida = nombre + " " + apellido + " ( " +  edad + " )";

    const salida = `
    ${nombre}
    ${apellido}
    ${edad+getEdad()}`;
    console.log(salida);

    // Daniel Valencia (Edad:33)

    
})();

 