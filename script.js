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
const numberOfCharacters = 30
const characters = []
class Character { // rewriting the character values as a class variable
    constructor(){
        this.width = 103.0625
        this.height = 113.125
        this.frameX = 3
        this.x = Math.random() * canvas.width - this.width;
        this.y = Math.random() * canvas.height - this.height;
        this.speed = (Math.random() * 5.5) + 3.5
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)] // picks a random character action from the list
        if(this.action === 'up'){
            this.frameY = 0
            this.minFrame = 4
            this.maxFrame = 15
        } else if(this.action === 'right') {
            this.frameY = 3
            this.minFrame = 3
            this.maxFrame = 13
        } else if(this.action === 'jump') {
            this.frameY = 7
            this.minFrame = 0
            this.maxFrame = 9
        } else if(this.action === 'up right') {
            this.frameY = 1
            this.minFrame = 2
            this.maxFrame = 14
        } else if(this.action === 'down right') {
            this.frameY = 4
            this.minFrame = 4
            this.maxFrame = 15
        } else if(this.action === 'down') {
            this.frameY = 6
            this.minFrame = 0
            this.maxFrame = 12
        }
    }
    draw() {
        drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        if(this.frameX < this.maxFrame) this.frameX++
        else this.frameX = this.minFrame
    }
    update() {
        //move player
        if(this.action === 'right') {
            if(this.x > canvas.width + this.width) {
                this.x = 0 - this.width
                this.y = Math.random() * (canvas.height - this.height)                 
            }
            else {
                this.x+= this.speed
            } 
        } else if (this.action === 'up') {
            if(this.y < (0 - this.height)) {
                this.y = canvas.height + this.height
                this.x = Math.random() * canvas.width
            } else {
                this.y -= this.speed
            }
        } else if(this.action === 'down') {
            if(this.y > (canvas.height + this.height)) {
                this.y = 0 - this.height
                this.x = Math.random() * canvas.width
            } else {
                this.y+= this.speed
            }
        } else if(this.action === 'down right') {
            if(this.y > canvas.height + this.height && this.x > canvas.width + this.width) {
                this.y = 0 - this.height
                this.x = Math.random() * canvas.width/2
            } else {
                this.y += this.speed
                this.x += this.speed
            }
        } else if(this.action === 'up right') {
            if(this.y < (0 - this.height) && this.x > canvas.width + this.width) {
                this.y = canvas.height + this.height
                this.x = Math.random() * canvas.width/2
            } else {
                this.y -= this.speed
                this.x += this.speed
            }
        }
    }
}
// creating multiple characters
for(let i = 0; i < numberOfCharacters; i++) {
    characters.push(new Character())
}

function drawSprite(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) { //s is sources image, d is destination
    canvasContext.drawImage(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)
}
function animate(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < characters.length; i++) {
        characters[i].draw();
        characters[i].update();
    }
    
}

console.log(characters)
window.onload = setInterval(animate, 1000/30)

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
