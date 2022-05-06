/*DOM selectors */
//canvas element
const canvas = document.querySelector('#canvas')
//hud for the player
const movementDisplay = document.querySelector('#movement')


const ctx = canvas.getContext('2d')


canvas.setAttribute('height', getComputedStyle(canvas)["height"])
canvas.setAttribute('width', getComputedStyle(canvas)["width"])

const gameLoopInterval = setInterval(gameLoop, 60)


class Crawler {
    constructor(x, y, color, width, height){
        this.x =x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.color = color
        this.alive = true
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}


//hero of
const hero = new Crawler(5, 5, 'hotpink', 30, 30)
// hero.render()
//montster
const randX = Math.floor(Math.random() * canvas.width)
const randY = Math.floor(Math.random() * canvas.height)
const ogre = new Crawler(randX, randY, 'green', 75, 110)
// ogre.render()
const dragon_arr  = ['y','u','i']
    // function generate_dragon(){
    //     const randX = Math.floor(Math.random() * canvas.width)
    //     const randY = Math.floor(Math.random() * canvas.height)
    //     const new_dragon = new Crawler(randX, randY, 'green', 30, 30)

    // }
    // generate_dragon()
    const a = [d = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30),d = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30)]
    for (let i = 0; i < dragon_arr.length; i++){
        const randX = Math.floor(Math.random() * canvas.width)
        const randY = Math.floor(Math.random() * canvas.height)
        // d = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30)
        // console.log(d)
        a.push(d = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

    }

const dragon = new Crawler(1000,100, 'green', 30, 30)
const dragon2 = new Crawler(500,200, 'green', 30, 30)
const dragon3 = new Crawler(600,300, 'green', 30, 30)
const food = new Crawler(300,300, 'yellow', 30, 30)
function drawBox(x , y, w, h, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
    }

//handle listeners
function movementHandler(e) {
    const speed = 10

    switch(e.key) {
        case('w'):
        hero.y = hero.y -speed
        break
        case('s'):
        hero.y = hero.y + speed
        break
        case('a'):
        hero.x = hero.x - speed
        break
        case('d'):
        hero.x = hero.x + speed
        break
    }
    movementDisplay.innerText = `x: ${hero.x} y: ${hero.y}`
    // hero.render()
}
a.push(d = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 120, 120))
// all of the game logic is executed every frame
function detectHit() {
    if(hero.x + hero.width >= ogre.x &&
        hero.x <= ogre.x + ogre.width&&
        hero.y + hero.height >= ogre.y &&
        hero.y <= ogre.y + ogre.height
    ){
        ogre.alive = false
        movementDisplay.innerText = 'you killed shrek'
    }
}
function detectcol() {
    if(hero.x + hero.width >= d.x &&
        hero.x <= d.x + d.width&&
        hero.y + hero.height >= d.y &&
        hero.y <= d.y + d.height
    ){
        ogre.alive = false
        movementDisplay.innerText = 'you killed shrek'
    }
}



function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    detectHit()
    // if(ogre.alive){
    //     ogre.render()
    // }

    dragon.render()

    // dragon2.render()
    // dragon2.x -= 5
    food.render()
    food.x -= 1
    // dragon.x -= 5
    // dragon3.render()
    dragon3.x -= 5
    for (let i = 0 ; i < a.length; i++){
        a[i].render()
        a[i].x -=5
        detectcol()
    }
    hero.render()
    hero.y += 1


}
/* Event Listeners*/
//draw a box whenever you click on the canvas
canvas.addEventListener('click', e => {
    // const red = Math.floor(Math.random() * 250)
    // const blue = Math.floor(Math.random() * 250)
    // const green = Math.floor(Math.random() * 250)
    // const rgb = `rgb(${red},${green},${blue})`
    // drawBox(e.offsetX, e.offsetY, 30, 30, 'red')
})




document.addEventListener('keydown', movementHandler)
