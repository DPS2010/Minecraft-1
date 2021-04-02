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
updatePlayer()
updateBlock("ground.png")