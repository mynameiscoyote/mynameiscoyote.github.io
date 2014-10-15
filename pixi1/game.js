

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x070c56);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(1200, 900);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/alien5.png");
// create a new Sprite using the texture
var alien5 = new PIXI.Sprite(texture);

// center sprite 1's anchor point
alien5.anchor.x = 0.5;
alien5.anchor.y = 0.5;

// move the first sprite to the center of the screen
alien5.position.x = 200;
alien5.position.y = 150;

// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/alien.png");
// create a new Sprite using the texture
var alien = new PIXI.Sprite(texture);

// center sprite 2's anchor point
alien.anchor.x = 1.75;
alien.anchor.y = 1.25;

// move the second sprite to the center of the screen
alien.position.x = 400;
alien.position.y = 150;

// create a texture from an image path
var texture = PIXI.Texture.fromImage("images/greenplanet.png");
// create a new Sprite using the texture
var planet = new PIXI.Sprite(texture);

// center sprite 1's anchor point
planet.anchor.x = 5.5;
planet.anchor..5;

// move the first sprite to the center of the screen
planet.position.x = 1500;
planet.position.y = 1000;


stage.addChild(alien5);
stage.addChild(alien);
stage.addChild(planet);

function animate() {

    requestAnimFrame( animate );

    // just for fun, lets rotate our alien a little
    alien5.rotation += 0.1;
    alien.rotation += 0.7;
    planet.rotation += 0.025;

    // render the stage
    renderer.render(stage);
}

