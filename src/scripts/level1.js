/* eslint-disable */
class Game{

        constructor(){
            this.map = null;
            this.layer = null;
            this.player = null;
            this.controls = {};
            this.playerSpeed = 5;
            this.jumpTimer = 0;
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


        }

        update() {

            this.physics.arcade.collide(this.player, this.layer);

            if (this.controls.up.isDown && (this.player.body.onFloor() || this.player.body.touching.down) && this.time.now > this.jumpTimer){
                console.log('Hi there!');
                this.player.animations.play('jump');
                this.player.body.velocity.y = -700;
                this.jumpTimer = this.time.now + 750;
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