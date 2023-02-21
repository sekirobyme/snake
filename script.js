let snakeBody = [{x:0,y:0}] // 蛇
let orientation = undefined // 蛇头朝向
let snake = document.getElementById("snake")

// 绘制蛇身
function drawSnake(){
    for (let i = 0; i <snakeBody.length; i++){
        snake.style.bottom = (snakeBody[i].y ) + "px"
        snake.style.left = (snakeBody[i].x ) + "px"
    }
    move()
}
// 蛇的移动
function move(){
    let head = snakeBody[0]
    switch (orientation){
        case "up":
            head.y++
            break;
        case "down":
            head.y--
            break;
        case "right":
            head.x++
            break;
        case "left":
            head.x--
            break;
    }
}
// 蛇头的朝向
function moveTo(event){
    console.log(event)
    if (event.key === "ArrowUp" && orientation !== "down"){
        //向上运动
        orientation = "up"
    } else if (event.key === "ArrowDown" && orientation !== "up"){
        //向下运动
        orientation = "down"
    } else if (event.key === "ArrowLeft" && orientation !== "right"){
        //向左运动
        orientation = "left"
    } else if (event.key === "ArrowRight" && orientation !== "left"){
        //向右运动
        orientation = "right"
    }
}
    window.addEventListener('keydown',moveTo)
    window.setInterval(drawSnake,1)

// ArrowUp ArrowRight ArrowDown ArrowLeft