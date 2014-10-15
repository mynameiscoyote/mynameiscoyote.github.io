

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x070c56);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(1400, 700);

var graphics = new PIXI.Graphics();

graphics.setInteractive(true);



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
var texture = PIXI.Texture.fromImage("images/disco.gif");
// create a new Sprite using the texture
var disco = new PIXI.Sprite(texture);

// move the first sprite to the center of the screen
disco.position.x = 1100;
disco.position.y = 700;

disco.anchor.x = 0.5;
disco.anchor.y = 0.5;

disco.hitArea = new PIXI.Rectangle(0, 0, 1000, 1000);

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


// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/alienbig.png");
// create a new Sprite using the texture
var alienbig = new PIXI.Sprite(texture);

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
stage.addChild(disco);
stage.addChild(planet);
stage.addChild(aliensmall);
stage.addChild(alienbig);
stage.addChild(alienblue);


function animate() {

    requestAnimFrame( animate );

    // just for fun, lets rotate our alien a little
    alienbig.rotation += 0.1;
    aliensmall.rotation += 0.7;
    planet.rotation += 0.010;
    disco.rotation -= 0.03

    alienblue.position.x += 10;
    alienblue.position.y -= 4;

    if (alienblue.position.x > 1400){
        alienblue.position.x = 300
        alienblue.position.y = 650
    };

    // disco.hitarea =

    disco.mouseover = function(mouseData)
    {
        console.log('mouseover!')
    };

    graphics.mousemove = function(mouseData) {
      console.log(mouseData);
    }



    // render the stage
    renderer.render(stage);
}

