/* eslint-disable */
class Game {

        constructor(){
            this.preloadBar = null;
        }

        preload() {
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        
            this.preloadBar.anchor.setTo(0.5, 0.5); //relative position from its initial place

            this.time.advancedTiming = true;

            this.load.setPreloadSprite(this.preloadBar);
            
            //load all assets
            this.load.tilemap('map', './assets/level1.txt'); //It's a CSV in form of txt 
            this.load.image('tileset', './assets/tileSet.png');

            this.load.spritesheet('player', './assets/player.png', 24, 26,)
        
            this.load.spritesheet('buttons', './assets/buttons.png', 193, 71);

            this.load.image('drag', './assets/item.png');

            this.load.image('bird', './assets/bird.png');


        }

        create() {
            this.state.start('Level1');
        }

}

module.exports = Game;