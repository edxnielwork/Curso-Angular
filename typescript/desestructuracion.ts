(()=>{

    const avenger = {
        nombre: 'Ryne',
        clave:  'Deadpool',
        poder:  'Droga'
    }

    const extraer = ( {nombre, poder }: any)=>{
      //  const { nombre,  clave } = avenger;

        console.log(avenger.nombre);
        console.log(avenger.clave);
    }

  //  extraer(avenger);
    

  const avenger2: string[] = ['Thor','Deadpool', 'Spiderman'];
     
  const [Panda1, Panda2, Panda3] = avenger2;

   console.log(Panda1);
   console.log(Panda2);
   console.log(Panda3);

  const extraer2 = ([thor, deadpool, spiderman]: string[])=>{
    console.log( thor);
    console.log( deadpool);
    console.log( spiderman);

  }
  extraer2(avenger2);

})();

 