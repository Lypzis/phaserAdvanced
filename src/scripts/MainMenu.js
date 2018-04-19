/* eslint-disable */
class MainMenu {

    constructor(){
        this.titlescreen = null;
    }

    create(){
        this.createButton(this, null, this.world.centerX, this.world.centerY + 32, 300, 100, () => {
            this.state.start('Level1');
        });

        this.createButton(this, null, this.world.centerX, this.world.centerY + 192, 300, 100, () => {
            console.log('about :D');
        })

        this.titlescreen = this.add.sprite(this.world.centerX, this.world.centerY - 192, 'titlescreen');
        this.titlescreen.anchor.setTo(0.5, 0.5);

    }

    update(){

    }

    createButton(game, string, x, y, width, height, callback){
        let button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);
    
        button1.anchor.setTo(0.5, 0.5);
        button1.width = width;
        button1.height = height;

        /*
        let txt = game.add.text(button1.x, button1.y, string, {
            font: "14px Arial", 
            fill: "#fff", 
            align: "center"
        });

        txt.anchor.setTo(0.5, 0.5);
        */
    }

}

module.exports = MainMenu;