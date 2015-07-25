/// <reference path="Pen.ts"/>
/// <reference path="Shape.ts"/>

var canvas : HTMLCanvasElement = document.createElement("canvas");
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var context : CanvasRenderingContext2D = canvas.getContext("2d");

var offset = {x:canvas.width/2,y:canvas.height/2};

var worldCircleRadius = canvas.height/2-10

var worldCircle = new Circle(worldCircleRadius);
worldCircle.render(offset, context);

var firstCircle = new Circle(worldCircleRadius/1.2, worldCircle);
firstCircle.angle = 0;

var pen = new Circle(10, firstCircle);

function update() {
    for(var i=0;i<100;i++) {
        //context.clearRect(0,0,canvas.width, canvas.height);
        firstCircle.update(2);
        worldCircle.render(offset, context);
        //firstCircle.render(offset, context);
        pen.render(offset, context);
    }
    requestAnimationFrame(update);
}

requestAnimationFrame(update);
