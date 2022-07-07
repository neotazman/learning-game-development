// getting the canvas as an element
const canvas = document.getElementById('canvas')
const canvasContext = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//images for sprites
const images = {}
images.player = new Image()
images.player.src = 'cuphead.png'
const characterActions = ['up', 'up right', 'right', 'down right', 'down', 'jump']

class Character {
    constructor(){
        this.width = 103.0625
        this.height = 113.125
        this.frameX = 3
        this.frameY = 3
        this.x = 0
        this.y = 0
        this.speed = (Math.random() * 1.5) + 3.5
    }
}

const playerWidth = 103.0625
const playerHeight = 113.125
let playerFrameX = 3
let playerFrameY = 3
let playerX = 0
let playerY = 0
const playerSpeed = 6

function drawSprite(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) { //s is sources image, d is destination
    canvasContext.drawImage(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)
}
function animate(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight)
    //animate the sprites
    if(playerFrameX < 13) playerFrameX++
    else playerFrameX = 4
    //move player
    if(playerX < canvas.width + playerWidth) playerX+= playerSpeed
    else playerX = 0 - playerWidth
}

window.onload = setInterval(animate, 1000/30)

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

console.log(images.player)
