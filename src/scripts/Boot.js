/* eslint-disable */
class Boot {

    constructor(game){
        this.game = game;
    }

    init(maxPointers, disableVisibilityChange){
        this.game.input.maxPointers = maxPointers;
        this.game.stage.disableVisibilityChange = disableVisibilityChange;
    }

    preload(key, imagePath){
       let image;
       return image = this.game.load.image(key, imagePath);
    }

    create(preloaderKey){
        this.game.state.start(preloaderKey);
    }

}

module.exports = Boot;