const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
console.log(ctx);

const circularray=[];
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener('resize',function(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;


})

const mouse={
  x:undefined,
  y:undefined,
}

canvas.addEventListener('click',function(event){

  mouse.x=event.x;
  mouse.y=event.y;

})
canvas.addEventListener('mousemove',function(event){
  mouse.x=event.x;
  mouse.y=event.y;

})

class circule {
  constructor(){
    //this.x = mouse.x;
    //this.y = mouse.y;

    this.x = Math.random() * innerWidth;
    this.y = Math.random() * innerHeight;

    this.size=Math.random()*5+1;
    this.speedX=Math.random()*3-1.5;
    this.speedY=Math.random()*3-1.5;


  }
  update(){
    this.x+=this.speedX
    this.y+=this.speedY
  }
  draw(){
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(this.x,this.y,50,0,Math.PI*2);
    ctx.fill();
  }
}
function limit(){
  for (var i = 0; i < 100; i++) {
    circularray.push(new circule())
  }
}
limit();
console.log(circularray);

function creatcirculs(){
  for (var i = 0; i < circularray.length; i++) {
    circularray[i].update();
    circularray[i].draw();
  }
}

function drawCircle(){

}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
creatcirculs();
  requestAnimationFrame(animate);
}
animate();
