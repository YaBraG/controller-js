let WIDTH =1000
let HEIGHT = 800

angle = 0
speed = 0

let dispAng 
let dispSpe

let multiAng = 1
let multiSpeed = 400

let sendValues = {}

function setup() {
    dispAng = document.getElementById("angle")
    dispSpe = document.getElementById("speed")
    createCanvas(WIDTH, HEIGHT);
    // x = WIDTH *0.5
    // y = HEIGHT *0.5
    // angleMode(DEGREES)
    rectMode(CENTER)

}
  
function draw() {
    background(220);
    
    push()
        translate(WIDTH/2, HEIGHT/2)
        rotate(angle * multiAng)
        rect(0,0,50,50+(speed*multiSpeed));
        if(controllers[0]){
            update();
        }
    pop()
}
  

function update () {
    let multi = 5

    let yAxis = controllers[0].axes[1]
    let xAxis = controllers[0].axes[0]
    speed = Math.hypot(xAxis, yAxis)
    angle = Math.atan2(xAxis,yAxis)
    
    sendValues.angle = angle
    sendValues.speed= speed

    dispAng.innerText = angle
    dispSpe.innerText = speed

    socket.emit('drive-control', sendValues)
}