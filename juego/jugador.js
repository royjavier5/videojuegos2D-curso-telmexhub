//D57
//Definimos la clase Jugador que se extiende la clase Sprite
//Sprite pertenece al core de Quintu
//nombre de la clase y objeto de configuración de la clase

//Como 1er parametro una cadena pasamos el nombre de la clase
//2do parametro un objeto json que configura al jugador
Q.Sprite.extend("Jugador",{
	init: function(p){
		this._super(p, {
			sheet: "jugador",
			frame: 1,
			jumpSpeed: -380,
			speed: 120
			
		});
		this.add("2d, platformerControls");
	}
});
