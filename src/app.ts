var canvas : HTMLCanvasElement = document.createElement("canvas");
canvas.style.width = "100%";
canvas.style.height = "100%";
document.body.appendChild(canvas);


var context : CanvasRenderingContext2D = canvas.getContext("2d");
context.beginPath();
context.arc(canvas.width/2,canvas.height/2,Math.min(canvas.width,canvas.height)/2 - 10,0,2*Math.PI,false);
context.stroke();