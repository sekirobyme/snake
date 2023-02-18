let snake = [{x:'',y:''}] // 蛇
let orientation = undefined // 蛇头朝向
let test = document.getElementById("snake")

// 蛇的移动
function move(){
    switch (orientation){
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
// ArrowUp ArrowRight ArrowDown ArrowLeft