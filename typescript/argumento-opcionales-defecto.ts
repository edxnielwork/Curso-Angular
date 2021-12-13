(function(){
    
    function activar(
        quien: string, 
        momento?: string,
        objeto: string = 'The Academy'){
        
        if(momento){
            console.log(`${quien} activó ${objeto} en el ${momento}`)
        }else{
            console.log(`${quien} activó ${objeto}`)
        }
    }

    activar('Edxniel');
    
})();

 