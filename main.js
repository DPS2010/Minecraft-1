var canvas = new fabric.Canvas("myCanvas")
var blockwidth = 30
var blockheight = 30
var playerx = 100
var playery = 100
var playerObject = ""
var blockObject = ""

function updatePlayer() {
    fabric.Image.fromURL("player.png", function (img) {
        playerObject = img;
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(150)
        playerObject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerObject)
    })
}

function updateBlock(block) {
    fabric.Image.fromURL(block, function (img) {
        blockObject = img;
        blockObject.scaleToWidth(blockwidth)
        blockObject.scaleToHeight(blockheight)
        blockObject.set ({
            top:playery,
            left:playerx
        });
        canvas.add(blockObject)
    })
}
window.addEventListener("keydown", kd)

function kd(e) {
x = e.keyCode
console.log(x)

if (x == 67) {
    updateBlock("cloud.jpg")
}
if (x == 68) {
    updateBlock("dark_green.png")
}
if (x == 71) {
    updateBlock("ground.png")
}
if (x == 76) {
    updateBlock("light_green.png")
}
if (x == 82) {
    updateBlock("roof.jpg")
}
if (x == 84) {
    updateBlock("trunk.jpg")
}
if (x == 85) {
    updateBlock("unique.png")
}
if (x == 87) {
    updateBlock("wall.jpg")
}
if (x == 89) {
    updateBlock("yellow_wall.png")
}

if (x == 37) {
    left()
}
if (x == 38) {
    up()
}
if (x == 39) {
    right()
}
if (x == 40) {
    down()
}
if (e.shiftKey == true && x == 80) {
    console.log("P and shift have been pressed together")
    blockheight = blockheight + 10
    blockwidth = blockwidth + 10
    document.getElementById("width").innerHTML = blockwidth
    document.getElementById("height").innerHTML = blockheight
}
if (e.shiftKey == true && x == 77) {
    console.log("M and shift have been pressed together")
    blockheight = blockheight - 10
    blockwidth = blockwidth - 10
    document.getElementById("width").innerHTML = blockwidth
    document.getElementById("height").innerHTML = blockheight
}
}