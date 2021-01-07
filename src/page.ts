import Phaser from "phaser";
import * as Scene from "./scene";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                y: 0.3
            },
        }
    },
    scene: [Scene.Desktop,Scene.SceneUI,Scene.Scene0,Scene.Scene1,Scene.Scene2]
};

var game = new Phaser.Game(config);

let miminumber=42;

// window.ss=(a:string,b:string)=>{
//     console.log("转换中");
//     game.scene.switch(a,b);
    
// }
// window.st=(a:string)=>{
//     console.log("转换中");
//     game.scene.start(a);
    
// }