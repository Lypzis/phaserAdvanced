(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
        }

        create() {
            this.state.start('Level1');
        }

}

module.exports = Game;
},{}],3:[function(require,module,exports){
/* eslint-disable */
class Game{
  
        create() {
            this.stage.backgroundColor = '#3A5963'; 
        }

        update() {

        }
    
}

module.exports = Game;
},{}],4:[function(require,module,exports){
/* eslint-disable */
const game = new Phaser.Game(800, 600, Phaser.CANVAS, ""); //"gameDiv"
const Boot = require('./Boot.js');
const Preloader = require('./Preloader.js');
//const MainMenu = require('./MainMenu.js');
const Level1 = require('./level1');

//REFAZER DESDE O COMEÇO???
const boot = new Boot();
const preloader = new Preloader();
//const mainMenu = new MainMenu();
const level1 = new Level1();

game.state.add('Boot', boot);
game.state.add('Preloader', preloader);
//game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', level1);

game.state.start('Boot');






},{"./Boot.js":1,"./Preloader.js":2,"./level1":3}]},{},[4]);
