const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
console.log(ctx);

const circularray=[];
let hue=0;
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
  for (var i = 0; i <10; i++) {
      circularray.push(new circule())
  }


})
canvas.addEventListener('mousemove',function(event){
  mouse.x=event.x;
  mouse.y=event.y;
  for (var i = 0; i <2; i++) {
      circularray.push(new circule())
  }

})

class circule {
  constructor(){
    this.x = mouse.x;
    this.y = mouse.y;

    //this.x = Math.random() * innerWidth;
    //this.y = Math.random() * innerHeight;

    this.size=Math.random()*15+1;
    this.speedX=Math.random()*3-1.5;
    this.speedY=Math.random()*3-1.5;
    this.color='hsl('+hue+',100%,50%)';


  }
  update(){
    this.x+=this.speedX
    this.y+=this.speedY
    if(this.size>0.2) this.size-=0.1;
  }
  draw(){
    ctx.fillStyle=this.color
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

console.log(circularray);

function creatcirculs(){
  for (var i = 0; i < circularray.length; i++) {

    circularray[i].update();
    circularray[i].draw();
    for(let j=0;j<circularray.length;j++){
      const dx=circularray[i].x-circularray[j].x;
      const dy=circularray[i].y-circularray[j].y;
      const distance=Math.sqrt(dx*dx+dy*dy);
      if(distance<100){
        ctx.beginPath();
        ctx.strokeStyle=circularray[i].color;
        ctx.moveTo(circularray[i].x,circularray[i].y);
        ctx.lineTo(circularray[j].x,circularray[j].y)
        ctx.stroke();
      }
    }
    if(circularray[i].size<=0.3){
      circularray.splice(i,1);
      i--;
    }
  }
}

function drawCircle(){

}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
    //ctx.fillStyle='rgba(0,0,0,0.02)';
    //ctx.fillRect(0,0,canvas.width,canvas.height)
creatcirculs();
hue+=2;
  requestAnimationFrame(animate);
}
animate();
