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

var worldCircle = new Circle(canvas.height/2-10);
worldCircle.render(offset, context);

var firstCircle = new Circle(100, worldCircle);
firstCircle.angle = 0;
firstCircle.update(1);
firstCircle.render(offset, context);

var pen = new Circle(10, firstCircle);

function update() {
    context.clearRect(0,0,canvas.width, canvas.height);
    firstCircle.update(1);
    worldCircle.render(offset, context);
    firstCircle.render(offset, context);
    pen.render(offset, context);
    requestAnimationFrame(update);
}

requestAnimationFrame(update);
