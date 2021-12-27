"use strict";
(() => {
    // Uso de Let y Const
    let nombre = 'Ricardo Tapia';
    let edad = 23;
    let PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    console.log(`Nombres: ${PERSONAJE.nombre} y edad ${PERSONAJE.edad}`);
    var DC = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    console.log(`Este son  los nombres: ${DC.nombre}`);
    console.log(`Artesa son: ${DC.artesMarciales}`);
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => a + b;
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, poder, arma) {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + poder;
            console.log(mensaje);
        }
    }
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
})();
