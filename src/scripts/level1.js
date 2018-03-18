/* eslint-disable */
class Game{

        constructor(){
            this.map = null;
            this.layer = null;
        }
  
        create() {
            this.stage.backgroundColor = '#3A5963'; 
            this.map = this.add.tilemap('map', 64, 64);
            this.map.addTilesetImage('tileset');
            this.layer = this.map.createLayer(0); 
            this.layer.resizeWorld();
        }

        update() {

        }
    
}

module.exports = Game;