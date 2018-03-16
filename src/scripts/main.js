/* eslint-disable */
const game = new Phaser.Game(800, 600, Phaser.CANVAS, ""); //"gameDiv"
const Boot = require('./Boot.js');
const Preloader = require('./Preloader.js');
const MainMenu = require('./MainMenu.js');
const Level1 = require('./level1');

////////////////////////////////////////////////////////////
// Boot
const Boot = new Boot(game);
Boot.init(1, true);
let preloadBar = Boot.preload('preloaderBar', './assets/preloader.png');
Boot.create('Preloader');

///////////////////////////////////////////////////////////
// Preloader
const Preloader = new Preloader(game);
Preloader.preload(preloadBar);



game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('MainMenu', MainMenu);
game.state.add('Level1', Level1);

game.state.start('Boot');
