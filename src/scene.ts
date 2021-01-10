import { Vector } from "matter";
import { game } from "./page";
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


        this.add.text(0, 0, 'yuyi’蜜汁 Typescript-Phaser-Matter demo', { color: '#f00f0f', fontSize: "20px" });
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
        for (let i = 0; i <= 7; i++) {
            buttons[i].on('pointerdown', () => {
                this.game.scene.switch("desktop", "S" + i);
                buttons[i].clearTint();
            });
        }



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
        // this.load.image('flower', 'assets/flower.png');
        this.load.image('poly', 'assets/poly.png');
        this.load.image('flower', 'assets/flower.png');
        this.load.json('polyshape', 'assets/poly.json');

    }
    create() {
        this.matter.add.mouseSpring();
        this.matter.world.setBounds(0, 0, <number>game.config.width, <number>game.config.height);

        var shape = this.cache.json.get('polyshape');//里面包含挺多形状。

        var ground = this.matter.add.sprite(0, 0, 'poly', undefined, <Phaser.Types.Physics.Matter.MatterBodyConfig>{ shape: shape.poly });
        ground.setPosition(0 + ground.centerOfMass.x, 280 + ground.centerOfMass.y);  // position (0,280)

        let flower = this.add.image(300, 60, "flower");
        let flowerM = <Phaser.Physics.Matter.Image>this.matter.add.gameObject(flower, {
            shape: { type: "circle", radius: 40 }
        });
        flowerM.setBounce(0.9);

        flowerM.setOnCollide((a:any)=>{
            console.log(a);
        });

        // this.matter.world.on('collisionstart', function (event: any) {
        //     var pairs = event.pairs;
        //     for (var i = 0; i < pairs.length; i++) {
        //         var bodyA = pairs[i].bodyA;
        //         var bodyB = pairs[i].bodyB;
        //         console.log(bodyA.label);
        //         console.log(bodyB.label);
        //     }
        // });


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
        this.load.image('flower', 'assets/flower.png');
        this.load.image('poly', 'assets/poly.png');
        this.load.json('polyshape', 'assets/poly.json');

    }
    create() {
        this.matter.add.mouseSpring();
        this.matter.world.setBounds(0, 0, <number>game.config.width, <number>game.config.height);

        var shape = this.cache.json.get('polyshape');//里面包含挺多形状。

        var ground = this.matter.add.sprite(0, 0, 'poly', undefined, <Phaser.Types.Physics.Matter.MatterBodyConfig>{ shape: shape.poly });
        ground.setPosition(0 + ground.centerOfMass.x, 280 + ground.centerOfMass.y);  // position (0,280)
        ground.setFixedRotation();//禁止旋转

        //console.log(ground.body.parts);

        let flower = this.add.image(300, 60, "flower");
        let flowerM = <Phaser.Physics.Matter.Image>this.matter.add.gameObject(flower, {
            shape: { type: "circle", radius: 40 },
            label: "花"
        });
        flowerM.setFixedRotation();
        flowerM.setBounce(0.9);



        this.matter.world.on('collisionstart', function (event: any) {

            var pairs = event.pairs;
            for (var i = 0; i < pairs.length; i++) {
                var bodyA = pairs[i].bodyA;
                var bodyB = pairs[i].bodyB;
                console.log(bodyA.label);
                console.log(bodyB.label);
            }

        });


    }
    update() {
        // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}
let block: Phaser.Physics.Matter.Image;
export class Scene2 extends Phaser.Scene {
    constructor() {
        super("S2");
    }
    preload() {
        this.load.image('block', 'assets/brick.png');
    }
    create() {
        this.matter.add.mouseSpring();
        this.matter.world.setBounds();

        var Bodies = Phaser.Physics.Matter.Matter.Bodies;


        var circleA = Bodies.circle(50, 0, 24);
       // var circleB = Bodies.circle(150, 0, 24);

        var compoundBody = <any>Phaser.Physics.Matter.Matter.Body.create({
            parts: [circleA],
        });
        

        block = this.matter.add.image(0, 0, 'block');

        block.setPosition(100,100);

        block.setExistingBody(compoundBody);

        block.setFrictionAir(0).setBounce(0.9);
        block.originX=0.8;
        block.updateDisplayOrigin();
    

    }
    update() {
        block.setIgnoreGravity(true);
        
      
    }
    sayhi() {
        console.log("3");
    }
}

export class Scene3 extends Phaser.Scene {
    constructor() {
        super("S3");
    }
    preload() {
        this.load.image('block', 'assets/brick.png');
    }
    create() {
        this.matter.add.mouseSpring();
        this.matter.world.setBounds();

        var block = this.matter.add.image(150, 0, 'block');

     
        //-----------------------------------------------------
        const group = this.matter.world.nextGroup(true);

        const particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: false } };//内部的粒子
        const constraintOptions = { stiffness: 0.03 };

        // softBody: function (x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions)

        let cloth = this.matter.add.softBody(200, 140, 20, 15, 10, 10, true, 9, particleOptions, constraintOptions);

        let f = 0;
        // for (let i = 0; i < cloth.bodies.length; i++) {
        //     const body = cloth.bodies[i];

        //     if (i < 20) {
        //         body.isStatic = true;
        //     }
        // }
        //-----------------------------------------------------------

        console.log(cloth.bodies.length);



        for (let i = 0; i < cloth.bodies.length; i++) {
            this.matter.add.image(150, 0, 'block').setScale(0.8, 0.8).setExistingBody(cloth.bodies[i]);

        }


    }
    update() {
        // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}
export class Scene4 extends Phaser.Scene {
    constructor() {
        super("S4");
    }
    preload() {
        this.load.image('block', 'assets/brick.png');
    }
    create() {
        this.matter.add.mouseSpring();
        this.matter.world.setBounds();

        var block = this.matter.add.image(150, 0, 'block');

     
        //-----------------------------------------------------
        const group = this.matter.world.nextGroup(true);

        const particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: false } };//内部的粒子
        const constraintOptions = { stiffness: 1.06 };

        // softBody: function (x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions)

        let cloth = this.matter.add.softBody(200, 140, 20, 15, 10, 10, true, 9, particleOptions, constraintOptions);

        let f = 0;
        // for (let i = 0; i < cloth.bodies.length; i++) {
        //     const body = cloth.bodies[i];

        //     if (i < 20) {
        //         body.isStatic = true;
        //     }
        // }
        //-----------------------------------------------------------

        console.log(cloth.bodies.length);



        for (let i = 0; i < cloth.bodies.length; i++) {
            this.matter.add.image(150, 0, 'block').setScale(0.8, 0.8).setExistingBody(cloth.bodies[i]);

        }


    }
    update() {
        // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}

export class Scene5 extends Phaser.Scene {
    constructor() {
        super("S5");
    }
    preload() {
        this.load.image('brick', 'assets/brick.png');
    }
    create() {
        this.matter.world.setBounds();

        this.matter.add.mouseSpring();

        var group = this.matter.world.nextGroup(true);

        var bridge = this.matter.add.stack(160, 290, 15, 1, 0, 0, function (x: number, y: number) {
            return Phaser.Physics.Matter.Matter.Bodies.rectangle(x - 20, y, 53, 20, {
                collisionFilter: { group: group },
                chamfer: 5,//倒脚
                density: 0.005,//密度
                frictionAir: 0.05
            });
        });

        console.log(bridge);

        this.matter.add.chain(bridge, 0.3, 0, -0.3, 0, {//链条的秘密
            stiffness: 1,//刚度
            length: 0,
            render: {
                visible: false
            }
        });


        for (let i = 1; i < bridge.bodies.length - 1; i++) {

            this.matter.add.image(0, 0, "brick").setDisplaySize(70, 20).setExistingBody(bridge.bodies[i]);

        }

        var stack = this.matter.add.stack(250, 50, 6, 3, 0, 0, function (x: number, y: number) {
            return Phaser.Physics.Matter.Matter.Bodies.rectangle(x, y, 50, 50, Phaser.Math.Between(20, 40));
        });

        console.log(stack.bodies.length);

        for (let i = 0; i = stack.bodies.length-1; i++) {
            this.matter.add.image(0, 0, "brick").setDisplaySize(50, 50).setExistingBody(stack.bodies[i]);
        }

        console.log(stack.bodies.length);
        



        this.matter.add.rectangle(30, 490, 220, 380, {//左侧地面
            isStatic: true,
            chamfer: { radius: 20 }
        });
        this.matter.add.rectangle(770, 490, 220, 380, {//右侧地面
            isStatic: true,
            chamfer: { radius: 20 }
        });
        this.matter.add.worldConstraint(bridge.bodies[0], 2, 0.9, {//桥的开头约束。
            pointA: { x: 140, y: 300 },
            pointB: { x: -25, y: 0 }
        });
        this.matter.add.worldConstraint(bridge.bodies[bridge.bodies.length - 1], 2, 0.9, {//桥的尾部约束。
            pointA: { x: 660, y: 300 },
            pointB: { x: 25, y: 0 }
        });
    }
    update() {

    }

}

export class Scene6 extends Phaser.Scene {
    constructor() {
        super("S6");
    }
    preload() {
        this.load.image('block', 'assets/brick.png');
    }
    create() {
        this.matter.add.mouseSpring();
        this.matter.world.setBounds();
        var Bodies = Phaser.Physics.Matter.Matter.Bodies;


        var block = this.matter.add.image(150, 0, 'block');


        // block.setFrictionAir(0.001).setBounce(0.9);



        const group = this.matter.world.nextGroup(true);

        const particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: false } };
        const constraintOptions = { stiffness: 0.06 };

        // softBody: function (x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions)

        let cloth = this.matter.add.softBody(200, 140, 20, 12, 5, 5, false, 8, particleOptions, constraintOptions);

        let f = 0;
        for (let i = 0; i < cloth.bodies.length; i++) {
            const body = cloth.bodies[i];
            if (i < 10) {
                body.isStatic = true;
            }
            this.matter.add.image(150, 0, 'block').setScale(0.5, 0.5).setExistingBody(cloth.bodies[i]);
        }

    }
    update() {
        // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}

export class Scene7 extends Phaser.Scene {
    constructor() {
        super("S7");
    }
    preload() {
        this.load.image('block', 'assets/brick.png');
    }
    create() {
        this.matter.add.mouseSpring();
        this.matter.world.setBounds();
        var Bodies = Phaser.Physics.Matter.Matter.Bodies;


        var block = this.matter.add.image(50, 0, 'block');


        // block.setFrictionAir(0.001).setBounce(0.9);



        const group = this.matter.world.nextGroup(true);

        const particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: false } };
        const constraintOptions = { stiffness: 0.06 };

        // softBody: function (x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions)

        let cloth = this.matter.add.softBody(200, 140, 20, 12, 5, 5, false, 8, particleOptions, constraintOptions);

        let f = 0;
        for (let i = 0; i < cloth.bodies.length; i++) {
            const body = cloth.bodies[i];
            if (i < 10) {
                // body.isStatic = true;
            }
            this.matter.add.image(150, 0, 'block').setScale(0.5, 0.5).setExistingBody(cloth.bodies[i]);
        }

    }
    update() {
        // console.log("2");
    }
    sayhi() {
        console.log("3");
    }
}