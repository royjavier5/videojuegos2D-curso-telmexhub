//D66
//indicar en una cadena los recursos: audios, imagenes, tmx, json
//callback para configurar los sprites
//var recursosMiMapa = "jugador.json, ejemplo_mapa.tmx"
var recursos = "jugador.json, mundo1_terminado.tmx, mosaicos_escenario_32x32.png, mosaicos_mario_enano_30x30.png";
Q.loadTMX(recursos, function(){
	//esta funcion se ejecuta hasta que los recursos estan listos o se hayan cargado
	//se compilan los Sprites Sheet del jugador
	Q.compileSheets("mosaicos_mario_enano_30x30.png", "jugador.json");
	Q.stageScene("mundo1");
});
