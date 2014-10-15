

// create an new instance of a pixi stage
var interactive = true;

var stage = new PIXI.Stage(0x070c56, interactive);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(1400, 700);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/universe.jpg");
// create a new Sprite using the texture
var universe = new PIXI.Sprite(texture);

// move the first sprite to the center of the screen
universe.position.x = 0;
universe.position.y = 0;

//fit sprite to screen size
universe.width = 1400;


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/disco2.gif");
// create a new Sprite using the texture
var disco2 = new PIXI.Sprite(texture);

// move the first sprite to the center of the screen
disco2.position.x = 1100;
disco2.position.y = 700;

disco2.anchor.x = 0.5;
disco2.anchor.y = 0.5;


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/disco4.gif");
// create a new Sprite using the texture
var disco4 = new PIXI.Sprite(texture);

// move the first sprite to the center of the screen
disco4.position.x = 1100;
disco4.position.y = 700;

disco4.anchor.x = 0.5;
disco4.anchor.y = 0.5;


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/disco3.gif");
// create a new Sprite using the texture
var disco3 = new PIXI.Sprite(texture);

// move the first sprite to the center of the screen
disco3.position.x = 1100;
disco3.position.y = 700;

disco3.anchor.x = 0.5;
disco3.anchor.y = 0.5;


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/disco.gif");
// create a new Sprite using the texture
var disco = new PIXI.Sprite(texture);

// move the first sprite to the center of the screen
disco.position.x = 1100;
disco.position.y = 700;

disco.anchor.x = 0.5;
disco.anchor.y = 0.5;

// disco.hitArea = new PIXI.Rectangle(0, 0, 1000, 1000);


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/planet.png");
// create a new Sprite using the texture
var planet = new PIXI.Sprite(texture);

// center sprite 1's anchor point
planet.anchor.x = 2.0;
planet.anchor.y = 2.0;

// move the first sprite to desired position on the screen
planet.position.x = 1300;
planet.position.y = 1000;


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/aliensmall.png");
// create a new Sprite using the texture
var aliensmall = new PIXI.Sprite(texture);

// center sprite 2's anchor point
aliensmall.anchor.x = 1.75;
aliensmall.anchor.y = 1.25;

// move the second sprite to the center of the screen
aliensmall.position.x = 400;
aliensmall.position.y = 150;

aliensmall.height = 25;
aliensmall.width = 25;



// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/alienbig.png");
// create a new Sprite using the texture
var alienbig = new PIXI.Sprite(texture);

alienbig.setInteractive(true);

// center sprite 1's anchor point
alienbig.anchor.x = 0.5;
alienbig.anchor.y = 0.5;

// move the first sprite to the center of the screen
alienbig.position.x = 200;
alienbig.position.y = 150;

alienbig.height = 200;
alienbig.width = 150;



// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/alienblue.png");
// create a new Sprite using the texture
var alienblue = new PIXI.Sprite(texture);

// center sprite 1's anchor point
alienblue.anchor.x = 0.5;
alienblue.anchor.y = 0.5;

// move the first sprite to the center of the screen
alienblue.position.x = 300;
alienblue.position.y = 650;

alienblue.height = 180;
alienblue.width = 170;


stage.addChild(universe);
stage.addChild(disco2);
stage.addChild(disco4);
stage.addChild(disco3);
stage.addChild(disco);
stage.addChild(planet);
stage.addChild(aliensmall);
stage.addChild(alienbig);
stage.addChild(alienblue);
createCow(100,500);



function animate() {

    requestAnimFrame( animate );

    // just for fun, lets rotate our alien a little
    alienbig.rotation += 0.1;
    aliensmall.rotation += 0.07;
    planet.rotation += 0.010;
    disco.rotation -= 0.04;
    disco2.rotation -= 0.03;
    disco3.rotation -= 0.01;
    disco4.rotation -= 0.02;

    // cow.rotation += 0.02;

    alienblue.position.x += 10;
    alienblue.position.y -= 4;

    if (alienblue.position.x > 1400){
        alienblue.position.x = 300
        alienblue.position.y = 650
    };



    // render the stage
    renderer.render(stage);

}


function createCow(x, y)
    {
        // create our little cow friend..
        var texture = PIXI.Texture.fromImage("images/cow.png");
        var cow = new PIXI.Sprite(texture);

        // enable the cow to be interactive.. this will allow it to respond to mouse and touch events
        cow.interactive = true;
        // this button mode will mean the hand cursor appears when you rollover the cow with your mouse
        cow.buttonMode = true;

        // center the cows anchor point
        cow.anchor.x = 0.5;
        cow.anchor.y = 0.5;
        // make it a bit bigger, so its easier to touch
        cow.scale.x = cow.scale.y = 3;

        cow.width = 55.0;
        cow.height = 40.0;

        // use the mousedown and touchstart
        cow.mousedown = cow.touchstart = function(data)
        {
            // stop the default event...
            // data.originalEvent.preventDefault();

            // store a reference to the data
            // The reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data = data;
            this.alpha = 0.9;
            this.dragging = true;
        };

        // set the events for when the mouse is released or a touch is released
        cow.mouseup = cow.mouseupoutside = cow.touchend = cow.touchendoutside = function(data)
        {
            this.alpha = 1
            this.dragging = false;
            // set the interaction data to null
            this.data = null;
        };

        // set the callbacks for when the mouse or a touch moves
        cow.mousemove = cow.touchmove = function(data)
        {
            if(this.dragging)
            {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.position.x = newPosition.x;
                this.position.y = newPosition.y;
            }
        }

        // move the sprite to its designated position
        cow.position.x = x;
        cow.position.y = y;

        // add it to the stage
        stage.addChild(cow);
    }

