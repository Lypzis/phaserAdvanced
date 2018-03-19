/* eslint-disable */
class Game{

        constructor(){
            this.map = null;
            this.layer = null;
            this.player = null;
            this.controls = {};
            this.playerSpeed = 150;
            this.jumpTimer = 0;
        }
  
        create() {
            this.stage.backgroundColor = '#3A5963';
            
            this.physics.arcade.gravity.y = 1400;

            this.map = this.add.tilemap('map', 64, 64);
            this.map.addTilesetImage('tileset');
            this.layer = this.map.createLayer(0); 
            this.layer.resizeWorld();
        }

        update() {

        }
    
}

module.exports = Game;