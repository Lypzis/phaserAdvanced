/* eslint-disable */
const game = new Phaser.Game(800, 600, Phaser.CANVAS, ""); //"gameDiv"
const Boot = require('./Boot.js');
const Preloader = require('./Preloader.js');
//const MainMenu = require('./MainMenu.js');
const Level1 = require('./level1');

const boot = new Boot();
const preloader = new Preloader();
//const mainMenu = new MainMenu();
const level1 = new Level1();

game.state.add('Boot', boot);
game.state.add('Preloader', preloader);
//game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', level1);

game.state.start('Boot');





