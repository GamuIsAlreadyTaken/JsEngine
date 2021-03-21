

let canvasManager = {
    canvas: document.createElement('canvas'),
    pen: this.canvas.getContext('2d'),
    frameRate: 60,
    frameRate(frameRate) { this.frameRate = frameRate },
    setUp(){
        this.canvas.style = "border: 1px solid black";
        document.body.appendChild(this.canvas);
    },
    start(){
        setInterval(draw, 1000 / frameRate);
    }
}



