(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/* eslint-disable */
class Boot {

}

module.exports = Boot;
},{}],2:[function(require,module,exports){
/* eslint-disable */
class MainMenu {

}

module.exports = MainMenu;
},{}],3:[function(require,module,exports){
/* eslint-disable */
class Preloader {

}

module.exports = Preloader;
},{}],4:[function(require,module,exports){
/* eslint-disable */
class level1{

}

module.exports = level1;
},{}],5:[function(require,module,exports){
/* eslint-disable */
const game = new Phaser.Game(800, 600, Phaser.CANVAS, ""); //"gameDiv"
const Boot = require('./Boot.js');
const Preloader = require('./Preloader.js');
const MainMenu = require('./MainMenu.js');
const Level1 = require('./level1');


game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', Game.Level1);

game.state.start('Boot');
},{"./Boot.js":1,"./MainMenu.js":2,"./Preloader.js":3,"./level1":4}]},{},[5]);
