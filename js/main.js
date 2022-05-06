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
const goodDragon = new Crawler(5, 250, 'hotpink', 30, 30)
// hero.render()
//montster
const randX = Math.floor(Math.random() * canvas.width)
const randY = Math.floor(Math.random() * canvas.height)
const ogre = new Crawler(randX, randY, 'green', 75, 110)
// ogre.render()

    // function generate_dragon(){
    //     const randX = Math.floor(Math.random() * canvas.width)
    //     const randY = Math.floor(Math.random() * canvas.height)
    //     const new_dragon = new Crawler(randX, randY, 'green', 30, 30)

    // }
    // generate_dragon()
    const finishLine = new Crawler((canvas.width + 2000), 0, 'white', 30, canvas.height )
    const dragonArray = []
    function dragons() {

            for (let i = 0; i < 11; i++){

                //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
                dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 1000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
                dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 2000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

            }

    }
    function dragons2() {

        for (let i = 0; i < 11; i++){

            //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
            dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 3000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
            dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 4000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

        }

}
function dragons3() {

    for (let i = 0; i < 11; i++){

        //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
        dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 5000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
        dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 6000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

    }

}
function dragons4() {

    for (let i = 0; i < 11; i++){

        //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
        dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 7000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
        dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 8000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

    }

}
function dragons5() {

    for (let i = 0; i < 11; i++){

        //dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
        dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 9000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))
        dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * (canvas.width )+ 10000), Math.floor(Math.random() * canvas.height), 'green', 30, 30))

    }

}
dragons()
dragons2()
dragons3()
dragons4()
dragons5()

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
        goodDragon.y = goodDragon.y -speed
        break
        case('s'):
        goodDragon.y = goodDragon.y + speed
        break
        case('a'):
        goodDragon.x = goodDragon.x - speed
        break
        case('d'):
        goodDragon.x = goodDragon.x + speed
        break
    }
    //movementDisplay.innerText = `x: ${hero.x} y: ${hero.y}`
    // hero.render()
}
dragonArray.push(badDragon = new Crawler(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 'green', 120, 120))
// all of the game logic is executed every frame
// function detectHit() {
//     if(hero.x + hero.width >= ogre.x &&
//         hero.x <= ogre.x + ogre.width&&
//         hero.y + hero.height >= ogre.y &&
//         hero.y <= ogre.y + ogre.height
//     ){
//         ogre.alive = false
//         movementDisplay.innerText = 'you killed shrek'
//     }
// }
// function detectcol() {
//     if(hero.x + hero.width >= d.x &&
//         hero.x <= d.x + d.width&&
//         hero.y + hero.height >= d.y &&
//         hero.y <= d.y + d.height
//     ){
//         ogre.alive = false
//         movementDisplay.innerText = 'you killed shrek'
//     }
// }






























function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // detectHit()
    // if(ogre.alive){
    //     ogre.render()
    // }

    finishLine.render()
    finishLine.x -= 5
    // dragon.render()

    // dragon2.render()
    // dragon2.x -= 5
    food.render()
    food.x -= 1
    // dragon.x -= 5
    // dragon3.render()
    // dragon3.x -= 5
    for (let i = 0 ; i < dragonArray.length; i++){
        dragonArray[i].render()
        dragonArray[i].x -=5
        // if(dragonArray[i].x < 0){
        //     dragonArray.pop(dragonArray[i])
        // }

    }
    // detectcol()
    goodDragon.render()
    //goodDragon.y += 1


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
