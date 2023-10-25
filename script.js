let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle ='black';
ctx.fillRect(100,100,370,60);
ctx.fillStyle ='red';
ctx.fillRect(100,160,370,60);
ctx.fillStyle ='yellow';
ctx.fillRect(100,220,370,60);

//-------------------------------------------------

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

//retângulo
ctx2.fillStyle = 'green';
ctx2.fillRect(120,0, 350, 230);

//losângo
ctx2.fillStyle = "yellow"
ctx2.moveTo(300,20);
ctx2.lineTo(140,120);
ctx2.lineTo(300,210);
ctx2.lineTo(450,115);    
ctx2.fill();

//Círculo
var circle = new Path2D();
circle.moveTo(125, 35);
circle.arc(300, 110, 50, 0, 2 * Math.PI);
ctx2.fillStyle='darkblue';
ctx2.fill(circle);

