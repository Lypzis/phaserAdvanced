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
            this.load.tilemap('map', './assets/level1.txt'); //try using a JSON //BIG ISSUE HERE
            this.load.image('tileset', './assets/tileSet.png');

            this.load.spritesheet('player', './assets/player.png', 24, 26,)
        
            this.load.spritesheet('buttons', './assets/buttons.png', 193, 71);
        }

        create() {
            this.state.start('Level1');
        }

}

module.exports = Game;
},{}],3:[function(require,module,exports){
/* eslint-disable */
class Game{

        constructor(){
            this.map = null;
            this.layer = null;
            this.player = null;
            this.controls = {};
            this.playerSpeed = 5;
            this.jumpTimer = 0;
            this.button = null;
        }
  
        create() {
            this.stage.backgroundColor = '#3A5963';
            
            this.physics.arcade.gravity.y = 1400;

            this.map = this.add.tilemap('map', 64, 64);
            this.map.addTilesetImage('tileset');
            this.layer = this.map.createLayer(0); 
            this.layer.resizeWorld();

            this.map.setCollisionBetween(0, 2);

            this.player = this.add.sprite(100, 560, 'player');

            this.player.anchor.setTo(0.5, 0.5);

            //set sprite to each animation of the player
            this.player.animations.add('idle', [0,1], 1, true);
            this.player.animations.add('jump', [2], 1, true);
            this.player.animations.add('run', [3,4,5,6,7,8], 7, true);

            this.physics.arcade.enable(this.player);
            this.camera.follow(this.player);
            this.player.body.colliderWorldBounds = true;
            
            this.controls = {
                right: this.input.keyboard.addKey(Phaser.Keyboard.D),
                left: this.input.keyboard.addKey(Phaser.Keyboard.A),
                up: this.input.keyboard.addKey(Phaser.Keyboard.W)
            }

            this.button = this.add.button(this.world.centerX - 95, this.world.centerY + 200, 'buttons', function(){
                console.log('pressed tha buttan');
            }, this, 2, 1, 0, 1); 

            //fix button to follow the camera
            this.button.fixedToCamera = true;



        }

        update() {

            this.physics.arcade.collide(this.player, this.layer);

            if (this.controls.up.isDown && (this.player.body.onFloor() || this.player.body.touching.down) && this.time.now > this.jumpTimer){
                this.player.body.velocity.y = -700;
                this.jumpTimer = this.time.now + 750;
                this.player.animations.play('jump');
            } 
            else if (this.controls.right.isDown){
                this.player.animations.play('run');
                this.player.scale.setTo(1,1); //set direction where the player will point to   
                this.player.body.velocity.x += this.playerSpeed; //increasing speed
            } 
            else if (this.controls.left.isDown){
                this.player.animations.play('run');
                this.player.scale.setTo(-1,1); //set direction where the player will point to   
                this.player.body.velocity.x -= this.playerSpeed;
            } 
            else {
                this.player.animations.play('idle');
                this.player.body.velocity.x = 0;
            }

        }
    
}

module.exports = Game;
},{}],4:[function(require,module,exports){
/* eslint-disable */
const game = new Phaser.Game(800, 600, Phaser.AUTO, ""); //"gameDiv"
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






},{"./Boot.js":1,"./Preloader.js":2,"./level1":3}]},{},[4]);
