(function(){

// FUNCION A UNA VARIABLE

    const miFuncion = function(a: string){
        return a.toUpperCase();
    }

    const miFuncionFlecha = ( a: string ) => a.toUpperCase();

    console.log(miFuncion('normal'));
    console.log(miFuncionFlecha('flecha'));

    const sumarN = function(a:number, b:number){
        return a+b;
    }

    const sumarNF = (a:number, b:number) => a+b;
    console.log(sumarN(8,9))
    console.log(sumarNF(8,10))


    const edxniel = {
        nombre: 'EDXNIEL',
        smash() {

            setTimeout( () =>{
                console.log(`${this.nombre} sew!!`);
            },1000);
           
        
        } 
    }

    edxniel.smash();



 /*
 Es lo mismo que esta en el siguiente apartatado

    const miFuncionF = (a: string) => {
        return a;
    }

Solo simplifica el return
 const miFuncionF = (a: string) => a;
*/



        //////// FUNCION TRADICIONAL  
    /*
        function(a:string){
            return a;
        }
    */
})();

 