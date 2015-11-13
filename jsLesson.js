var fps = null
var canvas = null;
var ctx = null;

var posX = 0;
var posY = 0;
var velX = 100;
var velY = 100;
var sizeX = 80;
var sizeY = 40;
var gravityY = 630;
var paused = true;
var looser = false;

var pX = 750;
var pY = 380;
var pV = 100;


function GameTick(elapsed) {
    fps.update(elapsed)
    InputManager.padUpdate();

    if (InputManager.padPressed & InputManager.PAD.CANCEL)
        paused = !paused;

    if (!paused) {
        if ((InputManager.padPressed & InputManager.PAD.OK)) {
            AudioManager.play("jump");
            velY = -1000;

        }

        // Movement physics
        posX += velX * elapsed;
        posY += (velY + 0.5 * gravityY * elapsed) * elapsed;
        velY += gravityY * elapsed;
        // Collision detection and response
        var bouncedX = false,
            bouncedY = false;
        if ((posX <= 0 && velX < 0) || (posX >= canvas.width - sizeX && velX > 0)) {
            velX = -velX;
            bouncedX = true;
        }
        if ((posY <= 0 && velY < 0) || (posY >= canvas.height - sizeY && velY > 0)) {
            velY = -velY * 0.7;
            bouncedY = true;
        }
        if (bouncedX)
            AudioManager.play("ping");
        if (bouncedY)
            AudioManager.play("bounce");

        pX += elapsed * -50;

        if (pX <= 0) {
            pX = 750;
        }

        looser = false;

        var col1 = (posX > pX) && (posX < pX + 50);
        var col2 = ((posX + 80) > pX) && ((posX + 80) < (pX + 50));
        var col3 = (pX > posX) && (pX < (posX + sizeX));
        var col4 = ((pX + 50) > posX) && ((pX + 50) < (posX + sizeX));

        if (posY + sizeY > pY && (col1 || col2 || col3 || col4)) {
            looser = true
        }
    }
    // --- Rendering

    // Clear the screen
    var grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#06B');
    grad.addColorStop(0.9, '#fff');
    grad.addColorStop(0.9, '#3C0');
    grad.addColorStop(1, '#fff');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render objects
    ctx.strokeRect(posX, posY, sizeX, sizeY);
    ctx.fillStyle = "red";
    ctx.font = "10px sans-serif";
    ctx.fillText("Hello World!", posX + 10, posY + 25);
    ctx.fillStyle = "gray";
    ctx.fillRect(pX, pY, 50, 100);

    if (looser) {
        ctx.fillStyle = "red";
    } else {
        ctx.fillStyle = "green";
    }

    ctx.arc(20, 20, 10, 0, Math.PI * 2, true);
    ctx.fill();

    // Paused / Unpaused text
    ctx.fillStyle = "white";
    ctx.font = "22px sans-serif";
    ctx.fillText(paused ? "Paused" : "Running", 380, 25);
}

$(document).ready(function () {
    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");
    fps = new FPSMeter("fpsmeter", document.getElementById("fpscontainer"));
    InputManager.connect(document, canvas);

    // Async load audio and start gameplay when loaded
    AudioManager.load({
        'ping': 'sound/guitar',
        'jump': 'sound/jump',
        'bounce': 'sound/bounce1'
    }, function () {
        // All done, go!
        InputManager.reset();
        GameLoopManager.run(GameTick);
    });
});