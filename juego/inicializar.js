//accedemos a las funcionalidades del engine
//Mediante una var accedemos a todas las funcionalidades del framework
var Q = Quintus();

//el juego se ejecutará en la etiqueta del canvas cuyo id es juego
//opcionalmente se puede dar como segundo parametro un objeto de configuración

//hay que decirle en que canvas se va a ejecutar el juego
//Como 2do parametro pasamos un objeto json para configurar el juego
Q.setup("juego", {
	maximize: true
});


//modulos a utilizar mediante una cadena que se van a ocupar(6)
Q.include("Sprites, Scenes, 2D, Input, Touch, TMX");


//activamos los controles del teclado y controles touch
Q.controls();
Q.touch();
/*
 *  O tambien puede ser:
 *	Q.controls().touch();
 */  

