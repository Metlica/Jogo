var fps = null
var canvas = null;
var ctx = null;

var posX = 0;
var posY = 0;
var velX = 500;
var velY = 500;
var sizeX = 80;
var sizeY = 40;
var gravityY = 900;
var paused = true;


function GameTick(elapsed) {
    fps.update(elapsed)
    InputManager.padUpdate();

    if (InputManager.padPressed & InputManager.PAD.CANCEL)
        paused = !paused;
    if (!paused) {

        posX += velX * elapsed;
        //posY = posX^2
        posY += velY * elapsed;
        // Collision detection and response
        if ((posX <= 0 && velX < 0) || (posX >= canvas.width - sizeX && velX > 0))
            velX = -velX;
        if ((posY <= 0 && velY < 0) || (posY >= canvas.height - sizeY && velY > 0))
            velY = -velY;

    } //    / --- Rendering

    // Clear the screen
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Render objects
    ctx.strokeRect(posX, posY, sizeX, sizeY);
    ctx.fillStyle = "red";
    ctx.fillText("Hello World!", posX + 10, posY + 25);

}

window.onload = function () {
    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");

    ctx.strokeRect(40, 40, 80, 40);
    ctx.fillText("Hello world!", 50, 65);
}

window.onload = function () {
    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");
    fps = new FPSMeter("fpsmeter", document.getElementById("fpscontainer"));
    GameLoopManager.run(GameTick);
};