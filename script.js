/*creo una variable "mostrar"*/
let mostrar = document.querySelector('.mostrar');



/* "querySelector" Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.*/


/*creamos una variable incrementador y lo iniciamos con el valor 0*/
let increment = 0;

/*addEventListener()Registra y detecta un evento a un objeto en específico, en este caso el evento es click*/
/*"listener" El objeto que recibe una notificación cuando ocurre un evento del tipo especificado*/
/*tomamos a "e" como parametro*/

document.addEventListener("click", e =>{
    //aumentamos y disminuimos el valor

    //evaluamos a que bton le dimos click
    if(e.target.matches('.godown')){

        //si el click corresponde al boton "goup" usamos la variable increment para el incremento
        increment --;
        //probamos si funciona en la consola:
        //console.log(increment);
        //luego accedemos a la variable mostrar a traves de nuestro html y le pasamos la variable increment:

        mostrar.innerHTML = increment;

        //cambiamos el color
        mostrar.style.color = 'red';
        


    }
    else if (e.target.matches('.goup')){
        increment ++;
        mostrar.innerHTML = increment;                
        mostrar.style.color = 'green';
        
    }
    else if(e.target.matches('.reset')) {
        increment = 0;
        mostrar.innerHTML = increment;
        mostrar.style.color = 'white';
        
    }
})



