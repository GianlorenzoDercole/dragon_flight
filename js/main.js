
const canvas = document.querySelector('#canvas')

const movementDisplay = document.querySelector('#movement')
const scoreDisplay = document.querySelector('#score')

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

const goodDragon = new Crawler(5, 250, 'hotpink', 30, 30)

const randX = Math.floor(Math.random() * canvas.width)
const randY = Math.floor(Math.random() * canvas.height)

    // function generate_dragon(){
    //     const randX = Math.floor(Math.random() * canvas.width)
    //     const randY = Math.floor(Math.random() * canvas.height)
    //     const new_dragon = new Crawler(randX, randY, 'green', 30, 30)

    // }
    // generate_dragon()
    const finishLine = new Crawler((canvas.width + 11000), 0, 'white', 30, canvas.height )
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


const food = new Crawler(300,300, 'yellow', 30, 30)
const food2 = new Crawler(1000 ,Math.floor(Math.random() * canvas.height), 'yellow', 30, 30)
const food3 = new Crawler(1250, Math.floor(Math.random() * canvas.height), 'yellow', 30, 30)
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
}
function detectcol() {

    if(goodDragon.x + goodDragon.width >= food.x &&
        goodDragon.x <= food.x + food.width&&
        goodDragon.y + goodDragon.height >= food.y &&
        goodDragon.y <= food.y + food.height
    ){
        //score += 100
        food.alive = false
        movementDisplay.innerText = 'food'
    }
    if(goodDragon.x + goodDragon.width >= food2.x &&
        goodDragon.x <= food2.x + food2.width&&
        goodDragon.y + goodDragon.height >= food2.y &&
        goodDragon.y <= food2.y + food2.height
    )
    {
        //score += 100
        food2.alive = false
        movementDisplay.innerText = 'mmmmm'
    }
    if(goodDragon.x + goodDragon.width >= food3.x &&
        goodDragon.x <= food3.x + food3.width&&
        goodDragon.y + goodDragon.height >= food3.y &&
        goodDragon.y <= food3.y + food3.height
    )
    {
        //score += 100
        food3.alive = false
        movementDisplay.innerText = 'mmmmm'
    }
    if (goodDragon.x >finishLine.x && goodDragon.alive == true){
        movementDisplay.innerText = 'you win'
        goodDragon.alive = false
    }
}
























function detectDragons() {
    for (let i = 0; i < dragonArray.length; i++){
        if(goodDragon.x + goodDragon.width >= dragonArray[i].x &&
            goodDragon.x <= dragonArray[i].x + dragonArray[i].width&&
            goodDragon.y + goodDragon.height >= dragonArray[i].y &&
            goodDragon.y <= dragonArray[i].y + dragonArray[i].height
        ){
            goodDragon.alive = false
            movementDisplay.innerText = 'lose'
        }
    }

}
score = 0

function gameLoop(){
    scoreDisplay.innerText = score

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(goodDragon.alive == true) {
        finishLine.render()
    }

    finishLine.x -= 10
    if( food.alive == true && goodDragon.alive == true) {
        food.render()
    }

    food.x -= 1

    if( food2.alive == true && goodDragon.alive == true) {
        food2.render()
    }

    food2.x -= 1
    if( food3.alive == true && goodDragon.alive == true) {
        food3.render()
    }

    food3.x -= 1

    for (let i = 0 ; i < dragonArray.length; i++){
        if(goodDragon.alive == true){
            dragonArray[i].render()
        dragonArray[i].x -= 10
        }


    }
    if (goodDragon.alive == true){
        goodDragon.render()
    }
    //goodDragon.y += 1
    scoreDisplay.innerText = score
    detectcol()
    detectDragons()

if( food.alive === false) {
    score = 100
}
if( food2.alive === false){
    score = 100
}
if (food3.alive === false){
    score = 100
}
if(food.alive === false && food2.alive ===false){
    score = 200
}
if(food.alive === false && food3.alive ===false){
    score = 200
}
if(food2.alive === false && food3.alive ===false){
    score = 200
}
if( food.alive === false && food2.alive === false && food3.alive === false){
    score = 300
}

}

canvas.addEventListener('click', e => {
    // const red = Math.floor(Math.random() * 250)
    // const blue = Math.floor(Math.random() * 250)
    // const green = Math.floor(Math.random() * 250)
    // const rgb = `rgb(${red},${green},${blue})`
    // drawBox(e.offsetX, e.offsetY, 30, 30, 'red')
})




document.addEventListener('keydown', movementHandler)
