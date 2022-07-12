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
const characterActions = ['up', 'right', 'jump']
const numberOfCharacters = 10
const characters = []
class Character { // rewriting the character values as a class variable
    constructor(){
        this.width = 103.0625
        this.height = 113.125
        this.frameX = 3
        this.x = Math.random() * canvas.width - this.width;
        this.y = Math.random() * canvas.height - this.height;
        this.speed = (Math.random() * 1.5) + 3.5
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)] // picks a random character action from the list
        if(this.action === 'up'){
            this.frameY = 0
        } else if(this.action === 'right') {
            this.frameY = 3
        } else if(this.action === 'jump') {
            this.frameY = 7
        }
    }
    draw() {
        drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        //animate the sprites
        if(this.frameX < 13) this.frameX++
        else this.frameX = 3
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
        }
    }
}
// creating multiple characters
for(let i = 0; i < numberOfCharacters; i++) {
    characters.push(new Character())
}


console.log(characters)


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

window.onload = setInterval(animate, 1000/30)

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
