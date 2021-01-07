export class SceneUI extends Phaser.Scene {
    constructor() {
        super({ key: 'UIScene', active: true });
    }
    preload() {
        this.load.image('ground2', 'assets/ground.png');
    }
    create() {
        let topui = this.add.image(0, 0, 'ground2').setOrigin(0, 0).setDisplaySize(500, 20);
        topui.setInteractive();
        topui.on('pointerover', function () {
            topui.setTint(0x7878ff);
        });
        topui.on('pointerout', function () {
            topui.clearTint();
        });
        topui.on('pointerdown', () => {
            for (const iterator of this.game.scene.getScenes()) {
                iterator.scene.key != "UIScene" && this.game.scene.switch(iterator.scene.key, "desktop");
            }
        });


        this.add.text(0, 0, '蜜汁 Typescript-Phaser-Matter demo', { color: '#f00f0f', fontSize: "20px" });
        this.scene.bringToTop();
    }
    update() {

    }
    sayhi() {
        console.log("3");
    }
}
export class Desktop extends Phaser.Scene {
    constructor() {
        super("desktop");
    }
    preload() {
        this.load.image('desktop', 'assets/desktop.png');
        this.load.image('brick', 'assets/brick.png');
        this.load.image('ground', 'assets/ground.png');
    }
    create() {
        // console.log(this.game.scene.getScenes(true));
        const desktop = this.add.image(400, 300, 'desktop');
        const buttons: Phaser.GameObjects.Image[] = [];
        for (let i = 0; i < 10; i++) {
            for (let o = 0; o < 10; o++) {
                let number = (10 * i + o).toString();
                buttons.push(this.createbutton(o * 50 + 80, i * 50 + 50, number));
            }
        }
        buttons[0].on('pointerdown', () => {
            this.game.scene.switch("desktop", "S0");
            buttons[0].clearTint();
        });

        buttons[1].on('pointerdown', () => {
            this.game.scene.switch("desktop", "S1");
            buttons[1].clearTint();
        });

        buttons[2].on('pointerdown', () => {
            this.game.scene.switch("desktop", "S2");
            buttons[2].clearTint();
        });

        this.scene.launch("UI");
    }
    update() {
    }
    createbutton(x: number, y: number, c: string) {
        let button = this.add.image(x, y, 'brick').setOrigin(0, 0).setScale(0.5, 0.5);
        this.add.text(x + 5, y + 5, c, { color: '#f0ff00', fontSize: "20px" });
        button.setInteractive();
        button.on('pointerover', function () {
            button.setTint(0x7878ff);
        });
        button.on('pointerout', function () {
            button.clearTint();
        });
        return button;
    }
}
export class Scene0 extends Phaser.Scene {
    constructor() {
        super("S0");
    }
    preload() {
    }
    create() {
        const text2 = this.add.text(400 - 20, 300 - 20, '徐初民', { color: '#f0ff00', fontSize: "40px" });
    }
    update() {
       // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}
export class Scene1 extends Phaser.Scene {
    constructor() {
        super("S1");
    }
    preload() {
    }
    create() {
        console.log("1");
        const text3 = this.add.text(400 - 20, 300 - 20, '徐初民', { color: '#f0ff00', fontSize: "40px" });
    }
    update() {
       // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}
export class Scene2 extends Phaser.Scene {
    constructor() {
        super("S2");
    }
    preload() {
    }
    create() {
        console.log("1");
        const text4 = this.add.text(400 - 20, 300 - 20, '徐初民', { color: '#f0ff00', fontSize: "40px" });
    }
    update() {
       // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}