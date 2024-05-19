const canvas =document.getElementById('canvas1');
const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let size=0;
let number=0;
let scale=10;


function drawFlower(){
    let angle =number*8;
    let redus =scale*Math.sqrt(number);

    let positionX =redus* Math.sin(angle) + canvas.width/2;
    let positionY =redus* Math.cos(angle) + canvas.height/2;


  ctx.fillStyle='red';
  ctx.strokeStyle='blue'
  ctx.lineWidth=5;
  ctx.beginPath();
  ctx.arc(positionX,positionY,10,0,Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;

}


function animate(){

  //ctx.clearRect(0,0,canvas.width,canvas.height);

  //size +=0.05;


  drawFlower();
  if(number >300)return;


  requestAnimationFrame(animate);
}

animate();
