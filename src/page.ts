import Phaser from "phaser";
import * as Scene from "./scene";

let gameview=<HTMLCanvasElement>document.getElementById("gameview");
console.log(gameview);

var config= {
    canvas: gameview,
    canvasStyle:"width:100%",
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#fff0f0',
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
    scene: [Scene.Desktop,Scene.Scene6,Scene.Scene5,Scene.SceneUI,Scene.Scene0,Scene.Scene1,Scene.Scene3,Scene.Scene4,Scene.Scene2,Scene.Scene7,]
};

export var game = new Phaser.Game(config);

export let miminumber=12;
