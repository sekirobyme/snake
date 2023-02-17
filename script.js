let test = document.getElementById("test")
let horizontal = 0;
let vertical = 0;
let moveTo = undefined;
window.setInterval(move = () => {
    if (moveTo === "ArrowUp" || moveTo === "ArrowDown"){
        switch (moveTo){
            case "ArrowUp":
                vertical -= 1;
                test.style.top = vertical + 'px'
                break;
            case "ArrowDown":
                vertical += 1;
                test.style.top = vertical + 'px'
                break;
        }
    }else if (moveTo === "ArrowRight" || moveTo === "ArrowLeft"){
        switch (moveTo){
            case "ArrowRight":
                horizontal += 1;
                test.style.left = horizontal + 'px'
                break;
            case "ArrowLeft":
                horizontal -= 1;
                test.style.left = horizontal + 'px'
                break;
        }
    }
},1)
window.onkeydown = function (ev){
    console.log(ev.code)
    moveTo = ev.code
    console.log(typeof moveTo)
}
// ArrowUp ArrowRight ArrowDown ArrowLeft