

let canvasManager = {
    canvas: null,
    pen: null,
    frameRate: 60,
    setUp() {

        setUp();
        if (!this.canvas) createCanvas(100);
        document.body.appendChild(this.canvas);
    },
    start() {
        setInterval(draw, Math.floor(1000 / this.frameRate));
    }
}

canvasManager.setUp();
canvasManager.start();

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
let oldState ={
    fillStyle:null,
    strokeStyle:null
};
function push() {
    oldState.fillStyle = canvasManager.pen.fillStyle;
    oldState.strokeStyle = canvasManager.pen.strokeStyle;
}
function pop() {
    canvasManager.pen.fillStyle = oldState.fillStyle;
    canvasManager.pen.strokeStyle = oldState.strokeStyle;
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






