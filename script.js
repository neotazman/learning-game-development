// getting the canvas as an element
const canvas = document.getElementById('canvas')
const canvasContext = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//images for sprites
const images = {}
images.player = new Image()
images.player.src = 'cuphead.png'

const playerWidth = '103.0625'
const playerHeight = '113.125'
let playerFrameX = 3
let playerFrameY = 3




console.log(images.player)
