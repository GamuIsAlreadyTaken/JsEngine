

let canvasManager = {
    canvas: null,
    pen: null,
    frameRate: 60,
    setUp() {

        setUp();
        if (!this.canvas) createCanvas(100);
        document.body.appendChild(this.canvas);
        document.addEventListener('mousemove',updateMouse);
        this.start();
    },
    start() {
        setInterval(this.draw, Math.floor(1000 / this.frameRate));
    },
    draw(){
        draw();
        canvasManager.pen.resetTransform();
    }
}

canvasManager.setUp();
//Mouse
let mouseX = 0;
let mouseY = 0;

function updateMouse(event){
    let rect = canvasManager.canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
}

//Canvas
function createCanvas(w, h = w) {
    let canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    canvasManager.canvas = canvas;
    canvasManager.pen = canvas.getContext('2d');
}
function frameRate(frameRate) {
    canvasManager.frameRate = frameRate;
}
function fill(color) {
    canvasManager.pen.fillStyle = color;
}
function stroke(color) {
    canvasManager.pen.strokeStyle = color;
}
function noStroke(){
    canvasManager.pen.strokeStyle = '#00000000';
}
function push() {
    canvasManager.pen.save();
}
function pop() {
    canvasManager.pen.restore();
}
function background(color) {
    push();
    fill(color)
    canvasManager.pen.fillRect(0, 0, canvasManager.canvas.width, canvasManager.canvas.height);
    pop();
}
function rect(x, y, w, h = w) {
    canvasManager.pen.fillRect(x, y, w, h);
    canvasManager.pen.strokeRect(x, y, w, h);
}
function ellipse(x,y,w,h = w) {
    canvasManager.pen.beginPath();
    canvasManager.pen.ellipse(x, y, w, h, 0, 0, 2 * Math.PI);
    canvasManager.pen.stroke();
    canvasManager.pen.fill();
    canvasManager.pen.closePath();
}
function rotate(angle){
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    canvasManager.pen.setTransform(cos,-sin,sin,cos,0,0);
}
function line(x1,y1,x2,y2){
    canvasManager.pen.beginPath();
    canvasManager.pen.moveTo(x1,y1);
    canvasManager.pen.lineTo(x2,y2);
    canvasManager.pen.stroke();
    canvasManager.pen.closePath();
}
function strokeWidth(width){
    canvasManager.pen.lineWidth = width;
}
function lineCap(type){
    canvasManager.pen.lineCap = type;
}







