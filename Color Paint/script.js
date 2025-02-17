const layout = document.getElementById("layout1");
const playCircle = document.getElementById("playerCircle");
const xCircle = document.getElementById("xCircle");
const yCircle = document.getElementById("yCircle");
const curr_color = document.getElementById("curr_color");
const circle = document.getElementsByClassName("circle");
const color_order = ["red", "limegreen", "blue", "yellow", "purple"]

const no_row = layout.getAttribute("data-row_no");
const no_col = layout.getAttribute("data-col_no");

const maxValueX = (no_row-1)*100;
const maxValueY = (no_col-1)*100;

layout.style.gridTemplateRows = `repeat(${no_row}, 100px)`;
layout.style.gridTemplateColumns = `repeat(${no_col}, 100px)`;

var xCircleX = 0;
var yCircleY = 0;

var x=0, y=0, z=0;
var store;

var newColor = "limegreen";
var index;

var dummy = false;
var isKeyPressed = false

xCircle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`

function reposition() {
    if (x == 0) {
        xCircle.style.transform = `translate3d(${maxValueX+100}px, ${y}px, ${z}px)`
        xCircleX = maxValueX+100;
    }
    if (y == 0) {
        yCircle.style.transform = `translate3d(${x}px, ${maxValueY+100}px, ${z}px)`
        yCircleY = maxValueY+100;
    }
    if (x == maxValueX) {
        xCircle.style.transform = `translate3d(${-100}px, ${y}px, ${z}px)`
        xCircleX = -100;
    }
    if (y == maxValueY) {
        yCircle.style.transform = `translate3d(${x}px, ${-100}px, ${z}px)`
        yCircleY = -100;
    }
}

function slide() {
    if (dummy) {
        playCircle.style.transition = "0s"
        xCircle.style.transition = "0s"
        yCircle.style.transition = "0s"

        if (store == "x") {
            playCircle.style.transform = `translate3d(${xCircleX}px, ${y}px, ${z}px)`;
            xCircle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            x = xCircleX;
        } else {
            playCircle.style.transform = `translate3d(${x}px, ${yCircleY}px, ${z}px)`;
            yCircle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            y = yCircleY;
        }
    }
    reposition()
    dummy = false;
}


reposition()

document.addEventListener('keydown', function(event) {
    playCircle.style.transition = "0.3s"
    if (isKeyPressed) return;

    isKeyPressed = true
    switch (event.key) {
        case "ArrowUp":
            y -= 100
            if (y<0) {
                dummy = true;
                yCircleY = maxValueY;
                store = "y";
            }
            break;
        case "ArrowDown":
            y += 100
            if (y>maxValueY) {
                dummy = true;
                yCircleY = 0;
                store = "y";
            }
            break;
        case "ArrowLeft":
            x -= 100
            if (x<0) {
                dummy = true;
                xCircleX = maxValueX;
                store = "x";
            }
            break;
        case "ArrowRight":
            x += 100
            if (x>maxValueX) {
                dummy = true;
                xCircleX = 0;
                store = "x";
            }
            break;
        case "Enter":
        case " ":
            index = (Math.floor(y/100)*no_row) + Math.floor(x/100)
            circle[index+6].style.backgroundColor = newColor;
            break
        case "1" :
        case "2" :
        case "3" :
        case "4" :
        case "5" :
            index = Number(event.key)
            curr_color.style.backgroundColor = color_order[index-1];
            newColor = color_order[index-1];
            break
        default:
            break
    }

    if (dummy) {    
        xCircle.style.transition = "0.3s"
        yCircle.style.transition = "0.3s"
        xCircle.style.transform = `translate3d(${xCircleX}px, ${y}px, ${z}px)`
        yCircle.style.transform = `translate3d(${x}px, ${yCircleY}px, ${z}px)`
    }
    
    playCircle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`
    setTimeout(()=> {
        isKeyPressed = false
        slide()
    }, 300)

    reposition()
    
})

function chooseColor(color) {
    curr_color.style.backgroundColor = color;
    newColor = color;
}

