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
            this.drag = null;
            this.bird = null;
            this.shootTime = 0;
            this.nuts = null;
        }
  
        create() {
            this.stage.backgroundColor = '#3A5963';
            
            this.physics.arcade.gravity.y = 1400;

            this.map = this.add.tilemap('map', 64, 64);
            this.map.addTilesetImage('tileset');
            this.layer = this.map.createLayer(0); 
            this.layer.resizeWorld();

            this.map.setCollisionBetween(0, 2);

            this.map.setTileIndexCallback(5, this.resetPlayer, this);
            this.map.setTileIndexCallback(6, this.getCoin, this);

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
                up: this.input.keyboard.addKey(Phaser.Keyboard.W),
                shoot: this.input.keyboard.addKey(Phaser.Keyboard.UP)
            }

            this.button = this.add.button(this.world.centerX - ((this.world.centerX / 2) - 100), 
                                        this.world.centerY + 200, 'buttons', function(){
                console.log('pressed tha buttan');
            }, this, 2, 1, 0, 1); 

            //fix button to follow the camera
            this.button.fixedToCamera = true;

            //draggable object
            this.drag = this.add.sprite(this.player.x, this.player.y, 'drag');
            this.drag.anchor.setTo(0.5, 0.5);
            this.drag.inputEnabled = true; 
            this.drag.input.enableDrag(true); //enable the object to be draggable

            // generating an enemy
            this.enemyBird(0, this, this.player.x + 575, this.player.y - 250);
        
            // create "bullets"
            this.nuts = this.add.group();
            this.nuts.enableBody = true;
            this.nuts.physicsBodyType = Phaser.Physics.ARCADE;
            this.nuts.createMultiple(5, 'nut');
            this.nuts.setAll('anchor.x', 0.5);
            this.nuts.setAll('anchor.y', 0.5);
            this.nuts.setAll('scale.X', 0.5);
            this.nuts.setAll('scale.y', 0.5);
            this.nuts.setAll('outOfBoundsKill', true);
            this.nuts.setAll('checkWorldBounds', true);
        }

        update() {

            this.physics.arcade.collide(this.player, this.layer);
            this.physics.arcade.collide(this.player, this.bird, this.resetPlayer.bind(this.player)); //bind this player with the function call

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

            if (this.controls.shoot.isDown){
                this.shootNut();
            }

            if(this.checkOverlap(this.nuts, this.bird)){
                this.bird.kill();
            }

        }

        resetPlayer(player){
            player.reset(100, 560);
        }

        getCoin(){
            this.map.putTile(-1, this.layer.getTileX(this.player.x), this.layer.getTileY(this.player.y));
        }

        // Enemy generator
        enemyBird(index, game, x, y){
            game.bird = game.add.sprite(x, y, 'bird');
            game.bird.anchor.setTo(0.5, 0.5);
            game.bird.name = index.toString();
            game.physics.enable(game.bird, Phaser.Physics.ARCADE);
            
            let birdBody = game.bird.body;

            birdBody.immovable = true;
            birdBody.colliderWorldBounds = true;
            birdBody.allowGravity = false;

            game.birdTween = game.add.tween(game.bird).to({
                y: game.bird.y + 175
            }, 2000, 'Linear', true, 0, 100, true);
        }

        //check collisions between characters and elements
        checkOverlap(spriteA, spriteB){
            let boundsA = spriteA.getBounds();
            let boundsB = spriteB.getBounds();

            return Phaser.Rectangle.intersects(boundsA, boundsB);
        }

        shootNut(){
            if(this.time.now > this.shootTime){
                let nut = this.nuts.getFirstExists(false);
                if(nut){
                    nut.reset(this.player.x, this.player.y);
                    nut.body.velocity.y = -600;
                    this.shootTime = this.time.now + 900;
                }
            }
        }
    
}

module.exports = Game;