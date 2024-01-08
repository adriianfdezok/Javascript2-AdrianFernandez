function ProjectAnswer() {

    let useAnonPlayer = prompt('Por favor ingrese su nombre');
    
    if (useAnonPlayer === null) {
        useAnonPlayer = 'Jugador Anonimo';
    }
    
    console.log(useAnonPlayer + '  ' + 'Bienvenido Jugador');

    let question = 1
    let attemps = 0
    console.log('recuerda que solo tienes 2 intentos')
    console.log('---------------------------------')
     while (question) {
        switch (question) {
            case 1:
                let ansOne = prompt(useAnonPlayer +'  ' +'Recuerda para jugar debes precionar A B C D\nComo es la comparacion estricta de un valor tipo de JavaScript?\n A) == \n B) != \n C) = \n D) !== ');
            if (ansOne.toLocaleLowerCase()==='a') {
                console.log('Ganaste felicidades '+ '   ' +useAnonPlayer)
                question = 2 
            } else {
                console.log(useAnonPlayer + '     '+  ' su respuesta es la incorrecta :c')
                question = 1
                attemps++
                if (attemps >= 2) {
                    console.log(' ya no tiene mas intentos  ')
                question = 0 
                }

            }
            break;
            case 2:
                console.log('---------------------------------')

                let ansTwo = prompt('Pregunta Numero Dos: '+'\n'+useAnonPlayer+'\n  Recuerda que debe precionar A B C D  '+ '  \nEn que año nacio Javascripts\n A) 1998 \n B) 1994 \n C) 2024 \n D) 1995')
            if (ansTwo.toLocaleLowerCase()==='d') {
                    console.log('Ganaste felicidades '+ '   ' +useAnonPlayer)
                    question =0
            } else {
                console.log(useAnonPlayer + '     '+  ' su respuesta es la incorrecta :c')
                question = 2
                attemps++
                if (attemps >= 2) {
                    console.log(' ya no tiene mas intentos  ')
                question = 0 
                }
                 
            }
            break
             
            
                default:console.log('Fin')
                question = 0;
                break;
        }
    }
}
ProjectAnswer();
