/* eslint-disable */
class Game {

        constructor(){
            this.preloadBar = null;
        }

        preload() {
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        
            this.preloadBar.anchor.setTo(0.5, 0.5);

            this.time.advancedTiming = true;

            this.load.setPreloadSprite(this.preloadBar);

            //load all assets
            this.load.tilemap('map', './assets/level1.csv');
            this.load.image('tileset', './assets/tileSet.png');
        }

        create() {
            this.state.start('Level1');
        }

}

module.exports = Game;