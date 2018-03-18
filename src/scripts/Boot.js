/* eslint-disable */
class Game{
  
      init() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
      }

      preload() {
        this.load.image('preloaderBar', './assets/preloader.png');
      }

      create() {
        this.state.start('Preloader');
      }
      
}

module.exports = Game;