/* eslint-disable */
class Preloader {
    constructor(game){
        this.game = game;
        this.preloadBar = null;
    }

    preload(preloadBar = null){
        preloadBar = this.game.add.sprite()

    }
}

module.exports = Preloader;