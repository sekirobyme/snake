let snakeBody = [{ x : 50, y : 50 },{ x : 75, y : 50 },{ x : 100, y : 50}]; // 蛇
let orientation = undefined; // 蛇头朝向
let foodPosition = { x : 20, y : 20 };
let map = document.getElementById("map");

window.onload = function (){
    drawFood()
}

// 刷新地图
function updateMap(){
    let children = map.children
    for (let i = children.length - 1;i >=0; i--){
        map.removeChild(children[i])
    }
    drawSnake()
}

// 绘制蛇身
function drawSnake(){
    for (let i = 0; i <snakeBody.length; i++){
        let snake = document.createElement("div")
        snake.classList.add("snake");
        snake.style.bottom = (snakeBody[i].y ) + "px";
        snake.style.left = (snakeBody[i].x ) + "px";
        map.appendChild(snake)
    }
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
    snakeBody.unshift(head)
    snakeBody.pop()
    updateMap()
}
// 蛇头的朝向
function moveTo(event){
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

// 生成食物
function drawFood(){

    let food = document.createElement("span")
    foodPosition.x = Math.floor(Math.random() * map.offsetWidth);
    foodPosition.y = Math.floor(Math.random() * map.offsetHeight);
    food.className = "food"
    food.style.left = foodPosition.x + "px"
    food.style.bottom = foodPosition.y + "px"
    map.appendChild(food)
    console.log(foodPosition)
}
    window.addEventListener('keydown',moveTo)
    window.setInterval(move,1)

// ArrowUp ArrowRight ArrowDown ArrowLeft