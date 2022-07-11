// this is the video teaching me how to make this
// https://www.youtube.com/watch?v=GVuU25pGaYo&t=1475s

// getting the canvas as an element
const canvas = document.getElementById('canvas')
const canvasContext = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//images for sprites
const images = {}
images.player = new Image()
images.player.src = 'cuphead.png'

//the character info
const characterActions = ['up', 'up right', 'right', 'down right', 'down', 'jump']
const characters = []
class Character { // rewriting the character values as a class variable
    constructor(){
        this.width = 103.0625
        this.height = 113.125
        this.frameX = 3
        this.frameY = 3
        this.x = 0
        this.y = 0
        this.speed = (Math.random() * 1.5) + 3.5
        this.action = 'right'
    }
    draw() {
        drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        //animate the sprites
        if(this.frameX < 13) this.frameX++
        else this.frameX = 4
    }
    update() {
        //move player
        if(this.action === 'right') {
            if(this.x < canvas.width + this.width) this.x+= this.speed
            else this.x = 0 - this.width
        }

    }
}
characters.push(new Character())



function drawSprite(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) { //s is sources image, d is destination
    canvasContext.drawImage(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)
}
function animate(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    characters[0].draw()
    characters[0].update()
}

window.onload = setInterval(animate, 1000/30)

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

console.log(images.player)
